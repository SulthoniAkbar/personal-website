interface ExperienceProps {
  jobTitle: string;
  company: string;
  dateTime: string;
  description: string;
}

export default function ExperienceComponent({
  jobTitle,
  company,
  dateTime,
  description,
}: ExperienceProps) {
  return (
    <div className="flex items-start space-x-8">
      <div className="text-gray-400 text-sm w-1/5">
        <span>{dateTime}</span>
      </div>
      <div className="relative w-4/5 p-6 bg-gradient-to-r from-black via-purple-900 to-black rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">{jobTitle}</h3>
        <p className="italic text-gray-400 mb-2">{company}</p>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
