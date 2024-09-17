import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('缺少 Supabase 环境变量');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
