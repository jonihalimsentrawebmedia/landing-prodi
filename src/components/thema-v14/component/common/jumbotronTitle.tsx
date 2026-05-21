import { UseGetProfileBackground } from '@/app/profile/hooks'
import { useStateContext } from '@/contexts'
import { Context } from '@/contexts/types'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'

interface Props {
  context: Context
  title: string
}

export const JumbotronTitleV14 = (props: Props) => {
  const { context, title } = props
  const { profileBackground } = UseGetProfileBackground({
    context: context,
  })
  const [{ profile }] = useStateContext()

  return (
    <>
      <div className={'w-full lg:h-[360px] relative'}>
        <div className="absolute container-sm bottom-5 mb-4 left-1/2 z-20 transform -translate-x-1/2">
          <div className="bg-white p-4 border-l-4 border-yellow-500 w-fit space-y-2">
            <p className="text-yellow-500 font-semibold text-3xl">
              {profile?.SatuanOrganisasi?.kode_jenjang} - {profile?.SatuanOrganisasi?.nama}
            </p>
            <p className={'text-4xl font-semibold'}>{title}</p>
          </div>
        </div>

        <Carousel
          plugins={[
            Fade(),
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{ align: 'center', loop: true, duration: 300 }}
        >
          <CarouselContent>
            {profileBackground?.map((row, k) => (
              <CarouselItem key={k}>
                <Image
                  src={row?.gambar_url}
                  alt={'carousel'}
                  className={'w-full h-[360px] object-cover'}
                  width={1920}
                  height={720}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}
