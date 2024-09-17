import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('VITE_SUPABASE_URL 未在环境变量中设置');
}

if (!supabaseAnonKey) {
  throw new Error('VITE_SUPABASE_ANON_KEY 未在环境变量中设置');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
