import {
  IconEmail,
  IconFacebook,
  IconInstagram,
  IconPhone,
  IconX,
  IconYoutube,
} from '@/components/common/icons'
import { useStateContext } from '@/contexts'

export const ContactDetailTheme4 = () => {
  const [{ profile }] = useStateContext()

  return (
    <>
      <div className="flex items-start gap-x-5">
        <div className={'border-gray-400 w-1/2'}>
          <p className="text-primary text-xl font-semibold">Kontak Universitas</p>
          <div className="flex flex-col lg:grid grid-cols-2 gap-5 mt-2.5">
            <div className={'p-2.5 bg-white rounded-lg shadow flex gap-2.5 items-center'}>
              <div className="rounded-full p-2.5 bg-[#F5FAFF] w-fit">
                <IconPhone />
              </div>
              <div className={'flex flex-col gap-1'}>
                <p className="text-xs text-gray-500">Telepon</p>
                <p className={'font-semibold dark:text-primary'}>{profile?.telepon_universitas}</p>
              </div>
            </div>
            <div className={'p-2.5 bg-white rounded-lg shadow flex gap-2.5 items-center'}>
              <div className="rounded-full p-2.5 bg-[#F5FAFF] w-fit">
                <IconEmail />
              </div>
              <div className={'flex flex-col gap-1'}>
                <p className="text-xs text-gray-500">Email</p>
                <p className={'font-semibold dark:text-primary'}>{profile?.email_universitas}</p>
              </div>
            </div>
          </div>

          <p className="text-primary text-xl font-semibold mt-5">Kontak Program Studi</p>
          <div className="flex flex-col lg:grid grid-cols-2 gap-5 mt-2.5">
            <div className={'p-2.5 bg-white rounded-lg shadow flex gap-2.5 items-center'}>
              <div className="rounded-full p-2.5 bg-[#F5FAFF] w-fit">
                <IconPhone />
              </div>
              <div className={'flex flex-col gap-1'}>
                <p className="text-xs text-gray-500">Telepon</p>
                <p className={'font-semibold dark:text-primary'}>
                  {profile?.SatuanOrganisasi?.telepon}
                </p>
              </div>
            </div>
            <div className={'p-2.5 bg-white rounded-lg shadow flex gap-2.5 items-center'}>
              <div className="rounded-full p-2.5 bg-[#F5FAFF] w-fit">
                <IconEmail />
              </div>
              <div className={'flex flex-col gap-1'}>
                <p className="text-xs text-gray-500">Email</p>
                <p className={'font-semibold dark:text-primary'}>
                  {profile?.SatuanOrganisasi?.email}
                </p>
              </div>
            </div>
          </div>

          <div className={'mt-5'}>
            <p className="text-primary lg:text-xl font-semibold">Sosial Media</p>
            <div className={'p-4 bg-white rounded-lg shadow flex gap-5 items-center mt-2.5 w-full'}>
              <IconInstagram />
              <IconFacebook />
              <IconX />
              <IconYoutube />
            </div>
          </div>
        </div>
        <div className={'w-1/2'}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.3498747879524!2d99.54704966959711!3d0.8301932409118385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302bbf993a619639%3A0x340e6f2a0b3a8ee9!2sSTAIN%20Madina!5e0!3m2!1sen!2sid!4v1761900831568!5m2!1sen!2sid"
            style={{ border: '0' }}
            allowFullScreen={true}
            loading={'lazy'}
            className={'w-full h-[365px] rounded-lg'}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  )
}
