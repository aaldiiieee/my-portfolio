const ButtonTab = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`btn__submit py-10 px-1 rounded text-2xl w-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonTab;
