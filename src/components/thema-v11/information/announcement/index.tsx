'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { SearchInput } from '@/components/common/filter/search'
import { FilterChip } from '@/components/thema-v5/component/common/filterChip'
import { useSearchParams } from 'next/navigation'
import { useStateContext } from '@/contexts'
import { UseGetAnnouncement } from '@/app/homepage/hooks'
import { UseGetAnnouncementYear } from '@/app/information/announcements/hooks'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'
import { FaRegCalendarAlt } from 'react-icons/fa'
import JumbotronTitleV11 from '@/components/thema-v11/component/common/jumbotronTitle'

const AnnouncementInformationV11 = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const tahun = searchParams.get('tahun')
  const [{ profile }] = useStateContext()

  const { announcement, loading: load1 } = UseGetAnnouncement({
    year: tahun ?? '',
    search: search ?? '',
    page: '1',
    limit: '10',
  })

  const { year, loading: load2 } = UseGetAnnouncementYear()

  const loading = load1 || load2
  if (loading) return <></>

  return (
    <>
      <JumbotronTitleV11 title={'Informasi'} context={'INFORMASI'} />
      <div className="container-sm py-5">
        <div className="bg-blue-50 p-1.5 px-2 rounded">
          <BreadcrumbBasic
            className={'text-primary hover:bg-transparent!'}
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Informasi', link: '/information' },
              { name: 'Pengumuman' },
            ]}
          />
        </div>
      </div>

      <div className="lg:p-5 dark:bg-gray-800">
        <div className="container-sm py-5 space-y-4">
          <SearchInput placeholder={'Cari Pengumuman'} className={'w-full bg-white rounded'} />
          <FilterChip
            className={'text-primary border-primary! border hover:bg-primary!'}
            name={'category'}
            data={
              year?.map((row) => ({
                label: row?.toString(),
                value: row?.toString(),
              })) ?? []
            }
          />
        </div>

        <div className="container-sm py-5">
          <div className="grid lg:grid-cols-3 gap-5">
            {announcement?.map((row, k) => (
              <Link
                href={`/information/announcements/${row?.slug}`}
                className="w-full space-y-1.5 p-5 bg-white rounded-2xl border"
                key={k}
              >
                <div className="relative mx-auto w-[80px] size-[80px] lg:w-[180px] lg:size-[180px] rounded-full overflow-hidden">
                  <Image
                    src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                    alt={'image'}
                    fill
                    className={'object-cover'}
                  />
                </div>

                <p className="line-clamp-2 mt-4 text-xl font-semibold">{row?.judul_pengumuman}</p>
                <p
                  className={
                    'text-xs flex items-center gap-1.5 font-semibold bg-primary/10 w-fit rounded-full px-3 py-1.5 text-primary'
                  }
                >
                  <FaRegCalendarAlt className={'size-4'} />
                  {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AnnouncementInformationV11
