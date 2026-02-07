'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { useRouter, useSearchParams } from 'next/navigation'
import { SearchInput } from '@/components/common/filter/search'
import { UseGetNewsCategory } from '@/app/information/news/hooks'
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { CardNewsTheme3 } from '@/components/thema-v3/component/common/CardNews'
import { NewsSectionDataTheme3Skeleton } from '@/components/thema-v3/information/news/component/skeleton'

export const NewsSectionDataTheme3 = () => {
  const { news: TopNews, loading: load1 } = UseGetNews({
    page: '1',
    limit: '4',
  })

  const router = useRouter()
  const { newsCategory, loading: load3 } = UseGetNewsCategory()

  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const category = searchParams.get('category')
  const newNews = TopNews[0]
  const MoreNewNews = TopNews.slice(1, 4)
  const no_include_id = TopNews.map((row) => row.id_berita).join('|')

  const { news, loading: load2 } = UseGetNews({
    page: '1',
    limit: '10',
    no_include_id: no_include_id,
    search: search ?? '',
    category: category ?? '',
  })

  const HandleFilterCategory = (slug: string) => {
    const Params = new URLSearchParams()
    Params.append('category', slug)
    if (slug === '') {
      Params.delete('category')
    }
    router.push(`?${Params.toString()}`, { scroll: false })
  }

  const loading = load1 || load2 || load3

  if (loading) return <NewsSectionDataTheme3Skeleton />

  return (
    <>
      <div className={'container py-5 flex flex-col gap-4'}>
        <Link href={'/information'} className={'flex items-center gap-1.5 text-primary'}>
          <ArrowLeft className={'size-4'} /> Kembali
        </Link>

        <TitleContent text={'Berita Program Studi'} line_position={'bottom'} />

        <p>Berita Terbaru</p>

        <div className="flex items-start gap-x-5">
          <div className="w-1/2 flex flex-col gap-2">
            <Image
              src={newNews?.gambar ?? '/img/noimg.png'}
              alt={'gambar'}
              className={'w-full h-[465px] object-cover'}
              width={630}
              height={465}
            />
            <Link
              href={`/information/news/${newNews?.slug}`}
              className="text-2xl font-semibold line-clamp-2"
            >
              {newNews?.judul}
            </Link>
            <p className="text-sm flex items-center gap-1.5 text-primary">
              <FaRegCalendarAlt />
              {newNews?.published_at ? format(newNews?.published_at, 'dd MMM yyyy') : ''}
            </p>

            <div
              className="html-class line-clamp-3"
              dangerouslySetInnerHTML={{ __html: newNews?.isi_berita ?? '' }}
            />
          </div>

          <div className="w-1/2 flex flex-col gap-5">
            {MoreNewNews?.map((row, k) => (
              <div key={k} className="flex items-center gap-2">
                <Image
                  src={row?.gambar ?? '/img/noimg.png'}
                  alt={'gambar'}
                  className={'w-[214px] h-[194px] object-cover'}
                  width={630}
                  height={465}
                />
                <div className={'flex flex-col gap-2'}>
                  <Link
                    href={`/information/news/${row?.slug}`}
                    className="text-2xl font-semibold line-clamp-2"
                  >
                    {row?.judul}
                  </Link>
                  <p className="text-sm flex items-center gap-1.5 text-primary">
                    <FaRegCalendarAlt />
                    {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : ''}
                  </p>

                  <div
                    className="html-class line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: row?.isi_berita ?? '' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-5">
        <SearchInput className={'w-full rounded-full'} placeholder={'Cari Berita'} />

        <div className="flex items-start gap-5 mt-5">
          <div className="w-full lg:max-w-[335px] h-fit border bg-primary-foreground border-primary">
            <p className="p-2 pb-0 text-primary font-semibold">Kategori Berita</p>
            <Separator className={'mt-2 bg-primary'} />

            <RadioGroup
              value={category ?? ''}
              className={'flex flex-col gap-2 py-2 pl-2'}
              onValueChange={(e) => {
                HandleFilterCategory(e)
              }}
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value={''} id={'all'} className={'border-primary size-4'} />
                <Label htmlFor={'all'}>Semua</Label>
              </div>
              {newsCategory?.map((row, k) => (
                <div className="flex items-center gap-3" key={k}>
                  <RadioGroupItem
                    value={row?.slug}
                    id={row?.id_kategori}
                    className={'border-primary size-4'}
                  />
                  <Label htmlFor={row?.id_kategori}>{row?.nama_kategori}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className={'grid grid-cols-3 gap-5'}>
            {news?.map((row, k) => (
              <Link href={`/information/news/${row?.slug}`} key={k}>
                <CardNewsTheme3 key={k} data={row} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
