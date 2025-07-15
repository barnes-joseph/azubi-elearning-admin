"use client";

import { TmpForm, UserFormField } from '@/components/tmpForm';
import React from 'react'
import { z } from 'zod';

const veirfyOtpSchema = z.object({
    otp: z.string({message: "OTP required"}),
})

type verifyOtpSchemaType = z.infer<typeof veirfyOtpSchema>

export default function VerifyOTPPage(){
    const loginForm: UserFormField<typeof veirfyOtpSchema>[] = [{name: "otp", label: "Code", type: "text"}]
    
    function onSubmit(values: z.infer<verifyOtpSchemaType>) {
        console.log(values)
    }
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='font-lato font-bold text-[28px] leading-[3rem] tracking-[0px]'>OTP Verification</h1>
        <p className='font-lato text-[#7F7E83] font-[18px]'>{"Enter the verification code we've sent to your email"}</p>
        <TmpForm submitLabel='Verify' form={loginForm} formSchema={veirfyOtpSchema} onSubmit={onSubmit}/>
        <p className='font-inter'>{"Didn't receive the OTP?"} <button className='text-primary cursor-pointer font-medium'>Resend OTP</button></p>
    </div>
  )
}
