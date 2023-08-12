import 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'

const supabaseUrl = 'https://nehibeqlnydjxvhpcfml.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5laGliZXFsbnlkanh2aHBjZm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MjI5MTEsImV4cCI6MjAwNjM5ODkxMX0.vGZqm7G6cvJXGMu9hvDXqWf8IJ8Sh3bSuufb4WhXlxU'
let _supabase = supabase.createClient(supabaseUrl, supabaseKey)

console.log(supabase)

