export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.15";
  };
  public: {
    Tables: {
      partner_leads: {
        Row: {
          activity: string;
          consent_privacy: boolean;
          created_at: string;
          email: string;
          full_name: string;
          id: string;
          message: string | null;
          phone: string | null;
          source: string;
          status: string;
        };
        Insert: {
          activity: string;
          consent_privacy?: boolean;
          created_at?: string;
          email: string;
          full_name: string;
          id?: string;
          message?: string | null;
          phone?: string | null;
          source?: string;
          status?: string;
        };
        Update: {
          activity?: string;
          consent_privacy?: boolean;
          created_at?: string;
          email?: string;
          full_name?: string;
          id?: string;
          message?: string | null;
          phone?: string | null;
          source?: string;
          status?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
