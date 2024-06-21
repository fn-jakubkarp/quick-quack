import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL || "";
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY || "";

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or Key environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;