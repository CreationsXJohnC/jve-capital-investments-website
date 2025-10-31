import YouTubeLite from "./YouTubeLite";
import YouTubeThumbnail from "./YouTubeThumbnail";

type Video = { id: string; title: string };

async function getLatestVideos(channelId?: string, count = 3): Promise<Video[]> {
  if (!channelId) return [];
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
      { next: { revalidate: 3600 } }
    );
    const xml = await res.text();
    // Avoid ES2018-only dotAll flag by using [\s\S]*? for cross-line matching
    const entryRegex = /<entry>[\s\S]*?<yt:videoId>(.*?)<\/yt:videoId>[\s\S]*?<title>(.*?)<\/title>/g;
    const entries = [...xml.matchAll(entryRegex)]
      .slice(0, count)
      .map((m) => ({ id: m[1], title: m[2] }));
    return entries;
  } catch {
    return [];
  }
}

export default async function Testimonials() {
  const channelId = process.env.NEXT_PUBLIC_YT_CHANNEL_ID;
  const videos = await getLatestVideos(channelId, 3);

  const testimonials = [
    {
      quote:
        "Placeholder testimonial about quality, reliability, and professional communication.",
      author: "Client Name",
      company: "Company",
    },
    {
      quote:
        "Placeholder testimonial highlighting craftsmanship, attention to detail, and timely delivery.",
      author: "Client Name",
      company: "Company",
    },
    {
      quote:
        "Placeholder testimonial emphasizing professionalism, clear communication, and strong results.",
      author: "Client Name",
      company: "Company",
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 space-y-10">
        {/* YouTube hybrid: one featured embed, two thumbnails linking out */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">What Clients Say</h2>
            {channelId && (
              <a
                href={`https://www.youtube.com/channel/${channelId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-brand hover:underline"
              >
                Visit our YouTube channel →
              </a>
            )}
          </div>

          {videos.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Featured video embed */}
              <div className="lg:col-span-2">
                <YouTubeLite id={videos[0].id} title={videos[0].title} />
              </div>
              {/* Two thumbnails linking out */}
              <div className="space-y-6 lg:space-y-3">
                {videos.slice(1).map((v) => (
                  <YouTubeThumbnail key={v.id} id={v.id} title={v.title} />
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-slate-400">
              Set NEXT_PUBLIC_YT_CHANNEL_ID to automatically show the latest videos.
            </p>
          )}
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div key={idx} className="rounded-lg bg-brand-dark/30 p-8 shadow">
              <p className="text-lg text-slate-200">“{t.quote}”</p>
              <p className="mt-4 text-sm text-slate-400">— {t.author}, {t.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}