const HeaderTitle = ({ title, className }: { title: string; className?: string }) => {
  return (
    <div className={`shadow-section border-2 border-black rounded p-4 my-4 text-center ${className}`}>
      <h4 className="text-5xl text-white hero-text font-bold">{title}</h4>
    </div>
  );
};

export default HeaderTitle;
