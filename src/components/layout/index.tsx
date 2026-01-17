import { ReactNode } from 'react'
import StateProvider from '@/contexts'
import { HeaderMenuList } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

interface Props {
  children: ReactNode
}

export const LandingLayout = (props: Props) => {
  const { children } = props
  return (
    <>
      <StateProvider>
        <div className={'relative lg:max-w-[1920px] mx-auto'}>
          <HeaderMenuList />
          {children}
          <Footer />
        </div>
      </StateProvider>
    </>
  )
}
