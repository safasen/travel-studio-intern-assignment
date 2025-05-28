"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

export default function QueryProvider({ children }: { children: ReactNode }) {
    /**
     * 
     * QueryProvider component that initializes and provides a QueryClient
     * instance to its children using the QueryClientProvider from @tanstack/react-query.
     * 
     * @param {ReactNode} props.children - The child components to be wrapped by the provider.
     * @returns {JSX.Element} The QueryClientProvider component with the initialized QueryClient.
     */
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
        {children}
        </QueryClientProvider>
    );
}