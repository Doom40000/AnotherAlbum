import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://dzyysriuakjpgvyltnjr.supabase.co"!,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6eXlzcml1YWtqcGd2eWx0bmpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzMDI5MjEsImV4cCI6MjAxNTg3ODkyMX0.z79rJn1IHnM10XB4GQlvenzlpgiezMPMv-ofY1a9eRQ"!
);

export default supabase;