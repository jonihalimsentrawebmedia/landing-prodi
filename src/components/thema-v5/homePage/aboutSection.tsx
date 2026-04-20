'use client'

import { UseGetAboutProdi } from '@/app/homepage/hooks'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const AboutSectionProfileV5 = () => {
  const { aboutProdi } = UseGetAboutProdi()

  return (
    <>
      <div className="container-sm">
        <div className="flex flex-col gap-4 lg:flex-row items-start py-8 gap-x-5 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(39,131,116,0.32)_0%,rgba(39,131,116,0)_100%)]">
          <Carousel className={'lg:w-[480px] lg:min-w-[480px]'} plugins={[Autoplay({ delay: 5000 })]}>
            <CarouselContent>
              {aboutProdi?.gambar?.map((row, k) => (
                <CarouselItem key={k}>
                  <Image
                    src={row?.url}
                    className={'object-cover w-full lg:w-[480px] h-[250px] lg:h-[360px] rounded lg:rounded-xl'}
                    alt={'image'}
                    width={480}
                    height={360}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className={'space-y-5'}>
            <p className="text-2xl font-semibold underline underline-offset-8 decoration-yellow-500 text-footer">
              Tentang Program Studi
            </p>
            <div
              className="flex flex-col gap-4 html-class"
              dangerouslySetInnerHTML={{ __html: aboutProdi?.isi_konten ?? '' }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSectionProfileV5
