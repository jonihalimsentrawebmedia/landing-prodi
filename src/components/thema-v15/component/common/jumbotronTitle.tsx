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

export const JumbotronTitleV15 = (props: Props) => {
  const { context, title } = props
  const { profileBackground } = UseGetProfileBackground({ context })
  const [{ profile }] = useStateContext()

  return (
    <div className="w-full lg:h-[360px] relative overflow-hidden">
      <Carousel
        plugins={[
          Fade(),
          Autoplay({ delay: 5000, stopOnInteraction: false }),
        ]}
        opts={{ align: 'center', loop: true, duration: 300 }}
      >
        <CarouselContent>
          {profileBackground?.map((row, k) => (
            <CarouselItem key={k}>
              <Image
                src={row?.gambar_url}
                alt="Hero"
                className="w-full h-[360px] object-cover"
                width={1920}
                height={720}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 bg-black/20 z-10" />

      <div className="absolute bottom-0 z-20 w-full">
        <div className="container-sm flex items-center lg:h-[360px]">
          <div className="bg-white p-5 w-fit rounded-t-2xl shadow-2xl space-y-1 border-l-4 border-[#CDA327]">
            <p className="text-[#CDA327] font-semibold lg:text-xl">
              {profile?.SatuanOrganisasi?.kode_jenjang} - {profile?.SatuanOrganisasi?.nama}
            </p>
            <p className="text-lg lg:text-3xl font-semibold text-[#444444]">{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
