import contentfulClient from "@/contentful/contentfulClient";
import { TypeHeroSectionSkeleton } from "@/contentful/types/personalBlog.types";

const getAbout = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeHeroSectionSkeleton>({
      content_type: "heroSection",
    });
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default async function AboutSection() {
  const about = await getAbout();

  return (
    <section id="about" className="text-white py-20 px-6">
      <div className="container mx-auto max-w-8xl text-justify">
        <h2 className="text-4xl font-bold mb-4">About</h2>
        <div className="w-16 h-1 bg-yellow-400 mb-6"></div>

        {about && about.items.length > 0 ? (
          <p className="text-lg leading-relaxed text-gray-300">
            {about.items[0]?.fields.about || "No About Section Content Found"}
          </p>
        ) : (
          <p className="text-lg text-gray-400">
            About content is currently unavailable.
          </p>
        )}
      </div>
    </section>
  );
}
