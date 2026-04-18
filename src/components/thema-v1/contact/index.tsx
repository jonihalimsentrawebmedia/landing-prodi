import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { TabsContactRegistration } from '@/app/contact/components/Tabs'

export const ContactTheme1 = () => {
  return (
    <div className={'w-full max-w-[1920px] mx-auto'}>
      <JumbotronTitle context={'KONTAK'} title={'Kontak & Pendaftaran'} />

      <div className="bg-primary dark:bg-gray-900 w-full">
        <TabsContactRegistration />
      </div>
    </div>
  )
}
