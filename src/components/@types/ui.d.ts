export interface ButtonProps {
  text: string;
  type: "submit" | "reset" | "button";
  className?: string;
  onClick?: () => void;
}
