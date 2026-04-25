'use client'

import { useParams } from 'next/navigation'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'
import { MdDateRange } from 'react-icons/md'
import { QuilWrite } from '@/components/thema-v5/information/component/incon'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'
import { UseGetPromotionDetail } from '@/app/information/promotion/hooks'
import { UseGetPromotion } from '@/app/information/hooks'

const DetailPromotionPageV11 = () => {
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
      <div className="bg-primary/10">
        <div className="container-sm py-2.5">
          <BreadcrumbBasic
            className={'text-primary hover:bg-transparent!'}
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Informasi', link: '/information' },
              { name: 'Promosi', link: '/information/promotion' },
              { name: detail?.judul ?? '' },
            ]}
          />
        </div>
      </div>

      <div className="container-sm py-5 space-y-4">
        <div className="flex flex-col lg:flex-row items-start gap-5">
          <div className="w-full lg:w-2/3 space-y-4">
            <p className="lg:text-2xl font-semibold">{detail?.judul}</p>
            <div className="flex items-center gap-2.5">
              <p className="flex items-center gap-1.5">
                <QuilWrite className={'stroke-primary'} /> {detail?.penulis ?? 'TIM HUMAS'}
              </p>
              <p className="flex items-center gap-1.5">
                <MdDateRange className={'size-6 text-primary'} />
                {detail?.published_at ? format(detail.published_at, 'dd-MM-yyyy') : ''}
              </p>
            </div>

            <Carousel>
              <CarouselContent>
                {temp?.map((row, k) => (
                  <CarouselItem key={k}>
                    <Image
                      src={row ?? '/noimg.png'}
                      alt={'gamabr'}
                      className={'w-full h-[320px] lg:h-[633px] object-cover'}
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

          <div className="lg:w-1/3 space-y-4 w-full">
            <p className="text-2xl font-normal text-white bg-primary px-3 py-1.5 w-fit">
              Berita Terbaru
            </p>

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
                <div className={'space-y-2.5'}>
                  <p className={'line-clamp-2'}>{row?.judul}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs py-1.5 px-3 rounded-full font-semibold bg-primary/10 text-primary flex items-center gap-1">
                      <FaRegCalendarAlt />
                      {row?.published_at ? format(row?.published_at, 'dd-MM- yyyy') : ''}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPromotionPageV11
