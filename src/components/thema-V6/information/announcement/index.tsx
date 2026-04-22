'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { SearchInput } from '@/components/common/filter/search'
import { FilterChip } from '@/components/thema-v5/component/common/filterChip'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { useSearchParams } from 'next/navigation'
import { useStateContext } from '@/contexts'
import { UseGetAnnouncement } from '@/app/homepage/hooks'
import { UseGetAnnouncementYear } from '@/app/information/announcements/hooks'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'

const AnnouncementInformationV6 = () => {
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
      <ProfileLayout title={'Informasi'} context={'INFORMASI'}>
        <div className={'bg-footer w-full max-w-[1920px] mx-auto p-4'}>
          <div className="container-sm">
            <BreadcrumbBasic
              data={[
                { name: 'Beranda', link: '/' },
                { name: 'Informasi', link: '/information' },
                { name: 'Pengumuman' },
              ]}
            />
          </div>
        </div>
        <div className="lg:p-5 bg-primary/10 dark:bg-gray-800">
          <div className="container-sm py-5 space-y-4">
            <SearchInput placeholder={'Cari Pengumuman'} className={'w-full bg-white rounded'} />
            <FilterChip
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
                  className="w-full space-y-1.5"
                  key={k}
                >
                  <Image
                    src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                    alt={'image'}
                    width={300}
                    height={300}
                    className={'lg:w-[300px] lg:h-[300px] lg:size-[300px] w-[180px] h-[180px] mx-auto object-cover rounded-full'}
                  />
                  <p className="line-clamp-2 text-2xl font-semibold">{row?.judul_pengumuman}</p>
                  <p>{row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}</p>
                  <div
                    className={'html-class flex flex-col gap-1.5 line-clamp-3!'}
                    dangerouslySetInnerHTML={{ __html: row?.isi_pengumuman ?? '' }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default AnnouncementInformationV6
