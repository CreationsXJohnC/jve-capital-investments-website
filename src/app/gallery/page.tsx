import fs from "fs";
import path from "path";
import GalleryViewer from "@/components/GalleryViewer";

type Collection = {
  name: string;
  images: string[];
};

function getCollections(): Collection[] {
  const baseDir = path.join(process.cwd(), "public", "assets", "gallery");
  if (!fs.existsSync(baseDir)) return [];

  const dirs = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => !name.startsWith("."));

  const imageExt = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

  return dirs.map((dir) => {
    const files = fs
      .readdirSync(path.join(baseDir, dir), { withFileTypes: true })
      .filter((f) => f.isFile())
      .map((f) => f.name)
      .filter((file) => imageExt.has(path.extname(file).toLowerCase()))
      .sort();

    const images = files.map((file) => `/assets/gallery/${dir}/${file}`);
    return { name: dir, images };
  });
}

export default function GalleryPage() {
  const collections = getCollections();

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl">Project Gallery</h1>
      <p className="mt-3 max-w-2xl text-gray-300">
        Browse collections of completed work. Click a collection to view a lightbox and navigate through photos.
      </p>

      <GalleryViewer collections={collections} />
    </main>
  );
}