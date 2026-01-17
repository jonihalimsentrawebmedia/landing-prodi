'use client'

import { UseGetProfileLecturer } from '@/app/profile/lecturer/hooks'
import { SkeletonStaff } from '@/app/profile/staff/components/skeleton'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import NOIMG from '../../../../../public/img/noimg.png'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const SectionLecturerProfile = () => {
  const { lecturer, loading } = UseGetProfileLecturer()
  return (
    <>
      <div className={'flex flex-col gap-5'}>
        <p className="text-3xl font-semibold text-primary">Dosen</p>

        <div className="grid lg:grid-cols-2 gap-4">
          {loading ? (
            <SkeletonStaff />
          ) : (
            <>
              {lecturer?.map((row, k) => (
                <Card key={k} className={'p-2'}>
                  <CardContent className={'p-2 flex flex-col gap-2'}>
                    <div className="flex items-center gap-2">
                      <Image
                        src={NOIMG}
                        alt={row?.nama}
                        className={'w-[75px] h-[100px] object-cover rounded'}
                        width={75}
                        height={100}
                      />
                      <div className="flex flex-col gap-1.5">
                        <p className="font-semibold">{row?.nama}</p>
                        <p className={'text-gray-500 text-sm'}>Nip</p>
                        <p className="text-sm">{row?.nip}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Link href={'/profile/staff'}>
            <Button variant={'outline'} className={'rounded-full border border-primary'}>
              <ArrowLeft className={'size-4'} />
              staff
            </Button>
          </Link>
          <Link href={'/profile/news'}>
            <Button variant={'outline'} className={'rounded-full border border-primary'}>
              Berita
              <ArrowRight className={'size-4'} />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
