'use client'

import { UseGetProfileVisionMission } from '@/app/profile/vision/hooks'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SkeletonVision } from '@/app/profile/vision/components/skeleton'

export const SectionVisionMission = () => {
  const { visionMission, loading } = UseGetProfileVisionMission()

  if (loading) return <SkeletonVision />

  return (
    <>
      <div className={'flex flex-col gap-5'}>
        <p className="text-3xl font-semibold text-primary">Visi</p>
        <div
          className={'html-class'}
          dangerouslySetInnerHTML={{ __html: visionMission?.visi ?? '' }}
        />

        <p className="text-3xl font-semibold text-primary">Misi</p>
        <div
          className={'html-class'}
          dangerouslySetInnerHTML={{ __html: visionMission?.misi ?? '' }}
        />

        <p className="text-3xl font-semibold text-primary">Tujuan</p>
        <div
          className={'html-class'}
          dangerouslySetInnerHTML={{ __html: visionMission?.tujuan ?? '' }}
        />

        <div className="flex items-center justify-between">
          <Link href={'/profile/unit'}>
            <Button variant={'outline'} className={'rounded-full border border-primary'}>
              <ArrowLeft className={'size-4'} />
              Unit
            </Button>
          </Link>
          <Link href={'/profile/structure-organization'}>
            <Button variant={'outline'} className={'rounded-full border border-primary'}>
              Struktur Organisasi
              <ArrowRight className={'size-4'} />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
