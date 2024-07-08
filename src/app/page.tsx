import { Message } from "@prisma/client";
import { MessageGetAll } from "@/api/MessageAPI";
import PageHeader from "@/components/PageHeader";
import FuneralSection from "@/components/FuneralSection";
import ObiturarySection from "@/components/ObituarySection";
import FinalMessages from "@/components/FinalMessages";

export default async function Home() {
  const messages: Message[] = await MessageGetAll();

  return (
    <div className="space-y-12">
      <PageHeader />
      <FuneralSection />
      <ObiturarySection />
      <FinalMessages messages={messages} />
    </div>
  );
}
