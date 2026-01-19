import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { IoMdMenu } from 'react-icons/io'
import { useState } from 'react'
import Image from 'next/image'
import NOIMG from '../../../../public/img/noimg.png'
import { NavMenuList } from '@/components/layout/header/menuList'
import Link from 'next/link'
import { useStateContext } from '@/contexts'

export const SheetMenu = () => {
  const [open, setOpen] = useState(false)
  const [{ profile }] = useStateContext()
  const detail = profile?.SatuanOrganisasi

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className={'text-white block lg:hidden'}>
          <IoMdMenu />
        </SheetTrigger>
        <SheetContent
          className={
            'w-full bg-primary text-white [&>button>svg]:text-white [&>button>svg]:stroke-white'
          }
        >
          <SheetHeader>
            <SheetTitle>
              <div className="flex items-center gap-2">
                <Image
                  src={detail?.logo ?? NOIMG}
                  alt={'logo'}
                  width={100}
                  height={100}
                  loading={'eager'}
                  priority={true}
                  className={'object-cover lg:w-14 lg:h-14 size-10 rounded-full'}
                />
                <div>
                  <p className="lg:text-2xl font-semibold text-white text-sm">
                    {detail?.singkatan_universitas}
                  </p>
                  <p className={'text-white text-xs'}>
                    {detail?.kode_jenjang}-{detail?.nama}
                  </p>
                </div>
              </div>
            </SheetTitle>
            <SheetDescription></SheetDescription>
            <ul className={'text-white flex flex-col gap-4 pl-2'}>
              {NavMenuList?.map((item) => (
                <Link href={item?.link} key={item.id} onClick={() => setOpen(false)}>
                  <li>{item?.name}</li>
                </Link>
              ))}
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}
