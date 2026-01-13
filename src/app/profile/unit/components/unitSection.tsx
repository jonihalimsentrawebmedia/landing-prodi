'use client'

import { UseGetProfileUnit } from '@/app/profile/unit/hooks'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SkeletonUnitProfile } from '@/app/profile/unit/components/skeleton'

export const UnitSection = () => {
  const { unitProfile, loading } = UseGetProfileUnit()

  if (loading) return <SkeletonUnitProfile />

  return (
    <>
      <div className={'flex flex-col gap-5'}>
        <p className="text-3xl font-semibold text-primary">Unit Pengelola</p>

        <div className="mt-5 space-y-4">
          {unitProfile?.map((row, k) => (
            <Card key={k} className={'p-2'}>
              <CardContent className={'flex items-center gap-2 p-2'}>
                <Image
                  src={row?.gambar_url}
                  alt={row?.nama}
                  className={'w-[75px] h-[100px] object-cover rounded'}
                  width={75}
                  height={100}
                />
                <div className="flex flex-col gap-1.5">
                  <p className="font-semibold">{row?.nama}</p>
                  <p className={'text-gray-500'}>Jabatan</p>
                  <p className="font-semibold">{row?.jabatan}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Link href={'/profile'}>
            <Button variant={'outline'} className={'rounded-full border border-primary'}>
              <ArrowLeft className={'size-4'} />
              Tentang
            </Button>
          </Link>
          <Link href={'/profile/vision'}>
            <Button variant={'outline'} className={'rounded-full border border-primary'}>
              Visi, Misi, dan Tujuan
              <ArrowRight className={'size-4'} />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
