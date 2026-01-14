import {
  IconEmail,
  IconFacebook,
  IconInstagram,
  IconPhone,
  IconX,
  IconYoutube,
} from '@/components/common/icons'
import { useStateContext } from '@/contexts'

export const ContactDetail = () => {
  const [{ profile }] = useStateContext()

  return (
    <>
      <div className={'w-full border-l border-gray-400 pl-6'}>
        <p className="text-primary text-xl font-semibold">Kontak Universitas</p>
        <div className="grid grid-cols-2 gap-5 mt-2.5">
          <div className={'p-2.5 bg-white rounded-lg shadow flex gap-2.5 items-center'}>
            <div className="rounded-full p-2.5 bg-[#F5FAFF] w-fit">
              <IconPhone />
            </div>
            <div className={'flex flex-col gap-1'}>
              <p className="text-xs text-gray-500">Telepon</p>
              <p className={'font-semibold'}>{profile?.SatuanOrganisasi?.telepon}</p>
            </div>
          </div>
          <div className={'p-2.5 bg-white rounded-lg shadow flex gap-2.5 items-center'}>
            <div className="rounded-full p-2.5 bg-[#F5FAFF] w-fit">
              <IconEmail />
            </div>
            <div className={'flex flex-col gap-1'}>
              <p className="text-xs text-gray-500">Email</p>
              <p className={'font-semibold'}>{profile?.SatuanOrganisasi?.email}</p>
            </div>
          </div>
        </div>

        <p className="text-primary text-xl font-semibold mt-5">Kontak Program Studi</p>
        <div className="grid grid-cols-2 gap-5 mt-2.5">
          <div className={'p-2.5 bg-white rounded-lg shadow flex gap-2.5 items-center'}>
            <div className="rounded-full p-2.5 bg-[#F5FAFF] w-fit">
              <IconPhone />
            </div>
            <div className={'flex flex-col gap-1'}>
              <p className="text-xs text-gray-500">Telepon</p>
              <p className={'font-semibold'}>{profile?.SatuanOrganisasi?.telepon}</p>
            </div>
          </div>
          <div className={'p-2.5 bg-white rounded-lg shadow flex gap-2.5 items-center'}>
            <div className="rounded-full p-2.5 bg-[#F5FAFF] w-fit">
              <IconEmail />
            </div>
            <div className={'flex flex-col gap-1'}>
              <p className="text-xs text-gray-500">Email</p>
              <p className={'font-semibold'}>{profile?.SatuanOrganisasi?.email}</p>
            </div>
          </div>
        </div>

        <div className={'mt-5'}>
          <p className="text-primary text-xl font-semibold">Sosial Media</p>
          <div className={'p-4 bg-white rounded-lg shadow flex gap-5 items-center mt-2.5'}>
            <IconInstagram />
            <IconFacebook />
            <IconX />
            <IconYoutube />
          </div>
        </div>
      </div>
    </>
  )
}
