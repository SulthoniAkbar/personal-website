import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPortofolioBySlug,
  getAllPortofolioSlugs,
} from "@/contentful/portofolioApi";
import RichText from "@/components/global/RichText";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getAllPortofolioSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PortofolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = await getPortofolioBySlug(slug);
  if (!item) notFound();

  // Gambar utama dari field `image`, sedangkan `gallery` untuk gambar tambahan
  const heroImageUrl = item.imageUrl;
  const galleryImages = item.galleryUrls;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <Link
          href="/#porto"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 text-sm font-medium"
        >
          ← Kembali ke Portofolio
        </Link>

        <article className="bg-white rounded-3xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Judul untuk mobile */}
            <div className="mb-6 md:hidden">
              <h1 className="text-2xl font-bold text-gray-900">{item.title}</h1>
            </div>

            <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
              {/* Kiri: hero image, tombol demo, fitur utama, teknologi */}
              <div className="space-y-8">
                {heroImageUrl && (
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={heroImageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 640px"
                      priority
                    />
                  </div>
                )}

                {item.projectLink && (
                  <a
                    href={item.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full rounded-full bg-purple-600 text-white px-6 py-3 text-sm font-semibold hover:bg-purple-700 transition"
                  >
                    Link Demo Web
                  </a>
                )}

                <section>
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    Fitur Utama
                  </h2>
                  {item.fitur ? (
                    <div className="prose prose-sm prose-gray max-w-none">
                      <RichText document={item.fitur} />
                    </div>
                  ) : (
                    <p className="text-sm text-gray-600">
                      Tidak ada fitur yang ditambahkan.
                    </p>
                  )}
                </section>

                {item.technology.length > 0 && (
                  <section>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      Technology
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.technology.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Kanan: deskripsi, gallery kecil, link GitHub */}
              <div className="space-y-8">
                {/* Judul untuk desktop/tablet */}
                <section className="hidden md:block">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h1>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    Deskripsi
                  </h2>
                  <p className="text-sm md:text-base text-gray-600 whitespace-pre-wrap leading-relaxed">
                    {item.description || item.shortDesc || "Tidak ada deskripsi."}
                  </p>
                </section>

                {galleryImages.length > 0 && (
                  <section>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      Preview Screens
                    </h3>
                    <div className="space-y-4">
                      {galleryImages.map((url, i) => (
                        <div
                          key={i}
                          className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100"
                        >
                          <Image
                            src={url}
                            alt={`${item.title} preview ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 360px"
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {item.linkGithub && (
                  <section>
                    <a
                      href={item.linkGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-gray-800 text-white px-6 py-2.5 text-sm font-medium hover:bg-gray-900 transition"
                    >
                      Lihat Kode di GitHub
                    </a>
                  </section>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
