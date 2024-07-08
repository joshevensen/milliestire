"use server";

import { MessageNew } from "@/types";
import utils from "@/utils";
import { revalidatePath } from "next/cache";
import { cache } from "react";

/**
 * GetAll
 */
export const MessageGetAll = cache(async () => {
  return await utils.db.message.findMany({
    where: {
      name: { not: "Test" },
    },
    orderBy: { createdAt: "asc" },
  });
});

/**
 * Store
 */
export async function MessageStore(newMessage: MessageNew) {
  const result = await utils.db.message.create({ data: newMessage });

  revalidatePath("/messages");

  return result;
}
