'use client'

import { useParams } from 'next/navigation'
import { UseGetPromotionDetail } from '@/app/information/promotion/hooks'
import { UseGetPromotion } from '@/app/information/hooks'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { QuilWrite } from '@/components/thema-v5/information/component/incon'
import { MdDateRange } from 'react-icons/md'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'

const DetailPromotionV10 = () => {
  const { slug } = useParams()
  const { detailPromotion: detail } = UseGetPromotionDetail((slug as string) ?? '')
  const { promotion } = UseGetPromotion({
    no_include_id: detail?.id_promosi,
    page: '1',
    limit: '10',
  })

  const temp = [detail?.gambar]
  detail?.promosi_gambar_tambahan?.map((row) => temp.push(row?.gambar))

  return (
    <>
      <div className="container-sm py-5">
        <div className="bg-blue-50 p-1.5 px-2 rounded">
          <BreadcrumbBasic
            className={'text-primary hover:bg-transparent!'}
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Informasi', link: '/information' },
              { name: 'Prmosi', link: '/information/promotion' },
              { name: detail?.judul ?? '' },
            ]}
          />
        </div>
      </div>

      <div className="container-sm lg:py-5 space-y-4 py-2.5">
        <div className="flex items-start gap-5 flex-col lg:flex-row">
          <div className="space-y-4 w-full">
            <p className="lg:text-2xl font-semibold">{detail?.judul}</p>
            <p className="flex items-center gap-1.5">
              <QuilWrite /> {detail?.penulis ?? 'TIM HUMAS'}
            </p>
            <p className="flex items-center gap-1.5">
              <MdDateRange className={'size-6 text-primary'} />
              {detail?.published_at ? format(detail.published_at, 'dd-MM-yyyy') : ''}
            </p>

            <Carousel>
              <CarouselContent>
                {temp?.map((row, k) => (
                  <CarouselItem key={k}>
                    <Image
                      src={row ?? '/noimg.png'}
                      alt={'gamabr'}
                      className={'w-full h-[250px] lg:h-[633px] object-cover'}
                      width={1000}
                      height={1000}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div
              className={'flex flex-col gap-1.5 html-class'}
              dangerouslySetInnerHTML={{ __html: detail?.isi_promosi ?? '' }}
            />

            <div className="">
              <ShareContent
                classNameShare={'bg-primary! px-2!'}
                title={detail?.judul ?? ''}
                text={'Bagikan'}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-sm py-5">
        <div className={'w-full border-b-2 border-b-primary'}>
          <p className="text-sm lg:text-xl w-fit font-semibold bg-primary px-3 py-1.5 text-white">
            Baca Juga
          </p>
        </div>

        <div className="mt-5 grid lg:grid-cols-2 gap-4">
          {promotion?.map((row, k) => (
            <Link
              href={`/information/promotion/${row?.slug}`}
              key={k}
              className={'flex items-center gap-4 gap-x-4 bg-white border p-4 shadow rounded-lg'}
            >
              <div className={'w-full min-w-[265px] h-[200px] relative overflow-hidden rounded-lg'}>
                <Image
                  src={row?.gambar}
                  alt={'gambar'}
                  fill
                  className={'w-full h-full object-cover'}
                />
              </div>
              <div className={'space-y-1.5'}>
                <p className={'line-clamp-2 font-semibold'}>{row?.judul}</p>
                <p className="text-xs font-semibold bg-primary/20 text-primary w-fit rounded-full px-3 py-1.5 flex items-center gap-1">
                  <FaRegCalendarAlt className={'size-4'} />
                  {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                </p>
                <div
                  className="flex flex-col gap-1.5 html-class line-clamp-3!"
                  dangerouslySetInnerHTML={{ __html: row?.isi_promosi }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default DetailPromotionV10
