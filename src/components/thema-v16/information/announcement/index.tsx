'use client'

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
import { JumbotronTitleV16 } from '@/components/thema-v16/component/jumbotronTitle'
import React from 'react'
import { cn } from '@/lib/utils'

const AnnouncementInformationV16 = () => {
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
      <JumbotronTitleV16
        title={'Informasi'}
        context={'INFORMASI'}
        data={[
          { name: 'Beranda', link: '/' },
          { name: 'Profil', link: '/information' },
          { name: 'Pengumuman' },
        ]}
      />

      <div className="lg:p-5">
        <div className="container-sm lg:max-w-[1280px] mx-auto py-0 space-y-4">
          <div className="flex items-center gap-2 w-full">
            <div className="border-l-4 border-b-4 border-[#CDA327] px-4 py-2">
              <h2
                className={cn(
                  'font-sora text-[25px] leading-[38px] font-normal text-[#0F766E] whitespace-nowrap'
                )}
              >
                Pengumuman Program Studi
              </h2>
            </div>
          </div>
          <SearchInput
            placeholder={'Cari Pengumuman'}
            className={'w-full bg-white rounded border border-[#C8C8C8]'}
          />
          <FilterChip
            className={
              'text-[#0F766E] border-[#0F766E]! border hover:bg-[#0F766E]! data-[state=active]:bg-[#0F766E] data-[state=active]:text-white'
            }
            name={'category'}
            data={
              year?.map((row) => ({
                label: row?.toString(),
                value: row?.toString(),
              })) ?? []
            }
          />
        </div>

        <div className="container-sm lg:max-w-[1280px] mx-auto py-5">
          <div className="grid lg:grid-cols-3 gap-5">
            {announcement?.map((row, k) => (
              <Link
                href={`/information/announcements/${row?.slug}`}
                className="rounded-2xl border border-[#C8C8C8] bg-white shadow-sm p-5 space-y-1.5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
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

                <p className="line-clamp-2 mt-4 text-xl font-semibold text-[#444444]">
                  {row?.judul_pengumuman}
                </p>
                <p
                  className={
                    'text-xs flex items-center gap-1.5 font-semibold bg-[#E9F5F2] text-[#0F766E] w-fit rounded-full px-3 py-1.5'
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

export default AnnouncementInformationV16
