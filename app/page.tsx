import { client } from '@/server/discord';

export default function Page() {
  const isOnline = Boolean(client.readyAt);
  const botTag = client.user?.tag;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <p className="text-xl">
        {isOnline ? (
          <span className="text-green-600">{botTag}</span>
        ) : (
          'Bot is offline'
        )}
      </p>
    </main>
  );
}