"use client";

import { TmpForm, UserFormField } from "@/components/tmpForm";
import { useRequestResetPassword } from "@/hooks/react-query-hooks/useAuth";
import React from "react";
import { z } from "zod";

const resetRequestSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
});

type resetRequestSchemaType = z.infer<typeof resetRequestSchema>;

export default function ForgotPasswordPage() {
  const {mutate, isPending} = useRequestResetPassword();
  const resetRequestForm: UserFormField<typeof resetRequestSchema>[] = [
    { name: "email", label: "Email", type: "email" },
  ];

  function onSubmitResetRequest(values: z.infer<resetRequestSchemaType>) {
    console.log(values);
    const data = values as resetRequestSchemaType;
    mutate({email: data.email, baseResetURL: ''}, {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      }
    })
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h1 className="font-lato font-bold text-[28px] leading-[3rem] tracking-[0px]">
        Admin Reset Password
      </h1>

      <p className="font-lato text-[#7F7E83] font-[18px]">
        Enter your email to reset your password
      </p>
      <TmpForm
        submitLabel="Reset password"
        form={resetRequestForm}
        formSchema={resetRequestSchema}
        onSubmit={onSubmitResetRequest}
        submitting={isPending}
        submittingText="Requesting Reset..."
      />

      <p className="font-inter">
        {"Back to homepage, "}{" "}
        <button className="text-primary cursor-pointer font-medium">
          Back
        </button>
      </p>
    </div>
  );
}
