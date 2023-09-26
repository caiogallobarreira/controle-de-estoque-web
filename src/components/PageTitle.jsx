"use client"
export default function PageTitle({ title }) {
    return (
        <div className="flex flex-col rounded-md bg-slate-200">
            <p className='text-2xl font-semibold'>{title}</p>
            <hr className='h-1 bg-slate-500 border-0 rounded md:my-6'/>    
        </div>
    )
}   