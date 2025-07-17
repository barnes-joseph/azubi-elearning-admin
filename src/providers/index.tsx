import React, { ReactNode } from 'react'
import CustomQueryClientProvider from './queryClientProvider'

export default function Providers({children}: {children: ReactNode}) {
  return (
    <CustomQueryClientProvider>{children}</CustomQueryClientProvider>
  )
}

