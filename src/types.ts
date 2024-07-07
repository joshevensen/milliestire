import { Message as DefaultMessage } from "@prisma/client";

export type InputOption = {
  value: any;
  label: string;
};

export type MessageNew = Omit<DefaultMessage, "id" | "createdAt">;
