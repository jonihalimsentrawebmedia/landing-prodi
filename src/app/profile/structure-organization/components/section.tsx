'use client'

import { UseGetStructureOrganization } from '@/app/profile/structure-organization/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const SectionStructureOrganization = () => {
  const { organization } = UseGetStructureOrganization()
  return (
    <>
      <div className={'flex flex-col gap-5'}>
        <p className="text-3xl font-semibold text-primary">Struktur Organisasi</p>

        {organization?.url_gambar ? (
          <Image
            src={organization?.url_gambar}
            alt={'image'}
            className={'w-full h-auto object-contain'}
            width={1920}
            height={1080}
          />
        ) : (
          'Gambar tidak tersedia'
        )}

        <div className="flex items-center justify-between">
          <Link href={'/profile/vision'}>
            <Button variant={'outline'} className={'rounded-full border border-primary'}>
              <ArrowLeft className={'size-4'} />
              Visi, Misi, dan Tujuan
            </Button>
          </Link>
          <Link href={'/profile/staff'}>
            <Button variant={'outline'} className={'rounded-full border border-primary'}>
              Staff
              <ArrowRight className={'size-4'} />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
