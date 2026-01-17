'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export const SideMenuProfile = () => {
  const Menus = [
    { id: 1, name: 'Tentang', link: '/profile' },
    { id: 2, name: 'Unit Pengelola', link: '/profile/unit' },
    { id: 3, name: 'Visi, Misi, dan Tujuan', link: '/profile/vision' },
    { id: 4, name: 'Struktur Organisasi', link: '/profile/structure-organization' },
    { id: 5, name: 'Staff', link: '/profile/staff' },
    { id: 6, name: 'Dosen', link: '/profile/lecturer' },
    { id: 7, name: 'Berita', link: '/profile/news' },
    { id: 8, name: 'Galeri', link: '/profile/gallery' },
    { id: 9, name: 'Hubungi Kami', link: '/profile/contact-us' },
  ]

  const pathName = usePathname()

  return (
    <ul className="flex flex-nowrap pb-2 lg:pb-0 overflow-x-auto whitespace-nowrap lg:whitespace-pre-line lg:flex-col gap-5 mt-5 pl-8 relative h-fit">
      <div className="absolute w-[2px] h-full left-1 bg-linear-to-b from-white to-primary hidden lg:block" />
      {Menus.map((row) => {
        const isActive =
          row.link === '/profile'
            ? pathName === '/profile'
            : pathName === row.link || pathName.startsWith(row.link + '/')
        return (
          <li key={row.id}>
            <Link
              href={row.link}
              className={cn(
                'text-gray-500 transition-colors',
                isActive && 'text-white font-semibold'
              )}
            >
              {row.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
