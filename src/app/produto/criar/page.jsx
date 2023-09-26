"use client"

import { create } from '@/actions/produto'
import Button from '@/components/Button'
import InputText from '@/components/InputText'
import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle'
import { CheckIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { redirect } from 'next/dist/server/api-utils'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [error, setError] = useState("")

  async function handleSubmit(formData){
      const resp = await create(formData)

      if (!resp.success) {
          setError(resp.message)
          return
      }

      // redirect('/produto');
      
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col rounded-md m-5 p-10  bg-slate-200">
        <PageTitle title="Criar produto" />
        <form action={handleSubmit} className="flex flex-col gap-4">
          <InputText
              label="ID do Estoque"
              id="estoque"
              name="estoque"
          />

          <InputText
              label="Nome"
              id="nome"
              name="nome"
          />

          <InputText
              label="Descrição"
              id="descricao"
              name="descricao"
          />

          <InputText
              label="URL da Imagem"
              id="imagemUrl"
              name="imagemUrl"
          />

          <InputText
              label="Quantidade"
              id="quantidade"
              name="quantidade"
          />

          <InputText
              label="Quantidade Minima"
              id="quantidadeMinima"
              name="quantidadeMinima"
          />



          <div className="flex justify-around">
              <Button href="/produto" variant="secondary">
                  <ChevronLeftIcon className="h-6 w-6 " />
                  cancelar
              </Button>
              <Button type="button">
                  <CheckIcon className="h-6 w-6" />
                  salvar
              </Button>
          </div>

          <span className="text-red-500">{error}</span>
      </form>
      </div>
    </>
  )
}
