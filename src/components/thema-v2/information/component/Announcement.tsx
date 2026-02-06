'use client'

import { format } from 'date-fns'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnnouncementSectionSkeleton } from './skeleton'
import { UseGetAnnouncement } from '@/app/homepage/hooks'
import { TitleUnderline } from '@/components/thema-v2/component/common/titleUnderLine'

export const AnnouncementInformation = () => {
  const { announcement, loading } = UseGetAnnouncement({
    page: '1',
    limit: '4',
  })

  if (loading) return <AnnouncementSectionSkeleton />

  return (
    <>
      <div className="bg-linear-to-r from-[#224093] to-primary w-full max-w-[1920px] mx-auto">
        <div
          style={{
            backgroundImage: "url('/img/polabg.png')",
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className={'w-full py-5'}
        >
          <div className="container">
            <TitleUnderline
              text={'Pengumuman Program Studi'}
              className={'text-white decoration-white text-center text-2xl'}
            />

            <div className="lg:grid grid-cols-4 gap-5 mt-6">
              {announcement?.map((row, index) => (
                <Link href={`/information/announcements/${row?.slug}`} key={index}>
                  <div
                    className={'text-white flex flex-col gap-2.5 border-b-2 border-b-white pb-2.5'}
                  >
                    <p className={'line-clamp-3'}>{row?.judul_pengumuman}</p>
                    <p>{row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : '-'}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-end mt-5">
              <Link
                href={'/information/announcements'}
                className={'flex items-center gap-1 font-semibold text-white'}
              >
                Lihat Pengumuman Lainnya
                <ArrowRight className={'size-4'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
