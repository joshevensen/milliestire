import { Dancing_Script } from "next/font/google";
import FuneralDetails from "@/components/FuneralDetails";
import LibHeading from "@/library/Heading";
import LibDivider from "@/library/Divider";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function FuneralSection() {
  const isAfterFriday = new Date() >= new Date(2024, 6, 13);

  return (
    <aside className="max-w-xl mx-auto space-y-4 text-center">
      <h3
        className={
          dancingScript.className + " text-5xl text-center text-cyan-600"
        }
      >
        Funeral Service
      </h3>
      <p>Friday July 12, 2024</p>

      {isAfterFriday && (
        <>
          <p>Millie was laid to rest at Westlawn Memorial Park & Mausoleum.</p>
          <div className="text-center">
            <p>1225 Whitney Ave</p>
            <p>Gretna, LA 70056</p>
            <p>(504) 393-1741</p>
          </div>

          <LibDivider />
        </>
      )}
      {!isAfterFriday && <FuneralDetails />}
    </aside>
  );
}
