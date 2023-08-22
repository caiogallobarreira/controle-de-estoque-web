import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle'
import ProductCard from '@/components/ProductCard'
import Image from 'next/image'

const produtos = [
    {
      id: 1,
      estoqueId: 1,
      nome: "Faca de Cozinha",
      descricao: "Facas de cozinha com Lâminas em Aço Inox e Cabos de Polipropileno Preto",
      imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
      quantidade: 100,
      quantidadeMinima: 10,
  },
  {
      id: 2,
      estoqueId: 1,
      nome: "Televisão",
      descricao: "Televisão 4K de 55 polegadas",
      imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
      quantidade: 50,
      quantidadeMinima: 5,
  },
];


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col rounded-md m-5 p-10 justify-items-center bg-slate-200">
        <PageTitle title="Dashboard" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, nihil. Quasi aperiam dolore ab repellendus porro soluta quisquam. Assumenda quas a tempore provident enim illum numquam amet, quibusdam culpa fugiat?</p>
        <div className='grid grid-flow-col self-center gap-4 my-10'>
          {produtos.map((produto) =>
            <ProductCard key={produto.id} produto={produto} />
          )}
        </div>
      </div>
    </>
  )
}
