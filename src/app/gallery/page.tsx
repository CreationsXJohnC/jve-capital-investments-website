import fs from "fs";
import path from "path";
import GalleryViewer from "@/components/GalleryViewer";
import Footer from "@/components/Footer";

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

  const imagesFor = (dir: string) => {
    const full = path.join(baseDir, dir);
    if (!fs.existsSync(full)) return [] as string[];
    const files = fs
      .readdirSync(full, { withFileTypes: true })
      .filter((f) => f.isFile())
      .map((f) => f.name)
      .filter((file) => imageExt.has(path.extname(file).toLowerCase()))
      .sort();
    return files.map((file) => `/assets/gallery/${dir}/${file}`);
  };

  const feb15 = imagesFor("Feb 15 2023 Resized");
  const aug24 = imagesFor("Aug 24 2023 Resized");
  const sep7 = imagesFor("Sep 7 2023 Resized");
  const feb03 = imagesFor("Feb 03 2021 Resized");
  const oct29 = imagesFor("Oct 29 2025");
  const sep1 = imagesFor("Sep 1 2022 Resized");
  const janFeb = imagesFor("Jan-Feb 2022 Resized");

  const collections: Collection[] = [];
  if (aug24.length) {
    collections.push({
      name: "Basement Renovation - August 2023",
      images: [...feb15, ...aug24, ...sep7],
    });
  }

  if (feb03.length) {
    collections.push({
      name: "Church Bathroom Renovation - February 2021",
      images: [...feb03, ...oct29],
    });
  }

  if (janFeb.length) {
    collections.push({
      name: "Master Bedroom Addition - January 2022",
      images: [...sep1, ...janFeb],
    });
  }

  dirs
    .filter(
      (d) =>
        d !== "Aug 24 2023 Resized" &&
        d !== "Feb 15 2023 Resized" &&
        d !== "Sep 7 2023 Resized" &&
        d !== "Feb 03 2021 Resized" &&
        d !== "Oct 29 2025"
        && d !== "Sep 1 2022 Resized" && d !== "Jan-Feb 2022 Resized"
        && d !== "May 26 2020 Resized"
    )
    .forEach((dir) => {
      const imgs = imagesFor(dir);
      const displayName =
        dir === "Williams Residence Resized"
          ? "In-Law Suite & 3-Car Garage Addition - July 2024"
          : dir;
      collections.push({ name: displayName, images: imgs });
    });

  return collections;
}

export default function GalleryPage() {
  const collections = getCollections();

  return (
    <section className="bg-black text-white">
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 min-h-screen">
        <h1 className="text-3xl font-bold sm:text-4xl">Project Gallery</h1>
        <p className="mt-3 max-w-2xl text-gray-300">
          Browse collections of completed work. Click a collection to view a lightbox and navigate through photos.
        </p>

        <GalleryViewer collections={collections} />
      </main>
      <Footer />
    </section>
  );
}
