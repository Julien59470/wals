export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

type EmptyRelationships = [];

export type Database = {
  __InternalSupabase: { PostgrestVersion: "14.15" };
  public: {
    Tables: {
      launch_subscriptions: {
        Row: { audience: string; consent_at: string; email: string; id: string; source: string; unsubscribed_at: string | null };
        Insert: { audience: string; consent_at?: string; email: string; id?: string; source?: string; unsubscribed_at?: string | null };
        Update: { audience?: string; consent_at?: string; email?: string; id?: string; source?: string; unsubscribed_at?: string | null };
        Relationships: EmptyRelationships;
      };
      website_leads: {
        Row: { activity: string | null; audience: string; business_name: string | null; created_at: string; email: string; full_name: string; id: string; marketing_opt_in: boolean; message: string | null; phone: string | null; privacy_acknowledged: boolean; source: string; status: string };
        Insert: { activity?: string | null; audience: string; business_name?: string | null; created_at?: string; email: string; full_name: string; id?: string; marketing_opt_in?: boolean; message?: string | null; phone?: string | null; privacy_acknowledged: boolean; source?: string; status?: string };
        Update: { activity?: string | null; audience?: string; business_name?: string | null; created_at?: string; email?: string; full_name?: string; id?: string; marketing_opt_in?: boolean; message?: string | null; phone?: string | null; privacy_acknowledged?: boolean; source?: string; status?: string };
        Relationships: EmptyRelationships;
      };
      website_rate_limits: {
        Row: { bucket: string; expires_at: string; hits: number };
        Insert: { bucket: string; expires_at: string; hits?: number };
        Update: { bucket?: string; expires_at?: string; hits?: number };
        Relationships: EmptyRelationships;
      };
      partner_leads: {
        Row: { activity: string; consent_privacy: boolean; created_at: string; email: string; full_name: string; id: string; message: string | null; phone: string | null; source: string; status: string };
        Insert: { activity: string; consent_privacy?: boolean; created_at?: string; email: string; full_name: string; id?: string; message?: string | null; phone?: string | null; source?: string; status?: string };
        Update: { activity?: string; consent_privacy?: boolean; created_at?: string; email?: string; full_name?: string; id?: string; message?: string | null; phone?: string | null; source?: string; status?: string };
        Relationships: EmptyRelationships;
      };
      partner_waitlist: {
        Row: { consent_launch: boolean; created_at: string; email: string; id: string; source: string; unsubscribed_at: string | null };
        Insert: { consent_launch?: boolean; created_at?: string; email: string; id?: string; source?: string; unsubscribed_at?: string | null };
        Update: { consent_launch?: boolean; created_at?: string; email?: string; id?: string; source?: string; unsubscribed_at?: string | null };
        Relationships: EmptyRelationships;
      };
    };
    Views: Record<string, never>;
    Functions: {
      record_website_lead: {
        Args: { p_activity: string; p_audience: string; p_business_name: string; p_email: string; p_fingerprint: string; p_full_name: string; p_marketing_opt_in: boolean; p_message: string; p_phone: string; p_privacy_acknowledged: boolean };
        Returns: string;
      };
      unsubscribe_launch: { Args: { p_email: string }; Returns: undefined };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
