interface Experience {
  role: string;
  company: string;
  period: string;
}

interface ExperienceListProps {
  experiences: Experience[];
}

const ExperienceList = ({ experiences }: ExperienceListProps) => {
  return (
    <>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="experience-item flex gap-4 items-start relative mt-8"
        >
          <div className="timeline-dot w-4 h-4 bg-white rounded-full absolute left-[2px] top-1"></div>
          <div className="timeline-line absolute w-1 bg-white left-2 top-6 bottom-0"></div>
          <div className="ms-6 bg-blue-200 shadow-section border-2 border-black rounded p-4 text-black">
            <h3 className="text-2xl font-bold">{experience.role}</h3>
            <p className="text-lg">{experience.company}</p>
            <p className="text-sm mt-2">{experience.period}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExperienceList;
