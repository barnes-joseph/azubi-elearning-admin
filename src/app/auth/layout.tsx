import Image from 'next/image'
import React from 'react'

export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="bg-[url('/images/auth-background.png')] bg-cover w-screen h-screen overflow-hidden relative">
        <div className='absolute inset-0 bg-[#D9D9D94D] flex items-center justify-center'>
            <div className='bg-white rounded-xl py-10 px-7 w-[450px]'>
                <Image alt="Logo" src='/azubi-logo.svg' width={500} height={500} className='w-40 h-auto mx-auto'/>
                {children}
            </div>

        </div>
    </div>
  )
}

