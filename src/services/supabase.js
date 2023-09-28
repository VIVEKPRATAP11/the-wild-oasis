import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ufujresghbjrylpmwtvu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmdWpyZXNnaGJqcnlscG13dHZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5OTM1MzAsImV4cCI6MjAwMjU2OTUzMH0.G_VRYyu73BaHUW3VKOYf2jzJSeuKw0XgBxQRjb9utQE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
