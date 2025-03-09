export interface Experience {
  role: string;
  company: string;
  period: string;
  description?: string;
}

interface ExperienceListProps {
  experiences: Experience[];
  className?: string;
}
