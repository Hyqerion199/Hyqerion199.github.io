import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nehibeqlnydjxvhpcfml.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5laGliZXFsbnlkanh2aHBjZm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MjI5MTEsImV4cCI6MjAwNjM5ODkxMX0.vGZqm7G6cvJXGMu9hvDXqWf8IJ8Sh3bSuufb4WhXlxU'
let supabase = createClient(supabaseUrl, supabaseKey)

console.log(supabase)