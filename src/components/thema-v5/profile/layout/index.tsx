'use client'

import { UseGetProfileBackground } from '@/app/profile/hooks'
import { Context } from '@/contexts/types'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { useStateContext } from '@/contexts'

interface Props {
  title: string
  context: Context
  children: ReactNode
}

const ProfileLayout = (props: Props) => {
  const { context, children, title } = props
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
            'absolute z-10 inset-0 bg-gradient-to-b from-white/50 to-white'
          )}
        >
          <div className="container-sm relative z-10 flex items-start justify-center fit flex-col gap-4 lg:border-l-4 border-l-yellow-500">
            <div className="lg:pl-4 space-y-2">
              <p className={'lg:text-3xl font-semibold text-yellow-500'}>
                {profile?.SatuanOrganisasi?.kode_jenjang}-{profile?.SatuanOrganisasi?.nama}
              </p>
              <p className={'font-semibold text-footer lg:text-4xl'}>{title}</p>
            </div>
          </div>
        </div>
        <Carousel>
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

      {children}
    </>
  )
}

export default ProfileLayout
