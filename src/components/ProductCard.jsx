"use client"
import Link from "next/link";
import Button from "./Button";
import { TrashIcon } from '@heroicons/react/24/outline';
import { destroy } from "@/actions/produto";
import { redirect } from "next/navigation";

export default function ProductCard({ produto }) {
    async function handleDelete(event){
        const resp = await destroy(produto.id)

        if (resp?.error) {
            setError(resp.error)
            return
        }

        redirect("/produto")
    }

    return (
        <div className="flex flex-row items-center justify-between gap-4 rounded-md bg-slate-100 p-8 w-[36rem] shadow-lg hover:shadow-xl duration-150">
            <Link href={`/produto/${produto.id}/editar`} className="flex flex-row items-center w-auto">
                <div className="w-32">
                    <img src={produto.imagemUrl} alt={produto.nome} className='rounded-md' />
                </div>
                <div>
                    <p className='text-2xl font-semibold'>{produto.nome}</p>
                    <p className='text-sm font-medium'>{produto.quantidade} unidades</p>
                </div>
            </Link>
            <Button type="button" onClick={handleDelete} variant="danger">
                    <TrashIcon className="h-6 w-6" />
                    deletar
            </Button>
        </div>
    )
}