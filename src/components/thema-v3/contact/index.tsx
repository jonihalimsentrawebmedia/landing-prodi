import { LayoutTheme3 } from '@/components/thema-v3/component/layout'
import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'
import { TabsContactRegisterTheme3 } from '@/components/thema-v3/contact/component/tabs'

export const ContactTheme3 = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'KONTAK'} title={'Kontak & Pendaftaran'} />
        <div>
          <TabsContactRegisterTheme3 />
        </div>
      </div>
    </>
  )
}
