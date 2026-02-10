'use client'

import { SearchInput } from '@/components/common/filter/search'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { UseGetAnnouncementYear } from '@/app/information/announcements/hooks'
import { SkeletonCategoryNews } from '@/app/information/news/components/skeleton'
import { UseGetAnnouncement } from '@/app/homepage/hooks'
import Image from 'next/image'
import { useStateContext } from '@/contexts'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'
import { AnnouncementSkeleton } from '@/app/information/announcements/components/skeleton'
import { useRouter, useSearchParams } from 'next/navigation'
import { clsx } from 'clsx'

export const AnnouncementSection = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const tahun = searchParams.get('tahun') || ''

  const { year, loading: load1 } = UseGetAnnouncementYear()
  const { announcement, loading: load2 } = UseGetAnnouncement({
    page: '1',
    limit: '10',
    search: search || '',
    year: tahun || '',
  })
  const [{ profile }] = useStateContext()
  const router = useRouter()

  const HandleSelectYear = (slug: string) => {
    const ParamsSearch = new URLSearchParams(searchParams)
    ParamsSearch.set('tahun', slug)
    if (slug === '') {
      ParamsSearch.delete('tahun')
    }
    router.push(`?${ParamsSearch.toString()}`, { scroll: false })
  }

  return (
    <>
      <div className="bg-primary dark:bg-primary/40">
        <div
          className={`w-full py-10`}
          style={{
            backgroundImage: "url('/img/background.png')",
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={'flex flex-col lg:grid lg:grid-cols-4 gap-5 container'}>
            <div className={'col-span-4'}>
              <Link href={'/information'} className={'flex items-center gap-1.5 text-white'}>
                <ArrowLeft className={'size-4'} />
                Kembali
              </Link>
              <p className="mb-5 underline underline-offset-8 text-2xl font-semibold text-white">
                Pengumuman Program Studi
              </p>
              <SearchInput
                className={'bg-white w-full border border-gray-100 rounded-full pl-4'}
                placeholder={'Cari Berita'}
              />

              {load1 ? (
                <SkeletonCategoryNews />
              ) : (
                <ul className={'flex flex-nowrap gap-5 overflow-x-auto mt-5'}>
                  <li
                    onClick={() => HandleSelectYear('')}
                    className={clsx(
                      'bg-white text-primary p-1.5 px-4 cursor-pointer rounded',
                      !tahun && '!bg-primary text-white border border-white'
                    )}
                  >
                    Semua
                  </li>
                  {year?.map((item, k) => (
                    <li
                      onClick={() => {
                        HandleSelectYear(item.toString())
                      }}
                      className={clsx(
                        'bg-white text-primary p-1.5 px-4 cursor-pointer rounded',
                        tahun === item.toString() && '!bg-primary text-white border border-white'
                      )}
                      key={k}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {load2
              ? Array.from({ length: 6 }).map((_, i) => <AnnouncementSkeleton key={i} />)
              : announcement?.map((item, l) => (
                  <Link href={`/information/announcements/${item?.slug}`} key={l}>
                    <div className="bg-[#DFDFDF] dark:bg-primary p-5 rounded w-full flex flex-col gap-2 cursor-pointer">
                      <Image
                        src={profile?.SatuanOrganisasi?.logo || '/img/noimg.png'}
                        alt="logo"
                        width={120}
                        height={120}
                        className="size-[120px] rounded-full object-cover mx-auto"
                      />
                      <p className="line-clamp-2">{item?.judul_pengumuman}</p>
                      <p className="flex items-center gap-1.5 text-sm">
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
      </div>
    </>
  )
}
