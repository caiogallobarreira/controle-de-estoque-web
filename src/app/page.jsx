import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle'
import ProductCard from '@/components/ProductCard'
import Image from 'next/image'

async function getProdutos() {
  const url = 'http://localhost:8080/api/v1/produto';
  const response = await fetch(url);
  return response.json();
}


export default async function Home() {
  let produtos = await getProdutos();
  produtos = produtos._embedded.entityModelList;
  return (
    <>
      <Navbar />
      <div className="flex flex-col rounded-md m-5 p-10 justify-items-center bg-slate-200">
        <PageTitle title="Dashboard" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, nihil. Quasi aperiam dolore ab repellendus porro soluta quisquam. Assumenda quas a tempore provident enim illum numquam amet, quibusdam culpa fugiat?</p>
        <div className='grid grid-flow-col grid-rows-2 self-center gap-4 my-10'>
          {produtos.map(produto => <ProductCard key={produto.id} produto={produto}></ProductCard>) }
        </div>
      </div>
    </>
  )
}
