import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import React from 'react'
import Providers from '@/provider'
import { ToastContainer } from 'react-toastify'
import { FetchResAPI } from '@/provider/server'
import { IProfileResponse } from '@/contexts/types'
import StateProvider from '@/contexts'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  preload: true,
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  preload: true,
})

export async function generateMetadata(): Promise<Metadata> {
  const data = await FetchResAPI('/public-prodi/profil')
  const profile: IProfileResponse = data?.data
  const satuan = profile?.SatuanOrganisasi

  return {
    metadataBase: new URL('https://landing-prodi.vercel.app'),
    title: `${satuan?.singkatan_universitas} || ${satuan?.nama}`,
    description: `Sekolah TInggi Agama Islam Negeri MADINA Program Studi ${satuan?.nama}`,
    icons: {
      icon: satuan?.logo,
      shortcut: satuan?.logo,
      apple: satuan?.logo,
    },
    openGraph: {
      type: 'website',
      title: `${satuan?.singkatan_universitas} || ${satuan?.nama}`,
      description: `Sekolah TInggi Agama Islam Negeri MADINA Program Studi ${satuan?.nama}`,
      url: profile?.domain,
      siteName: satuan?.nama,
      images: [
        {
          url: satuan?.logo,
          alt: satuan?.nama,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'id_ID',
    },
    twitter: {
      card: 'summary_large_image',
      title: satuan?.nama,
      description: satuan?.nama,
      images: [
        {
          url: satuan?.logo,
          alt: satuan?.nama,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <StateProvider>{children}</StateProvider>
          <ToastContainer
            position="top-right"
            theme="colored"
            pauseOnHover={false}
            closeOnClick={true}
          />
        </Providers>
      </body>
    </html>
  )
}
