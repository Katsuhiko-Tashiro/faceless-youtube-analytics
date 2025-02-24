import { createClient } from '../../../supabase/server';

export default async function Users() {
  const supabase = await createClient();
  const { data: users } = await supabase.from("User").select();

  return <pre>{JSON.stringify(users, null, 2)}</pre>
}