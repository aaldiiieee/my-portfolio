import { ExperienceListProps } from "@/types/dummy";

const ExperienceList = ({ experiences, className }: ExperienceListProps) => {
  return (
    <>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="experience-item flex gap-4 items-start relative mt-8"
        >
          <div className="timeline-dot w-4 h-4 bg-black rounded-full absolute left-[2px] top-1"></div>
          <div
            className={`timeline-line absolute w-1 bg-black left-2 ${
              index === experiences.length - 1 ? "-top-10" : "top-6"
            } bottom-0`}
          ></div>
          <div
            className={`ms-6 shadow-section border-2 border-black rounded p-4 text-black ${className}`}
          >
            <h3 className="text-2xl font-bold">{experience.role}</h3>
            <p className="text-lg">{experience.company}</p>
            <p className="text-sm mt-2">{experience.period}</p>
            <div
              className="text-sm mt-2"
              dangerouslySetInnerHTML={{
                __html: experience.description?.toString() ?? "",
              }}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExperienceList;
