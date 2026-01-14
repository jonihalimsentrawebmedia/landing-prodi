import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { TabsContactRegistration } from '@/app/contact/components/Tabs'

const ContactProdiPage = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <JumbotronTitle context={'KONTAK'} title={'Kontak & Pendaftaran'} />

        <div className="bg-primary w-full">
          <TabsContactRegistration />
        </div>
      </div>
    </>
  )
}

export default ContactProdiPage
