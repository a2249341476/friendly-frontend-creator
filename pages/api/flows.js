import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { flow_name, flow_scope, process_time_limit, node_delay_time } = req.body;
    const { data, error } = await supabase
      .from('event_flows')
      .insert([{ flow_name, flow_scope, process_time_limit, node_delay_time }]);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  } else if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('event_flows')
      .select('*');

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }
  
  return res.status(405).json({ error: '方法不允许' });
}