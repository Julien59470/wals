type EmptyRelationships = [];

export type Database = {
  __InternalSupabase: { PostgrestVersion: "14.17" };
  public: {
    Tables: {
      launch_subscriptions: {
        Row: { audience: string; consent_at: string; consent_version: string; email: string; expires_at: string; id: string; source: string };
        Insert: { audience: string; consent_at?: string; consent_version?: string; email: string; expires_at?: string; id?: string; source?: string };
        Update: { audience?: string; consent_at?: string; consent_version?: string; email?: string; expires_at?: string; id?: string; source?: string };
        Relationships: EmptyRelationships;
      };
      website_rate_limits: {
        Row: { bucket: string; expires_at: string; hits: number };
        Insert: { bucket: string; expires_at: string; hits?: number };
        Update: { bucket?: string; expires_at?: string; hits?: number };
        Relationships: EmptyRelationships;
      };
    };
    Views: Record<string, never>;
    Functions: {
      subscribe_launch: { Args: { p_email: string; p_audience: string; p_fingerprint: string }; Returns: undefined };
      unsubscribe_launch_secure: { Args: { p_email: string; p_fingerprint: string }; Returns: undefined };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
