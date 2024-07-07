"use client";

import { MessageStore } from "@/api/MessageAPI";
import { InputTypes } from "@/enums";
import LibForm from "@/library/Form";
import LibInput from "@/library/Input";
import { MessageNew } from "@/types";
import { useForm, SubmitHandler } from "react-hook-form";

export default function AddMessage() {
  const defaultValues: MessageNew = {
    name: "",
    content: "",
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MessageNew>({ defaultValues: defaultValues });

  const submit: SubmitHandler<MessageNew> = (data) => {
    MessageStore(data).then(() => {
      reset();
    });
  };
  return (
    <LibForm onSubmit={handleSubmit(submit)} className="text-lg">
      <LibInput
        name="name"
        label="Your Name"
        control={control}
        rules={{ required: "Name is required" }}
        error={errors.name}
      />

      <LibInput
        name="content"
        label="Message"
        control={control}
        type={InputTypes.Multiline}
        rules={{ required: "A message is required" }}
        error={errors.content}
      />
    </LibForm>
  );
}
