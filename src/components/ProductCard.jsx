import Link from "next/link";

export default function ProductCard({ produto }) {
    return (
        <Link href="/produto" className="flex flex-row items-center gap-4 rounded-md bg-slate-100 p-8 w-[36rem] shadow-lg hover:shadow-xl duration-150">
            <div className="w-32">
                <img src={produto.imagemUrl} alt={produto.nome} className='rounded-md' />
            </div>
            <div>
                <p className='text-2xl font-semibold'>{produto.nome}</p>
                <p className='text-sm font-medium'>{produto.quantidade} unidades</p>
            </div>
        </Link>
    )
}