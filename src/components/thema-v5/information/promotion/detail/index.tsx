'use client'

import { useParams } from 'next/navigation'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'
import { MdDateRange } from 'react-icons/md'
import { QuilWrite } from '@/components/thema-v5/information/component/incon'
import { UseGetPromotionDetail } from '@/app/information/promotion/hooks'
import { UseGetPromotion } from '@/app/information/hooks'

const DetailPromotionV5 = () => {
  const { slug } = useParams()
  const { detailPromotion: detail } = UseGetPromotionDetail((slug as string) ?? '')
  const { promotion } = UseGetPromotion({
    no_include_id: detail?.id_promosi,
    page: '1',
    limit: '4',
  })

  const temp = [detail?.gambar]
  detail?.promosi_gambar_tambahan?.map((row) => temp.push(row?.gambar))

  return (
    <>
      <div className="bg-footer">
        <div className="container py-2.5">
          <BreadcrumbBasic
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Informasi', link: '/information' },
              { name: 'Promosi', link: '/information/promotion' },
              { name: detail?.judul ?? '' },
            ]}
          />
        </div>
      </div>

      <div className="container lg:py-5 space-y-4 py-2.5">
        <div className="flex items-start gap-5 flex-col lg:flex-row">
          <div className="lg:w-3/4 space-y-4 w-full">
            <p className="lg:text-2xl font-semibold">{detail?.judul}</p>
            <p className="flex items-center gap-1.5">
              <QuilWrite /> {detail?.penulis ?? 'TIM HUMAS'}
            </p>
            <p className="flex items-center gap-1.5">
              <MdDateRange className={'size-6 text-footer'} />
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
          </div>

          <div className="w-full lg:w-1/4 space-y-4">
            <p className="text-2xl font-normal text-white bg-footer px-3 py-1.5 w-fit">Baca Juga</p>

            {promotion?.map((row, k) => (
              <Link
                href={`/information/news/${row?.slug}`}
                key={k}
                className="flex items-center gap-2"
              >
                <Image
                  src={row?.gambar}
                  alt={'gambar'}
                  width={125}
                  height={92}
                  className={'w-[125px] min-w-[125px] h-[92px] rounded-md object-cover'}
                />
                <div>
                  <p className="text-sm text-primary font-semibold">
                    {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                  </p>
                  <p className={'line-clamp-2'}>{row?.judul}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPromotionV5
