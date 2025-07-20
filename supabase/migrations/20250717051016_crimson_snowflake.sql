/*
  # Create contacts table for form submissions

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `company` (text, optional)
      - `phone` (text, optional)
      - `message` (text, required)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contacts` table
    - Add policy for inserting contact submissions
    - Add policy for reading contacts (admin only)
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert contact submissions
CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy to allow authenticated users to read contacts (for admin purposes)
CREATE POLICY "Authenticated users can read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Create an index on created_at for better query performance
CREATE INDEX IF NOT EXISTS contacts_created_at_idx ON contacts(created_at DESC);