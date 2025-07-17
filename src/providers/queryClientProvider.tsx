"use client";

import { QueryClient, QueryClientConfig, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react';

export default function CustomQueryClientProvider({ children }: {children: ReactNode}) {
  const [queryClient] = useState(() => new QueryClient({
    staleTime: 2*60*1000
  } as QueryClientConfig));

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}