'use client'

import { UseGetAboutProdi } from '@/app/homepage/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const SectionAboutV6 = () => {
  const { aboutProdi } = UseGetAboutProdi()

  return (
    <>
      <div className="relative w-full bg-primary/20 lg:h-[376px] flex items-center">
        <div className="absolute max-w-[1440px] w-full h-full z-10 transform left-1/2 -translate-x-1/2">
          <Image
            src="/img/bgprfv6.png"
            alt="background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container-sm relative z-20 py-10 h-full space-y-4 flex flex-col justify-center">
          <h2 className="lg:text-3xl text-footer font-semibold text-center">
            Tentang Program Studi
          </h2>
          <div
            className="flex flex-col gap-2 html-class text-sm!"
            dangerouslySetInnerHTML={{ __html: aboutProdi?.isi_konten ?? '' }}
          />
          <div className="flex justify-center">
            <Link href={'/profile'}>
              <Button className={'bg-footer hover:bg-footer text-white'}>Baca Selengkapnya</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionAboutV6
