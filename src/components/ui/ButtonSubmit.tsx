interface ButtonSubmitProps {
  text: string;
  type: "submit" | "reset" | "button";
  className?: string;
  onClick?: () => void;
}

const ButtonSubmit = ({
  text,
  type,
  className,
  onClick,
}: ButtonSubmitProps) => {
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
