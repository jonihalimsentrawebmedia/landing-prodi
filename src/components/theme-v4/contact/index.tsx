import { JumbotronTitleTheme4 } from '@/components/theme-v4/component/common/jumbontronTitle'
import { TabsContactRegisterTheme4 } from '@/components/theme-v4/contact/component/tabs'

export const ContactTheme4 = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitleTheme4 context={'KONTAK'} title={'Kontak & Pendaftaran'} />
        <div>
          <TabsContactRegisterTheme4 />
        </div>
      </div>
    </>
  )
}
