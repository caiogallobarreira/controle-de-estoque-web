import { create, getProduto } from '@/actions/produto'
import Button from '@/components/Button'
import InputText from '@/components/InputText'
import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle'
import { CheckIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { redirect } from 'next/dist/server/api-utils'
import Image from 'next/image'
import Form from './Form'

export default async function Home({params}) {
    let produtos = await getProduto(params.id);
    return (
        <>
            <Navbar />
            <div className="flex flex-col rounded-md m-5 p-10  bg-slate-200">
                <PageTitle title="Criar produto" />
                <Form produto={produtos}/>
            </div>
        </>
    )
}
