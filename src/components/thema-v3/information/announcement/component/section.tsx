'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import { UseGetAnnouncement } from '@/app/homepage/hooks'
import { UseGetAnnouncementYear } from '@/app/information/announcements/hooks'
import { useRouter, useSearchParams } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { useStateContext } from '@/contexts'
import Image from 'next/image'
import { AnnouncementSectionSkeleton } from './skeleton'
import { SearchInput } from '@/components/common/filter/search'

export const AnnouncementSection = () => {
  const router = useRouter()
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

  const HandleFilterYear = (e: string) => {
    const Params = new URLSearchParams()
    Params.append('tahun', e ?? '')
    if (e === '') {
      Params.delete('tahun')
    }
    router.push(`?${Params.toString()}`, { scroll: false })
  }

  if (loading) return <AnnouncementSectionSkeleton />

  return (
    <>
      <div className={'container py-5 flex flex-col gap-4'}>
        <Link href={'/information'} className={'flex items-center gap-1.5 text-primary'}>
          <ArrowLeft className={'size-4'} /> Kembali
        </Link>
        <TitleContent text={'Pengumuman Program Studi'} line_position={'bottom'} />

        <div className="mt-3">
          <SearchInput className={'w-full px-4 rounded-full'} placeholder={'Cari Pengumuman'} />
        </div>

        <div className="flex items-start gap-5 mt-5">
          <div className="w-full lg:max-w-[335px] h-fit border bg-primary-foreground border-primary">
            <p className="p-2 pb-0 text-primary font-semibold">Tahun Rilis</p>
            <Separator className={'mt-2 bg-primary'} />

            <RadioGroup
              value={tahun ?? ''}
              className={'flex flex-col gap-4 py-2 pl-2'}
              onValueChange={(e) => {
                HandleFilterYear(e)
              }}
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value={''} id={'all'} className={'border-primary size-4'} />
                <Label className={'dark:text-primary'} htmlFor={'all'}>
                  Semua
                </Label>
              </div>
              {year?.map((row, k) => (
                <div className="flex items-center gap-3" key={k}>
                  <RadioGroupItem
                    value={row.toString()}
                    id={row.toString()}
                    className={'border-primary size-4'}
                  />
                  <Label className={'dark:text-primary'} htmlFor={row?.toString()}>
                    {row?.toString()}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className={'grid grid-cols-3 gap-5'}>
            {announcement?.map((row, k) => (
              <Link
                href={`/information/announcements/${row?.slug}`}
                key={k}
                className="flex flex-col gap-2 border p-4 rounded"
              >
                <Image
                  src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                  alt={'logo'}
                  width={120}
                  height={120}
                  className={'rounded-full size-28 mx-auto'}
                />
                <p className={'font-semibold line-clamp-2'}>{row?.judul_pengumuman}</p>
                <p className={'flex items-center gap-1.5 text-sm text-gray-500'}>
                  <FaRegCalendarAlt className={'size-4 text-primary'} />
                  {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : '-'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
