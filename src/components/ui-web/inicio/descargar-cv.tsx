"use client"
import Link from 'next/link'
import React from 'react'
import { TbFileDownload } from 'react-icons/tb'
import { toast } from 'sonner'

export const DescargarCv = () => {
    return (
        <Link
            href="/cv.pdf"
            download
            className="flex max-w-fit items-center justify-center gap-1 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            target="_blank"
            onClick={() =>
                toast.success('Se descargó exitosamente')
            }
        >
            <TbFileDownload size="20" />
            Descargar CV
        </Link>
    )
}
