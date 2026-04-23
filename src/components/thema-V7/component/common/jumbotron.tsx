'use client'

import { clsx } from 'clsx'
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

const JumbotronTitleV7 = (props: Props) => {
  const { context, title } = props
  const { profileBackground } = UseGetProfileBackground({
    context: context,
  })

  const [{ profile }] = useStateContext()
  return (
    <>
      <div className="w-full max-w-[1920px] mx-auto relative">
        <div
          className={clsx(
            'flex items-center justify-center',
            'absolute z-10 inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(51,51,51,0.8)_0%,rgba(51,51,51,0.4)_100%)]'
          )}
        >
          <div className="container space-y-4">
            <p className="text-center lg:text-3xl font-semibold text-yellow-500">
              {profile?.SatuanOrganisasi?.kode_jenjang} - {profile?.SatuanOrganisasi?.nama}
            </p>
            <p className={'text-center text-white font-semibold lg:text-4xl'}>{title}</p>
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

export default JumbotronTitleV7
