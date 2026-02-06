import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import { TabsContactRegistration } from '@/components/thema-v2/contact/components/Tabs'
import LayoutThemaV2 from '@/components/thema-v2/component/layout'

export const ContactTheme2 = () => {
  return (
    <LayoutThemaV2>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'KONTAK'} title={'Kontak & Pendaftaran'} />
        <div className="w-full dark:bg-primary">
          <TabsContactRegistration />
        </div>
      </div>
    </LayoutThemaV2>
  )
}
