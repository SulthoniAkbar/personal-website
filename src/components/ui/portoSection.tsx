import contentfulClient from "@/contentful/contentfulClient";
import {
  TypePortofolioSectionSkeleton,
  IContentfulAsset,
} from "@/contentful/types/personalBlog.types";
import CardComponent from "../data/card.porto";

const getPortofolio = async () => {
  try {
    const data =
      await contentfulClient.getEntries<TypePortofolioSectionSkeleton>({
        content_type: "portofolioSection",
      });
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default async function PortoSection() {
  const porto = await getPortofolio();
  return (
    <section id="porto" className="container mx-auto px-6 py-16">
      <h2 className="text-5xl font-bold text-white text-center mb-8">
        Portfolio
      </h2>
      <div className="border-b-4 border-gray-600 w-16 mx-auto mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {porto &&
          porto.items?.map((item) => (
            <CardComponent
              key={item.sys.id}
              imageUrl={`https:${
                (item.fields.image as IContentfulAsset)?.fields?.file?.url || ""
              }`}
              title={item.fields.title || "No Title"}
              projectLink={item.fields.projectLink || "#"}
              description={item.fields.description || ""}
            />
          ))}
      </div>
    </section>
  );
}
