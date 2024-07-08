import { Dancing_Script } from "next/font/google";
import { ReactNode } from "react";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

type props = {
  children: ReactNode;
  level: "h1" | "h2" | "h3" | "h4";
};

const LibHeading: React.FC<props> = ({ children, level }) => {
  const commonClasses = `${dancingScript.className} text-center text-cyan-600`;

  return (
    <>
      {level === "h1" && (
        <h1 className={commonClasses + " text-7xl lg:text-9xl"}>{children}</h1>
      )}
      {level === "h2" && (
        <h2 className={commonClasses + " text-6xl"}>{children}</h2>
      )}
      {level === "h3" && (
        <h3 className={commonClasses + " text-5xl"}>{children}</h3>
      )}
      {level === "h4" && (
        <h4 className={commonClasses + " text-4xl"}>{children}</h4>
      )}
    </>
  );
};

export default LibHeading;
