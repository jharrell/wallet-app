import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { type AppType } from 'next/app'
import '~/styles/globals.css'
import { api } from '~/utils/api'
import '~/utils/i18n'

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
    const queryClient = new QueryClient()
    return (
        <SessionProvider session={session}>
            <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
        </SessionProvider>
    )
}

export default api.withTRPC(MyApp)
