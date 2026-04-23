'use client'

import JumbotronTitleV7 from '@/components/thema-V7/component/common/jumbotron'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { useRouter, useSearchParams } from 'next/navigation'
import { UseGetAnnouncement } from '@/app/homepage/hooks'
import { SearchInput } from '@/components/common/filter/search'
import { FilterChip } from '@/components/thema-v5/component/common/filterChip'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { PaginationCustom } from '@/components/common/pagination'
import { useStateContext } from '@/contexts'
import { UseGetAnnouncementYear } from '@/app/information/announcements/hooks'

const AnnouncementInformationPage7 = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const tahun = searchParams.get('tahun')
  const page = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '10'
  const [{ profile }] = useStateContext()

  const {
    announcement,
    loading: load1,
    meta,
  } = UseGetAnnouncement({
    year: tahun ?? '',
    search: search ?? '',
    page: page,
    limit: limit,
  })
  const { year, loading: load2 } = UseGetAnnouncementYear()

  const loading = load1 || load2

  if (loading) return <></>

  return (
    <>
      <JumbotronTitleV7 title={'Informasi'} context={'INFORMASI'} />
      <div className={'bg-primary w-full max-w-[1920px] mx-auto p-4'}>
        <div className="container-sm">
          <BreadcrumbBasic
            className={'text-white! hover:bg-primary!'}
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Informasi', link: '/information' },
              { name: 'Pengumuman' },
            ]}
          />
        </div>
      </div>

      <div className="lg:p-5 bg-footer dark:bg-gray-800">
        <div className="container-sm py-5 space-y-4">
          <SearchInput placeholder={'Cari Berita'} className={'w-full bg-white rounded'} />
          <FilterChip
            className={'text-primary border-primary hover:bg-primary'}
            name={'category'}
            data={
              year?.map((row) => ({
                label: row?.toString(),
                value: row?.toString(),
              })) ?? []
            }
          />
        </div>

        <div className="flex flex-col gap-5 container-sm">
          {announcement?.map((row, k) => (
            <Link
              href={`/information/announcements/${row?.slug}`}
              key={k}
              className={'flex flex-col lg:flex-row items-start gap-5'}
            >
              <div className="lg:w-[200px] w-[200px] lg:min-w-[200px] h-[200px] lg:h-[200px] relative">
                <Image
                  src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                  sizes="100vw"
                  alt={'gambar'}
                  fill
                  className={'object-cover object-center w-full h-[200px] rounded-lg'}
                />
              </div>
              <div className={'space-y-2'}>
                <div className={'flex gap-2'}>
                  <p
                    className={
                      'text-primary bg-primary/20 rounded-full px-3 py-1.5 font-semibold text-sm flex items-center gap-1'
                    }
                  >
                    <FaRegCalendarAlt />
                    {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                  </p>
                </div>
                <p className="lg:text-2xl line-clamp-2">{row?.judul_pengumuman}</p>
                <div
                  className={'flex flex-col gap-1.5 html-class line-clamp-3! text-sm!'}
                  dangerouslySetInnerHTML={{ __html: row?.isi_pengumuman ?? '' }}
                />
              </div>
            </Link>
          ))}

          {meta && (
            <PaginationCustom
              meta={meta}
              page={Number(page)}
              onPageChange={(e) => {
                const ParamsQuery = new URLSearchParams(searchParams)
                ParamsQuery.append('page', e.toString())
                router.push(`?${ParamsQuery.toString()}`)
              }}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default AnnouncementInformationPage7
