import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL_LOCAL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY_LOCAL;

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;