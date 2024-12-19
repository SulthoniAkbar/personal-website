import CardSkillComponent from "@/components/data/card.skill";
import contentfulClient from "@/contentful/contentfulClient";
import {
  TypeSkillsSectionSkeleton,
  IContentfulAsset,
} from "@/contentful/types/personalBlog.types";

const getSkills = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeSkillsSectionSkeleton>({
      content_type: "skillsSection",
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default async function SkillSection() {
  const skill = await getSkills();
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-5xl font-bold text-white text-center mb-8">Skills</h2>
      <div className="border-b-4 border-gray-600 w-16 mx-auto mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {skill &&
          skill.items?.map((item) => (
            <CardSkillComponent
              key={item.sys.id}
              imageUrl={`https:${
                (item.fields.icon as IContentfulAsset)?.fields?.file?.url || ""
              }`}
              title={item.fields.skillName || "No Title"}
            />
          ))}
      </div>
    </section>
  );
}
