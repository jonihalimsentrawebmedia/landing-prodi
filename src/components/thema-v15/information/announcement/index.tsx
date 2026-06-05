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
import { JumbotronTitleV15 } from '@/components/thema-v15/component/common/jumbotronTitle'
import React from 'react'
import { ArrowLeft } from 'lucide-react'

const AnnouncementInformationV15 = () => {
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
      <JumbotronTitleV15 title={'Informasi'} context={'INFORMASI'} />
      <div className={'bg-primary w-full'}>
        <div className="container-sm p-2">
          <BreadcrumbBasic
            className={'text-white! hover:bg-[#1F7A63]!'}
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Profil', link: '/information' },
              { name: 'Pengumuman' },
            ]}
          />
        </div>
      </div>

      <div className="lg:p-5">
        <div className="container-sm lg:max-w-[1280px] mx-auto py-0 space-y-4">
          <Link href={'/information'} className="flex items-center gap-1.5 text-[#1F7A63]">
            <ArrowLeft className={'size-4'} />
            <div className="flex items-center gap-4">
              <h2 className="text-[#1F7A63] text-[24px] font-semibold shrink-0">Pengumuman Program Studi</h2>
              <div className="h-px bg-[#C8C8C8] flex-1" />
            </div>
          </Link>
          <SearchInput placeholder={'Cari Pengumuman'} className={'w-full bg-white rounded border border-[#C8C8C8]'} />
          <FilterChip
            className={'text-[#1F7A63] border-[#1F7A63]! border hover:bg-primary! data-[state=active]:bg-primary data-[state=active]:text-white'}
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
                className="w-full space-y-1.5 p-5 bg-white rounded-2xl border border-[#C8C8C8] shadow-sm"
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

                <p className="line-clamp-2 mt-4 text-xl font-semibold text-[#444444]">{row?.judul_pengumuman}</p>
                <p
                  className={
                    'text-xs flex items-center gap-1.5 font-semibold bg-[#E9F5F2] text-[#1F7A63] w-fit rounded-full px-3 py-1.5'
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

export default AnnouncementInformationV15
