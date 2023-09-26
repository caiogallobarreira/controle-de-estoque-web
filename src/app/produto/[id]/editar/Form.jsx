"use client"
import { update, destroy } from "@/actions/produto";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { CheckIcon, ChevronLeftIcon, TrashIcon} from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'


export default function Form({ produto }) {
    const [error, setError] = useState("")
    const [produtoEdit, setProdutoEdit] = useState(produto)

    async function handleSubmit(event) {
        const resp = await update(produtoEdit)

        if (resp?.error) {
            setError(resp.error)
            return
        }

        redirect("/produto")
    }

    function handleFieldEdit(field, value){
        if (field === "estoque") {
            setProdutoEdit({
                ...produtoEdit,
                [field]: {
                    id: value
                }
            })
            return
        }else{
            setProdutoEdit({
                ...produtoEdit,
                [field]: value
            })
        }
    }

    return (
        <form action={handleSubmit} className="flex flex-col gap-4">
            <InputText
                label="ID do Estoque"
                id="estoque"
                name="estoque"
                value={produtoEdit.estoque.id}
                onChange={(e) => handleFieldEdit("estoque", e.target.value)}
            />

            <InputText
                label="Nome"
                id="nome"
                name="nome"
                value={produtoEdit.nome}
                onChange={(e) => handleFieldEdit("nome", e.target.value)}
            />

            <InputText
                label="Descrição"
                id="descricao"
                name="descricao"
                value={produtoEdit.descricao}
                onChange={(e) => handleFieldEdit("descricao", e.target.value)}
            />

            <InputText
                label="URL da Imagem"
                id="imagemUrl"
                name="imagemUrl"
                value={produtoEdit.imagemUrl}
                onChange={(e) => handleFieldEdit("imagemUrl", e.target.value)}
            />

            <InputText
                label="Quantidade"
                id="quantidade"
                name="quantidade"
                value={produtoEdit.quantidade}
                onChange={(e) => handleFieldEdit("quantidade", e.target.value)}
            />

            <InputText
                label="Quantidade Minima"
                id="quantidadeMinima"
                name="quantidadeMinima"
                value={produtoEdit.quantidadeMinima}
                onChange={(e) => handleFieldEdit("quantidadeMinima", e.target.value)}
            />



            <div className="flex justify-around">
                <Button href="/produto" variant="secondary">
                    <ChevronLeftIcon className="h-6 w-6 " />
                    cancelar
                </Button>
                <Button type="button" onClick={handleSubmit}>
                    <CheckIcon className="h-6 w-6" />
                    salvar
                </Button>
            </div>

            <span className="text-red-500">{error}</span>
        </form>
    )
}