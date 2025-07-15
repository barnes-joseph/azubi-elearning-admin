"use client";

import { TmpForm, UserFormField } from "@/components/tmpForm";
import React from "react";
import { z } from "zod";

const registerSchema = z
  .object({
    firstName: z.string({ message: "First name is required" }),
    lastName: z.string({ message: "Last name is required" }),
    email: z.email({ message: "Invalid email address" }),
    password: z.string({ message: "Password is required" }),
    confirmPassword: z.string({message: "Passwords don't match"}),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type registerSchemaType = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const registerForm: UserFormField<typeof registerSchema>[] = [
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
    { name: "confirmPassword", label: "Confirm Password", type: "password" },
  ];

  function onSubmit(values: z.infer<registerSchemaType>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h1 className="font-lato font-bold text-[28px] leading-[3rem] tracking-[0px]">
        Admin Sign Up
      </h1>
      <p className="font-lato text-[#7F7E83] text-center font-[18px]">
        Create Your Account to Manage and Access <br />
        the Dashboard Effortlessly.
      </p>
      <TmpForm
        form={registerForm}
        formSchema={registerSchema}
        onSubmit={onSubmit}
      />
    <p className='font-inter'>{"Already have an account?"} <button className='text-primary cursor-pointer font-medium'>Login</button></p>

    </div>
  );
}
