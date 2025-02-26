import Head from 'next/head'
import SideBar from '../../components/SideBar'
import DateRangePicker from '~/components/DataRangePicker'

//TRPc
import { api } from '~/utils/api'


//Moment Js
import moment from '~/lib/moment'

//Next Auth
import { useSession } from 'next-auth/react'


export default function Records() {
    const { data: sessionData } = useSession()

    return (
        <>
            <Head>
                <title>Records</title>
                <meta
                    name="description"
                    content="Project developed by Pablo Helmbrecht"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
            <SideBar navBar={<div></div>}>
                <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200 ">
                    <div className="flex h-screen w-full flex-col items-start justify-center gap-6 px-16 py-6">
                        <div className="flex w-full flex-row items-center justify-between gap-4">
                            <div />
                            <DateRangePicker />
                            <div className=" bg-cyan-600 ">Ordenar</div>
                        </div>
                        <div className="flex h-full w-full flex-row gap-4 bg-red-700">
                            <div className="h-full w-72 bg-blue-700">Filtros</div>
                            <div className="h-full flex-1 bg-yellow-700">Registros</div>
                        </div>
                    </div>
                </main>
            </SideBar>
        </>
    )
}
