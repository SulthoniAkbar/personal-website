import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
  projectLink?: string;
  description: string;
}

export default function CardComponent({
  imageUrl,
  title,
  projectLink,
  description,
}: CardProps) {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg bg-black">
  
      <div className="w-full h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>


      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>


      <div className="absolute top-4 left-4 right-4 text-white">

        <h2 className="text-lg font-bold">{title}</h2>
      </div>


      <div className="absolute bottom-16 left-4 right-4 text-white">
        <p className="text-sm leading-relaxed">{description}</p>
      </div>


      <div className="absolute bottom-4 left-4">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-300 transition"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
