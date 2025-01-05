export interface Experience {
  role: string;
  company: string;
  period: string;
}

interface ExperienceListProps {
  experiences: Experience[];
  className?: string;
}
