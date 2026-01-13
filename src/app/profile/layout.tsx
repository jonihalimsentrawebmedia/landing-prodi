import { JumbotronTitle } from '@/components/comon/jumbotronTitle'
import { SideMenuProfile } from '@/app/profile/components/sideMenu'
import { ReactNode } from 'react'

export default function ProfileLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'PROFIL'} title={'Profile'} />
      </div>
      <div className=" relative z-10 h-full">
        <div className="w-full h-full flex absolute z-10">
          <div className="w-[30%] bg-primary" />
          <div className="w-[70%] bg-[#EAEAEA]" />
        </div>
        <div className="container flex items-stretch h-full relative z-10">
          <div className="bg-primary max-w-[335px] w-full">
            <SideMenuProfile />
          </div>
          <div className={'p-5 w-full h-full'}>{children}</div>
        </div>
      </div>
    </>
  )
}
