'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { UseGetProfileBackground } from '@/app/profile/hooks'
import { useStateContext } from '@/contexts'
import { Context } from '@/contexts/types'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

interface Props {
  context: Context
  title: string
}

const JumbotronTitleV11 = (props: Props) => {
  const { context, title } = props
  const { profileBackground } = UseGetProfileBackground({
    context: context,
  })

  const [{ profile }] = useStateContext()
  return (
    <>
      <div className="w-full max-w-[1920px] mx-auto relative">
        <div className="flex items-center justify-center absolute z-10 inset-0 bg-gradient-to-l from-transparent to-primary">
          <div className="container-sm flex flex-col  gap-2 justify-end items-start h-full pb-8">
            <div className="h-fit w-fit border-l-4 border-b-4 border-yellow-500 p-4">
              <p className="text-start lg:text-3xl font-semibold text-yellow-500">
                {profile?.SatuanOrganisasi?.kode_jenjang} - {profile?.SatuanOrganisasi?.nama}
              </p>
              <p className={'text-start text-white font-semibold lg:text-4xl'}>{title}</p>
            </div>
          </div>
        </div>
        <Carousel
          opts={{
            duration: 200,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
            Fade(),
          ]}
        >
          <CarouselContent>
            {profileBackground?.map((row, k) => (
              <CarouselItem key={k}>
                <Image
                  src={row?.gambar_url}
                  alt={'gambar'}
                  className={'w-full h-[200px] lg:h-[360px] object-cover'}
                  width={1920}
                  height={360}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}

export default JumbotronTitleV11
