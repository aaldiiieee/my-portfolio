const TabTemplate = ({
  children,
  buttonTabs,
}: {
  children: React.ReactNode;
  buttonTabs: React.ReactNode[];
}) => {
  return (
    <div className="grid md:grid-cols-5 grid-cols-12 gap-4">
      <div className="md:col-span-1 col-span-12 flex flex-col gap-4">
        {buttonTabs}
      </div>

      <div className="md:col-span-4 col-span-12">{children}</div>
    </div>
  );
};

export default TabTemplate;
