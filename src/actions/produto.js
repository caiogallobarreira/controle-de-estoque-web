"use server"

import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/produto"

export async function create(formData) {

    const obj = Object.fromEntries(formData);

    //transfotrm obj.estoque into {"id": obj.estoque}
    obj.estoque = { id: obj.estoque }

    const options = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)

    
    if (resp.status !== 201) {
        const json = await resp.json()
        const errors = json.reduce((str, error) => str += error.message + ". ", "")
        return { message: `Erro ao cadastrar produto. ${errors}` }
    }

    revalidatePath("/")
    return { success: "ok" }
}

export async function getProdutos() {
    const resp = await fetch(url+"?size=5000")
    console.log(resp);
    return resp.json()
}

export async function destroy(id){

    const urlDelete = url + "/" + id

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(urlDelete, options)

    if (resp.status !== 204)
        return {error: "Erro ao apagar o produto. " + resp.status}

    revalidatePath("/produto")

}

export async function getProduto(id){
    const getUrl = url + "/" + id

    console.log(getUrl);

    const resp = await fetch(getUrl)

    if(resp.status !== 200)
        return {error: "Erro ao buscar dados do produto"}

    return await resp.json()
}

export async function update(conta){
    const updateUrl = url + "/" + conta.id

    const options = {
        method: "PUT",
        body: JSON.stringify( conta ),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(updateUrl, options)

    if(resp.status !== 200)
        return {error: "erro ao atualizar produto"}

    revalidatePath("/produto")
}