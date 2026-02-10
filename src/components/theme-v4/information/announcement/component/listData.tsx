'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SearchInput } from '@/components/common/filter/search'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'
import { UseGetAnnouncementYear } from '@/app/information/announcements/hooks'
import { UseGetAnnouncement } from '@/app/homepage/hooks'
import { useStateContext } from '@/contexts'
import { ChipYear } from '@/components/thema-v2/information/announcement/components/chipYear'
import { SkeletonListData } from '@/components/theme-v4/information/announcement/component/skeleton'

export const ListDataAnnouncement = () => {
  const { year, loading: load1 } = UseGetAnnouncementYear()
  const { announcement, loading: load2 } = UseGetAnnouncement()
  const [{ profile }] = useStateContext()

  const loading = load1 || load2

  if (loading) return <SkeletonListData />

  return (
    <>
      <div className="bg-white dark:bg-primary/50">
        <div
          className={`w-full py-10`}
          style={{
            backgroundImage: "url('/img/grenbg.png')",
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={'flex flex-col lg:grid lg:grid-cols-4 gap-5 container'}>
            <div className={'col-span-4'}>
              <Link
                href={'/information'}
                className={'flex text-xs dark:text-white items-center gap-1.5 text-primary'}
              >
                <ArrowLeft className={'size-4'} />
                Kembali
              </Link>
              <p className="mb-5 underline dark:text-white mt-2 lg:mt-0 underline-offset-8 lg:text-2xl font-semibold text-primary">
                Pengumuman Program Studi
              </p>
              <SearchInput
                className={'bg-white w-full border border-primary rounded-full pl-4'}
                placeholder={'Cari Berita'}
              />
            </div>

            <div className="col-span-4">
              <ChipYear data={year} />
            </div>

            {announcement?.map((item, l) => (
              <Link href={`/information/announcements/${item?.slug}`} key={l}>
                <div className="bg-white border dark:bg-primary p-5 rounded w-full flex flex-col gap-2 cursor-pointer">
                  <Image
                    src={profile?.SatuanOrganisasi?.logo || '/img/noimg.png'}
                    alt="logo"
                    width={120}
                    height={120}
                    className="size-[120px] object-cover mx-auto"
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
