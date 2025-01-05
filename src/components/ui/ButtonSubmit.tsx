import { ButtonProps } from "../@types/ui";

const ButtonSubmit = ({
  text,
  type,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`btn__submit p-4 md:text-2xl rounded ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonSubmit;
