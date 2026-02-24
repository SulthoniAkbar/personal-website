import { getPortofolioList } from "@/contentful/portofolioApi";
import PortfolioCard from "../data/portfolioCard";

export default async function PortoSection() {
  const items = await getPortofolioList();
  return (
    <section id="porto" className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">
          Highlighted Portofolio
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
          A portfolio of selected works representing my skills, experience, and
          commitment to delivering valuable results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {items.map((item) => (
            <PortfolioCard
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              slug={item.slug}
              projectLink={item.projectLink ?? undefined}
              linkGithub={item.linkGithub ?? undefined}
              description={item.description}
              shortDesc={item.shortDesc ?? undefined}
              technology={item.technology}
            />
          ))}
        </div>
        {items.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            Belum ada portofolio. Tambahkan di Contentful (content type: portofolioSection).
          </p>
        )}
      </div>
    </section>
  );
}
