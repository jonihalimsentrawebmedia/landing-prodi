'use client'

import { SearchInput } from '@/components/common/filter/search'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'
import { useStateContext } from '@/contexts'
import { ChipYear } from './chipYear'
import { useSearchParams } from 'next/navigation'
import { AnnouncementSkeletonSection } from './skeleton'
import { UseGetAnnouncement } from '@/app/homepage/hooks'
import { UseGetAnnouncementYear } from '@/app/information/announcements/hooks'
import { TitleUnderline } from '@/components/thema-v2/component/common/titleUnderLine'

export const AnnouncementSection = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  const { year, loading: load1 } = UseGetAnnouncementYear()
  const { announcement, loading: load2 } = UseGetAnnouncement({
    search: search ?? '',
    page: '1',
    limit: '10',
  })
  const [{ profile }] = useStateContext()
  const loading = load1 || load2

  if (loading) return <AnnouncementSkeletonSection />

  return (
    <>
      <div className="py-5">
        <div className={'flex flex-col lg:grid lg:grid-cols-4 gap-5 container'}>
          <div className={'col-span-4'}>
            <Link
              href={'/information'}
              className={'flex items-center gap-1.5 text-primary dark:text-white'}
            >
              <ArrowLeft className={'size-4'} />
              Kembali
            </Link>
            <TitleUnderline text={'Pengumuman Program Studi'} className={'text-start col-span-4'} />
            <SearchInput
              className={'bg-white w-full border border-gray-100 rounded-full pl-4 my-4'}
              placeholder={'Cari Pengumuman'}
            />
            <ChipYear data={year} />
          </div>

          {announcement?.map((item, l) => (
            <Link href={`/information/announcements/${item?.slug}`} key={l}>
              <div className="border p-5 rounded w-full flex flex-col gap-2 cursor-pointer dark:bg-primary">
                <Image
                  src={profile?.SatuanOrganisasi?.logo || '/img/noimg.png'}
                  alt="logo"
                  width={120}
                  height={120}
                  className="size-[120px] object-cover mx-auto"
                />
                <p className="line-clamp-2 font-semibold">{item?.judul_pengumuman}</p>
                <p className="flex text-primary items-center gap-1.5 text-sm dark:text-white">
                  <FaRegCalendarAlt />
                  {item?.published_at
                    ? format(item?.published_at, 'dd MMM yyyy', { locale: id })
                    : ''}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
