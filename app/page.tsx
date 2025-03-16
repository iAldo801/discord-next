import { client } from "@/discord.server";

export const dynamic = 'force-dynamic';

export default async function Page() {
  const botTag = client.user?.tag;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <p className="text-xl">
        <span className="text-green-600">{botTag}</span>
      </p>
    </main>
  );
}
