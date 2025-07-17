"use client";

import { TmpForm, UserFormField } from '@/components/tmpForm';
import { UseLogin } from '@/hooks/react-query-hooks/useAuth';
import { LoginInput } from '@/services/auth-service';
import { useRouter } from 'next/navigation';
import React from 'react'
import { z } from 'zod';

const loginSchema = z.object({
    email: z.email({message: "Invalid email address"}),
    password: z.string({message: "Password is required"})
})

type loginSchemaType = z.infer<typeof loginSchema>

export default function LoginPage(){
    const {mutate, isPending} = UseLogin();
    const loginForm: UserFormField<typeof loginSchema>[] = [{name: "email", label: "Email", type: "email"}, {name: "password", label: "Password", type: "password"}]
    const router = useRouter();
    
    function onSubmit(values: z.infer<loginSchemaType>) {
        console.log(values);
        mutate(values as LoginInput, {
          onSuccess: (data) => {
            console.log(data);
          },
          onError: (error) => {
            console.log(error);
          }
        })
    }
  
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='font-lato font-bold text-[28px] leading-[3rem] tracking-[0px]'>Admin Login</h1>
        <p className='font-lato text-[#7F7E83] font-[18px]'>Login to Manage and Access <br/> the Dashboard Effortlessly.</p>
        <TmpForm form={loginForm} formSchema={loginSchema} onSubmit={onSubmit} submitLabel='Sign In' submitting={isPending} submittingText='Signing In...'/>
        <p className='font-inter'>{"Don't have an account?"} <button onClick={() => router.push('/auth/register')} className='text-primary cursor-pointer font-medium'>Signup</button></p>

    </div>
  )
}
