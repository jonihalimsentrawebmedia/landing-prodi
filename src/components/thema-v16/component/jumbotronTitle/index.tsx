import { UseGetProfileBackground } from '@/app/profile/hooks'
import { useStateContext } from '@/contexts'
import { Context } from '@/contexts/types'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'

interface Props {
  context: Context
  title: string
  data?: {
    name: string
    link?: string
  }[]
}

export const JumbotronTitleV16 = ({ context, title, data }: Props) => {
  const { profileBackground } = UseGetProfileBackground({
    context,
  })

  const [{ profile }] = useStateContext()

  return (
    <section className="relative h-[360px] overflow-hidden">
      {/* Background Slider */}
      <Carousel
        plugins={[
          Fade(),
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: 'center',
          loop: true,
        }}
        className="absolute inset-0"
      >
        <CarouselContent>
          {profileBackground?.map((row, index) => (
            <CarouselItem key={index}>
              <Image
                src={row.gambar_url}
                alt={`Background ${index}`}
                width={1920}
                height={720}
                className="h-[360px] w-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />

      <div className="container-sm relative z-20 flex h-full flex-col justify-between py-10">
        <div className="bg-white w-fit p-1.5 px-3 rounded-full">
          <BreadcrumbBasic className="text-primary! hover:bg-primary!" data={data ?? []} />
        </div>

        <div className="space-y-1">
          <h2 className="font-sora text-2xl md:text-[31px] font-normal text-[#CDA327]">
            {profile?.SatuanOrganisasi?.kode_jenjang} - {profile?.SatuanOrganisasi?.nama}
          </h2>

          <h1 className="font-sora text-4xl md:text-[39px] font-normal text-white">{title}</h1>
        </div>
      </div>
    </section>
  )
}
