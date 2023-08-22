import Link from "next/link";

export default function Navbar() {
    return <nav className="bg-slate-200 px-12 py-8 flex justify-between items-center">
    <ul className='flex items-end gap-5'>
      <li><Link className='text-xl font-bold' href="/">Controle de Estoque</Link></li>
      <li>/</li>
      <li><Link href='/perfil' className="px-6 py-4">Perfil</Link></li>
      <li><Link href='/produto/criar' className="px-6 py-4">Criar Produto</Link></li>
    </ul>
    <div className='flex gap-5 justify-center items-center'>
      <div className='h-16 w-16 rounded-full overflow-hidden'>
        <img src="https://i.pravatar.cc/100" alt="Logo"/>
      </div>
      <div>
        <p className='text-base'>Olá, <strong>Usuário</strong></p>
        <p className='text-xs'>{new Date().toLocaleString()}</p>
      </div>
      <div>
        <button className='border border-red-400 text-red-600 hover:bg-red-500 hover:text-white duration-150 px-4 py-2 rounded-md cursor-pointer'>Sair</button>
      </div>
    </div>
  </nav>
}