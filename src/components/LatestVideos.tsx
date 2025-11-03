import YouTubeThumbnail from "./YouTubeThumbnail";

type Video = { id: string; title: string };

async function getLatestVideos(channelId?: string, count = 6): Promise<Video[]> {
  if (!channelId) return [];
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
      { next: { revalidate: 3600 } }
    );
    const xml = await res.text();
    // Cross-line matching without dotAll: use [\s\S]*?
    const entryRegex = /<entry>[\s\S]*?<yt:videoId>(.*?)<\/yt:videoId>[\s\S]*?<title>(.*?)<\/title>/g;
    const entries = [...xml.matchAll(entryRegex)]
      .slice(0, count)
      .map((m) => ({ id: m[1], title: m[2] }));
    return entries;
  } catch {
    return [];
  }
}

export default async function LatestVideos() {
  const channelId = process.env.NEXT_PUBLIC_YT_CHANNEL_ID;
  const videos = await getLatestVideos(channelId, 6);

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Latest Videos</h2>
          {channelId && (
            <a
              href={`https://www.youtube.com/channel/${channelId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand hover:underline"
            >
              See all on YouTube →
            </a>
          )}
        </div>

        {videos.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <YouTubeThumbnail key={v.id} id={v.id} title={v.title} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-400">
            Set NEXT_PUBLIC_YT_CHANNEL_ID to automatically show the latest uploads from your channel.
          </p>
        )}
      </div>
    </section>
  );
}