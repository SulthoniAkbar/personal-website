import Image from "next/image";

interface CardTestiProps {
  clientName: string;
  clientPhoto: string;
  testimonial: string;
  highlighted?: boolean; // Menandai kotak untuk di-highlight
}

export default function CardTestiComponent({
  clientName,
  clientPhoto,
  testimonial,
  highlighted,
}: CardTestiProps) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-lg ${
        highlighted
          ? "bg-gradient-to-br from-black via-purple-900 to-black opacity-90"
          : "bg-black opacity-70"
      } text-white transition-transform duration-300`}
    >

      <div className="flex items-center mb-4">
        <Image
          src={clientPhoto}
          alt={clientName}
          width={48}
          height={48}
          className="rounded-full w-12 h-12 object-cover mr-4"
        />
        <div>
          <h3 className="font-bold text-lg">{clientName}</h3>
        </div>
      </div>


      <p className="text-gray-200 leading-relaxed">{testimonial}</p>
    </div>
  );
}
