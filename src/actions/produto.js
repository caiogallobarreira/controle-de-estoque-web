"use server"

import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/produto?size=5000"

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
        console.log(json);
        const errors = json.reduce((str, error) => str += error.message + ". ", "")
        return { message: `Erro ao cadastrar produto. ${errors}` }
    }

    revalidatePath("/")
    return { success: "ok" }
}

export async function getProdutos() {
    const resp = await fetch(url)
    console.log(resp);
    return resp.json()
}