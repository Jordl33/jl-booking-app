import { supabase } from "@/lib/supabaseClient";

export default async function AdminPage() {
  // Fetch rows from the `customers` table
  const { data, error } = await supabase.from("customers").select("*").limit(10);

  if (error) {
    return (
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-2">Admin — JLE Bookings</h1>
        <p className="text-red-600">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin — JLE Bookings</h1>
      {(!data || data.length === 0) ? (
        <p className="opacity-80">No customers yet. Add a test row in Supabase → customers.</p>
      ) : (
        <ul className="space-y-2">
          {data.map(c => (
            <li key={c.id} className="p-3 rounded-md bg-white/70 backdrop-blur shadow">
              <div className="font-semibold">{c.name || "(no name)"}</div>
              <div className="text-sm opacity-80">{c.email} · {c.phone}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
