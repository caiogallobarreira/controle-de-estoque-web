import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle'
import ProductCard from '@/components/ProductCard'
import Image from 'next/image'
import { getProdutos } from '@/actions/produto'
import Button from '@/components/Button'

export default async function Home() {
  let produtos = await getProdutos();
  produtos = produtos._embedded.entityModelList;
  return (
    <>
      <Navbar />
      <div className="flex flex-col rounded-md m-5 p-10 justify-items-center bg-slate-200">
        <PageTitle title="Dashboard" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, nihil. Quasi aperiam dolore ab repellendus porro soluta quisquam. Assumenda quas a tempore provident enim illum numquam amet, quibusdam culpa fugiat?</p>
        <div className='flex'>
          <Button href="/produto">Ver produtos</Button>
        </div>
      </div>
    </>
  )
}
