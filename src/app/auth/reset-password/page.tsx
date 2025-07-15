"use client";

import { TmpForm, UserFormField } from "@/components/tmpForm";
import React from "react";
import { z } from "zod";

const resetRequestSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
});

type resetRequestSchemaType = z.infer<typeof resetRequestSchema>;

export default function ResetPasswordPage() {
  const resetRequestForm: UserFormField<typeof resetRequestSchema>[] = [
    { name: "email", label: "Email", type: "email" },
  ];

  function onSubmitResetRequest(values: z.infer<resetRequestSchemaType>) {
    console.log(values);
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
