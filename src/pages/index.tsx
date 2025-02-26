import { signIn, signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import { api } from '~/utils/api'
import SideBar from '../components/SideBar'

export default function Home() {
    const hello = api.example.hello.useQuery({ text: 'from tRPC' })

    return (
        <SideBar navBar={<div></div>}>
            <Head>
                <title>Wallet App</title>
                <meta
                    name="description"
                    content="Project developed by Pablo Helmbrecht"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>

            <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200 ">
                <AuthShowcase/>
            </main>
        </SideBar>
    )
}

function AuthShowcase() {
    const { data: sessionData } = useSession()

    const { data: secretMessage } = api.example.getSecretMessage.useQuery(
        undefined, // no input
        { enabled: sessionData?.user !== undefined },
    )

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
                {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
                {secretMessage && <span> - {secretMessage}</span>}
            </p>
            <button
                className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
                onClick={sessionData ? () => void signOut() : () => void signIn()}>
                {sessionData ? 'Sign out' : 'Sign in'}
            </button>
        </div>
    )
}
