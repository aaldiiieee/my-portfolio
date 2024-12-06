import { ReactNode, useState } from "react";

type Stack = {
  icon: ReactNode;
  name: string;
};

const StackList = ({ stacks }: { stacks: Stack[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {stacks.map((stack, index) => (
        <div
          key={index}
          className="bg-red-200 shadow-section border-2 border-black rounded p-4 text-black flex items-center justify-center text-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className={`transition-opacity duration-300 ease-in-out ${
              hoveredIndex === index ? "opacity-0" : "opacity-100"
            }`}
          >
            {stack.icon}
          </div>
          <div
            className={`absolute transition-opacity duration-300 ease-in-out ${
              hoveredIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-xl font-bold">{stack.name}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default StackList;
