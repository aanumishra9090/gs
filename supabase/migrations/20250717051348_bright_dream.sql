/*
  # Create consultant_requests table for consultation form submissions

  1. New Tables
    - `consultant_requests`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, optional)
      - `company_name` (text, optional)
      - `message` (text, required)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `consultant_requests` table
    - Add policy for public insert access
    - Add policy for authenticated users to read (admin access)
*/

CREATE TABLE IF NOT EXISTS consultant_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company_name text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultant_requests ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone (including anonymous users) to insert consultation requests
CREATE POLICY "Anyone can submit consultation requests"
  ON consultant_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy to allow authenticated users to read consultation requests (for admin purposes)
CREATE POLICY "Authenticated users can read consultation requests"
  ON consultant_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Create an index on created_at for better query performance
CREATE INDEX IF NOT EXISTS consultant_requests_created_at_idx ON consultant_requests(created_at DESC);

-- Create an index on email for potential duplicate checking
CREATE INDEX IF NOT EXISTS consultant_requests_email_idx ON consultant_requests(email);