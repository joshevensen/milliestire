import utils from "@/utils";
import Image from "next/image";
import { Message } from "@prisma/client";
import AddMessage from "./AddMessage";
import LibHeading from "@/library/Heading";
import LibDivider from "@/library/Divider";

import butterfly2 from "@/app/butterfly-2.png";

type props = {
  messages: Message[];
};

const FinalMessages: React.FC<props> = ({ messages }) => {
  return (
    <>
      <div className="flex justify-center">
        <Image src={butterfly2} alt="Blue Butterfly" width={240} />
      </div>

      <div className="max-w-xl mx-auto">
        <LibHeading level="h2">Final Messages</LibHeading>
        <p className="text-center italic">From Family and Friends</p>

        <div className="mt-12">
          {messages.map((message: Message) => (
            <div key={message.id}>
              <p className="text-xl">{message.content}</p>
              <p className="text-lg text-right">
                from {message.name} on{" "}
                {utils.date.format.date(new Date(message.createdAt))}
              </p>

              <LibDivider />
            </div>
          ))}

          <div className="my-8 space-y-4">
            <LibHeading level="h4">Add your message...</LibHeading>
            <AddMessage />
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalMessages;
