import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import utils from "@/utils";
import { MessageGetAll } from "@/api/MessageAPI";
import AddMessage from "@/components/AddMessage";
import { Message } from "@prisma/client";
import FuneralDetails from "@/components/FuneralDetails";

import milliePic from "./millie-stire.jpg";
import butterfly1 from "./butterfly-1.png";
import butterfly2 from "./butterfly-2.png";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default async function Home() {
  const messages = await MessageGetAll();

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex justify-center max-w-3xl mx-auto pt-8">
        <div>
          <h1
            className={
              dancingScript.className +
              " text-7xl lg:text-9xl text-center text-cyan-600"
            }
          >
            Millie Stire
          </h1>
          <p className="text-3xl text-center">1928 - 2024</p>

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

      {/* Funeral Service */}
      <aside className="max-w-xl mx-auto space-y-4 text-center">
        <h3
          className={
            dancingScript.className + " text-5xl text-center text-cyan-600"
          }
        >
          Funeral Service
        </h3>
        <p>Friday July 12, 2024</p>

        <FuneralDetails />
      </aside>

      {/* Obiturary */}
      <main className="max-w-3xl mx-auto space-y-4">
        <p>
          Mildred (Millie) G. Stire peacefully passed away, at the age of 96, at
          her home where she resided with her daughter Cindy, granddaughter
          Kristen and Kristen's partner Josh in Converse, Texas on June 30,
          2024.
        </p>
        <p>
          Known to all as Millie, she was born in Marksville, LA on January 22,
          1928, to the late Mr. Florian and Mrs. Effie Guillot. Millie had four
          siblings, including late sisters Helen Callens and Vivian Guidroz. She
          is survived by brother Mike Guillot and sister Eva Hecker.
        </p>
        <p>
          Millie married the late Dannie Powell, Sr. in 1947, and they raised
          three children in Marrero, LA. In 1976, she married her forever love,
          Theodore “Ted” Stire, Sr., and shared twelve years together before he
          passed in 1989.
        </p>
        <p>
          Millie loved music, played the drums and bass fiddle with Dannie in
          his band called Dannie Powell and His Sunset Boys, took flying
          lessons, was a fabulous dancer, and a fierce card player. She was a
          wonderful cook and gladly passed that knowledge down to her family.
          Millie traveled to nearly every state in the U.S. and always brought
          little souvenirs back for her loved ones. She loved going to the
          movies, doing word search puzzles and reading the newspaper,
          especially the obituaries where she learned about people's lives.
        </p>
        <p>
          She was a faithful parishioner of Christ Our Savior Church that she
          attended with her husband, sister-in-law Shirley, and brother-in-law
          Jack.
        </p>
        <p>
          Millie was also a devoted employee and treasured friend of co-workers
          at Nicholson & Loup super market in Marrero, LA. She had a God-given
          talent for taking care of babies as a private nanny and as a caregiver
          at The Toddler Academy.
        </p>
        <div className="py-6">
          <hr className="border-cyan-400" />
        </div>
        <p>
          Millie was a devoted mother to her loving daughter, LaJuana Doughty
          and LaJuana's late husband Ernest “Peppy” Doughty, Jr., her beloved
          daughter Cynthia “Cindy” Powell, her late stepson Dannie Powell, Jr.,
          and his wife Odette Powell Menard, stepsons Eddie Powell, and Teddy
          Stire, Jr.
        </p>
        <p>
          Loving grandmother to 11 grandchildren. (Dr. Gerald Calegan, Dr.
          LaJuana Calegan, late Geremy “Baby Angel” Calegan, Gerrad Calegan,
          Kristen Matte, Dana Powell, Rodney Powell, Danny Powell, Jr., late
          Kerry Powell, Wayne Powell, David Menard)
        </p>
        <p>
          Adoring great-grandmother to 6 great grandchildren. (Katie, Lauren,
          Ted, Owen, Clive, and Quincy). And 4 devoted nieces and nephews
          (Rickie, Randy, Donna, and Peter).
        </p>
      </main>

      <div className="flex justify-center">
        <Image src={butterfly2} alt="Blue Butterfly" width={240} />
      </div>

      {/* Final Messages */}
      <div className="max-w-xl mx-auto">
        <h2
          className={
            dancingScript.className + " text-6xl text-center text-cyan-600"
          }
        >
          Final Messages
        </h2>
        <p className="text-center italic">From Family and Friends</p>

        <div className="mt-12">
          {messages.map((message: Message) => (
            <div key={message.id}>
              <p className="text-xl">{message.content}</p>
              <p className="text-lg text-right">
                from {message.name} on{" "}
                {utils.date.format.date(new Date(message.createdAt))}
              </p>

              <div className="py-6">
                <hr className="border-cyan-400" />
              </div>
            </div>
          ))}

          <div className="my-8">
            <h4
              className={
                dancingScript.className +
                " mb-4 text-4xl text-center text-cyan-600"
              }
            >
              Add your message...
            </h4>

            <AddMessage />
          </div>
        </div>
      </div>
    </div>
  );
}
