import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ikdxcfgoknlczpdiseyk.supabase.co';
const supabaseAnonToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrZHhjZmdva25sY3pwZGlzZXlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIyMTk3NDgsImV4cCI6MTk4Nzc5NTc0OH0.GFkROA-fxOR1flndBo36X9GnnR1ql53MPMWR9E12QVY';

export default createClient(supabaseUrl, supabaseAnonToken);