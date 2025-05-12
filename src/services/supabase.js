import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gshdeoxquimjfbngfgel.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzaGRlb3hxdWltamZibmdmZ2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzMzc1MTMsImV4cCI6MjA2MTkxMzUxM30.F6a6mhZJrFXPn0xh3tI10rAfmKr4nVuwnyJVUpx0qQk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
