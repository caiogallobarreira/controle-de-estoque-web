import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col rounded-md m-5 p-10  bg-slate-200">
        <PageTitle title="Ver produto" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, nihil. Quasi aperiam dolore ab repellendus porro soluta quisquam. Assumenda quas a tempore provident enim illum numquam amet, quibusdam culpa fugiat?</p>
      </div>
    </>
  )
}
