import Image from "next/image";

const SectionTemplate = ({ children, image, className }: { children: React.ReactNode; image?: string; className?: string }) => {
  return (
    <div className={`grid md:grid-cols-12 grid-cols-1 gap-4 border-2 border-black shadow-section rounded p-4 ${className}`}>
      {image && (
        <div className="md:col-span-4 col-span-12 flex justify-center">
          <Image
            src={image}
            width={300}
            height={300}
            alt={"Banner"}
          />
        </div>
      )}

      <div className={`${image && "md:col-span-8"} col-span-12 flex justify-center flex-col md:mt-0 mt-4`}>
        {children}
      </div>
    </div>
  );
};

export default SectionTemplate;
