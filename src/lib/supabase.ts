import { createClient } from "@supabase/supabase-js";

// Public browser configuration. Never place a service_role/secret key here.
const supabaseUrl = "https://mvwflakurihhakdrlteg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12d2ZsYWt1cmloaGFrZHJsdGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMjIwMDksImV4cCI6MjEwNDc5ODAwOX0.E09Vufp77NOkpGjJZMH6sbWYInKu_sMzV7eqHX6xQ0A";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
