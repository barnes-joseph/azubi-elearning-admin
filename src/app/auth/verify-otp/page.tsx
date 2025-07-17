"use client";

import { TmpForm, UserFormField } from '@/components/tmpForm';
import { useResendOTP, useVerifyOTP } from '@/hooks/react-query-hooks/useAuth';
import React from 'react'
import { z } from 'zod';

const verifyOtpSchema = z.object({
    otp: z.string({message: "OTP required"}),
})

type verifyOtpSchemaType = z.infer<typeof verifyOtpSchema>

export default function VerifyOTPPage(){
  const loginForm: UserFormField<typeof verifyOtpSchema>[] = [{name: "otp", label: "Code", type: "text"}]
    const {mutate, isPending} = useVerifyOTP();
    const {mutate: resendOTP, isPending: isResendingToken} = useResendOTP()
    
    function onSubmit(values: z.infer<verifyOtpSchemaType>) {
        console.log(values);
        const data = values as verifyOtpSchemaType;
        mutate({token: data.otp}, {
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
        <h1 className='font-lato font-bold text-[28px] leading-[3rem] tracking-[0px]'>OTP Verification</h1>
        <p className='font-lato text-[#7F7E83] font-[18px]'>{"Enter the verification code we've sent to your email"}</p>
        <TmpForm submitLabel='Verify' form={loginForm} formSchema={verifyOtpSchema} onSubmit={onSubmit} submitting={isPending} submittingText='Verifying...'/>
        <p className='font-inter'>{"Didn't receive the OTP?"} <button onClick={() => resendOTP()} className='text-primary cursor-pointer font-medium'>{isResendingToken ? 'Resending...' : 'Resend OTP'}</button></p>
    </div>
  )
}
