import contentfulClient from "@/contentful/contentfulClient";
import {
  TypeHeroSectionSkeleton,
  IContentfulAsset,
} from "@/contentful/types/personalBlog.types";
import Image from "next/image";

const getProfile = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeHeroSectionSkeleton>({
      content_type: "heroSection",
    });
    return data.items[0]?.fields || null; 
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default async function HeroSection() {
  const profile = await getProfile();

  return (
    <section className="h-auto flex items-center justify-center py-16 pt-32 pb-20">
      {profile && (
        <div className="container mx-auto px-6 md:px-12 lg:flex lg:items-center lg:justify-between">
          <div className="text-white lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Hey there! 👋
            </h1>
            <h2 className="text-4xl font-bold text-white mb-4">
              I'm {profile.name}
            </h2>
            <h3 className="text-2xl text-gray-300 mb-6">{profile.jobTitle}</h3>

            {profile.file && (
              <a
                href={`https:${
                  (profile.file as IContentfulAsset).fields.file.url
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition duration-300"
              >
                Download Resume
              </a>
            )}
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            {profile.profile && (
              <Image
                src={`https:${
                  (profile.profile as IContentfulAsset).fields.file.url
                }`}
                alt="Profile Picture"
                width={400}
                height={400}
                priority
                className="rounded-3xl object-cover shadow-2xl"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
