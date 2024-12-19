import CardTestiComponent from "@/components/data/card.testi";
import contentfulClient from "@/contentful/contentfulClient";
import {
  TypeTestimonialsSectionSkeleton,
  IContentfulAsset,
} from "@/contentful/types/personalBlog.types";

const getTesti = async () => {
  try {
    const data =
      await contentfulClient.getEntries<TypeTestimonialsSectionSkeleton>({
        content_type: "testimonialsSection",
      });
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default async function TestimonialsSection() {
  const testi = await getTesti();
  return (
    <section id="testimonials" className="container mx-auto px-6 py-16">

      <h2 className="text-5xl font-bold text-white text-left mb-8">
        Testimonial
      </h2>
      <div className="w-16 h-1 bg-white mb-8"></div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testi &&
          testi.items?.map((item, idx) => (
            <CardTestiComponent
              key={item.sys.id}
              clientName={item.fields.clientName || "No Name"}
              clientPhoto={`https:${
                (item.fields.clientPhoto as IContentfulAsset)?.fields?.file
                  ?.url || ""
              }`}
              testimonial={item.fields.testimonial || ""}
              highlighted={idx === 0 || idx === 1}
            />
          ))}
      </div>
    </section>
  );
}
