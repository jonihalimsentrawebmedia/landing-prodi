import { IoMdHome } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'

import Link from 'next/link'
import { IProfileResponse } from '@/contexts/types'
import { SheetMenu } from '@/components/thema-v5/component/layout/header/sheetMenu'

interface props {
  profile?: IProfileResponse | null
}

export const NavigationFooter = (props: props) => {
  const { profile } = props

  return (
    <>
      <div className="w-full my-2 block lg:hidden">
        <div className="w-full mx-auto bg-black p-2 flex items-center gap-6 justify-between px-8">
          <Link href={'/'} className={'flex flex-col items-center justify-center'}>
            <IoMdHome className={'size-6 text-white'} />
            <p className={'text-xs text-white'}>Beranda</p>
          </Link>
          <SheetMenu profile={profile} />
          <Link
            target={'_blank'}
            href={'#'}
            className={'flex flex-col items-center justify-center'}
          >
            <IoLocationSharp className={'size-6 text-white'} />
            <p className={'text-xs text-white'}>Lokasi</p>
          </Link>
        </div>
      </div>
    </>
  )
}
