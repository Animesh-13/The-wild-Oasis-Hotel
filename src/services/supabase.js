import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yalxsvbbdibplewmjfzb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhbHhzdmJiZGlicGxld21qZnpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExMjk5OTEsImV4cCI6MjAwNjcwNTk5MX0._3AriejDXZESfb2PiCipaEAQ3BbF7Df6Mok9o7DMXjw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
