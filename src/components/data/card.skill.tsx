import Image from "next/image";

interface CardSkillProps {
  imageUrl: string;
  title: string;
  highlight?: boolean; 
}

export default function CardSkillComponent({
  imageUrl,
  title,
  highlight = false,
}: CardSkillProps) {
  return (
    <div className="rounded-2xl flex flex-col items-center justify-center p-6 shadow-lg bg-white hover:bg-orange-300 ">

      <div className="w-16 h-16 mb-4">
        <Image
          src={imageUrl}
          alt={title}
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>


      <h2
        className={`text-lg font-medium ${
          highlight ? "text-gray-900" : "text-black"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
