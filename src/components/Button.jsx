"use client"
import Link from "next/link";

export default function Button({ children, variant = "primary", type = "link", ...props }) {
    const styles = {
        primary: "flex items-center text-white gap-2 bg-blue-500 py-2 px-4 rounded hover:bg-blue-600",
        secondary: "flex items-center gap-2 py-2 px-4 rounded border-2 border-slate-400 hover:bg-slate-400",
        danger: "flex items-center text-white gap-2 bg-red-500 py-2 px-4 rounded hover:bg-red-600"
    }

    const classVariant = styles[variant]

    return (
        <>
            {
                type === "link" ?
                    <Link href="#" {...props} className={classVariant}>
                        {children}
                    </Link>
                    :
                    <button {...props} className={classVariant}>
                        {children}
                    </button>
            }
        </>
    )
}