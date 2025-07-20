export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string
          name: string
          email: string
          company: string | null
          phone: string | null
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          company?: string | null
          phone?: string | null
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          company?: string | null
          phone?: string | null
          message?: string
          created_at?: string
        }
      }
      consultant_requests: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          company_name: string | null
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          company_name?: string | null
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          company_name?: string | null
          message?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}