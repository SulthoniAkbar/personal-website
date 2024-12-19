import contentfulClient from "@/contentful/contentfulClient";
import { TypeExperienceSectionSkeleton } from "@/contentful/types/personalBlog.types";
import ExperienceComponent from "@/components/data/card.experince";

const getExperience = async () => {
  try {
    const data =
      await contentfulClient.getEntries<TypeExperienceSectionSkeleton>({
        content_type: "experienceSection",
      });
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default async function ExperienceSection() {
  const experiences = await getExperience();
  return (
    <section id="experience" className="py-16 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-4">Work Experience</h2>
        <div className="w-16 h-1 bg-white mb-12"></div>

        <div className="space-y-12 ">
          {experiences &&
            experiences.items?.map((item) => (
              <ExperienceComponent
                key={item.sys.id}
                jobTitle={item.fields.jobTitle || "No Title"}
                company={item.fields.company || ""}
                dateTime={item.fields.dateTime || ""}
                description={item.fields.description || ""}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
