'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import { SearchInput } from '@/components/common/filter/search'
import { UseGetAgenda } from '@/app/homepage/hooks'
import { useRouter, useSearchParams } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { UseGetAgendaYear } from '@/app/information/agenda/hooks'
import Image from 'next/image'
import { IoLocationSharp } from 'react-icons/io5'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { AgendaSectionTheme3Skeleton } from '@/components/thema-v3/information/agenda/component/skeleton'

export const AgendaSectionTheme3 = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const tahun = searchParams.get('tahun')
  const router = useRouter()

  const { year, loading: load1 } = UseGetAgendaYear()
  const { agenda, loading: load2 } = UseGetAgenda({
    year: tahun ?? '',
    search: search ?? '',
    page: '1',
    limit: '10',
  })

  const HandleFilterYear = (e: string) => {
    const Params = new URLSearchParams()
    Params.append('tahun', e ?? '')
    if (e === '') {
      Params.delete('tahun')
    }
    router.push(`?${Params.toString()}`, { scroll: false })
  }

  const loading = load1 || load2

  if (loading) return <AgendaSectionTheme3Skeleton />

  return (
    <>
      <div className={'container py-5 flex flex-col gap-4'}>
        <Link href={'/information'} className={'flex items-center gap-1.5 text-primary'}>
          <ArrowLeft className={'size-4'} /> Kembali
        </Link>
        <TitleContent text={'Agenda Program Studi'} line_position={'bottom'} />

        <div className="mt-3">
          <SearchInput className={'w-full px-4 rounded-full'} placeholder={'Cari Agenda'} />
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
            {agenda?.map((row, k) => (
              <Link
                href={`/information/agenda/${row?.slug}`}
                className="flex flex-col border rounded"
                key={k}
              >
                <Image
                  src={row?.gambar}
                  alt={row?.judul}
                  className={'w-full h-[220px] object-cover'}
                  width={300}
                  height={220}
                />
                <div className={'p-2.5 flex flex-col gap-1.5'}>
                  <p className="font-semibold line-clamp-2">{row?.judul}</p>
                  <p className="text-gray-500 flex items-center gap-1.5">
                    <IoLocationSharp className={'size-4 text-primary'} />
                    {row?.lokasi_kegiatan}
                  </p>
                  <p className="text-gray-500 flex items-center gap-1.5">
                    <FaRegCalendarAlt className={'size-4 text-primary'} />
                    {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : ''}
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
