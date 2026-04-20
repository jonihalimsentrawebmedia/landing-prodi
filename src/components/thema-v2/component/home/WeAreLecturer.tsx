'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { TitleUnderline } from '@/components/thema-v2/component/common/titleUnderLine'
import { UseGetLecturer } from '@/app/homepage/hooks'

export const WeAreLecturer = () => {
  const { lecturer } = UseGetLecturer({
    page: '1',
    limit: '10',
  })
  return (
    <>
      <div className={'bg-white dark:bg-primary/50 w-full max-w-[1920px] mx-auto py-10'}>
        <TitleUnderline text={'Dosen Kami'} className={'text-center'} />
        {lecturer?.length === 0 && (
          <Carousel className={'mt-5'} opts={{ loop: true, align: 'center' }}>
            <CarouselContent>
              {lecturer?.map((row, index) => (
                <CarouselItem key={index} className={'lg:basis-1/6'}>
                  <div
                    className={`
                    flex flex-col gap-2 items-center justify-center w-full h-full p-5 bg-primary-foreground border rounded-md dark:bg-primary
                  `}
                  >
                    <Image
                      src={row?.gambar_url ?? '/img/noimg.png'}
                      alt={'dump'}
                      width={120}
                      height={120}
                      className={'object-cover size-[120px] rounded-full'}
                    />
                    <p className={'font-semibold dark:text-white'}>{row?.nama}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div
              className={
                'absolute bg-linear-to-r from-transparent to-primary w-[40px] lg:w-[80px] h-full top-0 right-0 flex justify-center'
              }
            >
              <CarouselNext
                className={'right-1 border-none hover:text-white text-white !bg-transparent'}
              />
            </div>
            <div
              className={
                'absolute bg-linear-to-l from-transparent to-primary w-[40px] lg:w-[80px] h-full top-0 left-0 flex justify-center'
              }
            >
              <CarouselPrevious
                className={'left-1 border-none hover:text-white text-white !bg-transparent'}
              />
            </div>
          </Carousel>
        )}
      </div>
    </>
  )
}
