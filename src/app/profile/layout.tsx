import { JumbotronTitle } from '@/components/common/jumbotronTitle'
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
        <div className="w-full h-full absolute z-10 hidden lg:flex">
          <div className="w-[30%] bg-primary" />
          <div className="w-[70%] bg-[#EAEAEA]" />
        </div>
        <div className="w-full lg:max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch h-full relative z-10">
          <div className="bg-primary lg:max-w-[335px] w-full">
            <SideMenuProfile />
          </div>
          <div className={'p-5 w-full h-full'}>{children}</div>
        </div>
      </div>
    </>
  )
}
