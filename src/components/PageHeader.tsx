import Image from "next/image";
import LibHeading from "@/library/Heading";

import milliePic from "@/app/millie-stire.jpg";
import butterfly1 from "@/app/butterfly-1.png";
import butterfly2 from "@/app/butterfly-2.png";

export default function PageHeader() {
  return (
    <div className="flex justify-center max-w-3xl mx-auto pt-8">
      <div>
        <LibHeading level="h1">Millie Stire</LibHeading>

        <p className="text-4xl italic text-center">Love You More</p>

        <p className="text-2xl text-center">1928 - 2024</p>

        <div className="relative w-80 my-8 mx-auto">
          <Image src={milliePic} alt="Millie Stire" />
          <Image
            className="absolute -top-16 -right-12"
            src={butterfly1}
            alt="Blue Butterfly"
            width={100}
          />
          <Image
            className="absolute -bottom-4 -left-16 rotate-45"
            src={butterfly2}
            alt="Blue Butterfly"
            width={150}
          />
        </div>
      </div>
    </div>
  );
}
