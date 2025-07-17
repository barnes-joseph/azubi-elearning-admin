"use client";

import { TmpForm, UserFormField } from '@/components/tmpForm';
import { useResetPassword } from '@/hooks/react-query-hooks/useAuth';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { z } from 'zod';

const resetPasswordSchema = z.object({
    password: z.string({message: 'Password is required'}),
    confirmPassword: z.string({message: 'Passwords do not match'})
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match"
})

type resetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;

export default function ChangePasswordPage(){
    const params = useSearchParams();
    const router = useRouter();
    const {mutate, isPending} = useResetPassword();
    const resetPasswordForm: UserFormField<typeof resetPasswordSchema>[] = [{name: "password", label: "Password", type: "password"}, {name: 'confirmPassword', label: 'Confirm Password', type: 'password'}];
    const [token, setToken] = useState<string>('');
    
    function onResetPassword(values: z.infer<resetPasswordSchemaType>){
        console.log(values);
        const data = values as resetPasswordSchemaType;
        mutate({passwordInfo: data, token}, {
            onSuccess: (data) => {
                console.log(data);
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }

    useEffect(()=>{
        const tokenParam = params.get('token');
        if(tokenParam){
            setToken(tokenParam);
        }else{
            router.replace('/auth/login');
        }
    }, [])

  return (
    <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='font-lato font-bold text-[28px] leading-[3rem] tracking-[0px]'>Admin Reset Password</h1>
        
        <p className='font-lato text-[#7F7E83] font-[18px]'>Create new password</p>
        <TmpForm submitLabel='Reset password' form={resetPasswordForm} formSchema={resetPasswordSchema} onSubmit={onResetPassword} submitting={isPending} submittingText='Resetting...'/>

        <p className='font-inter'>{"Back to homepage, "} <button className='text-primary cursor-pointer font-medium'>Back</button></p>

    </div>
  )
}
