import { useStateContext } from '@/contexts'
import { Card, CardContent } from '@/components/ui/card'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export const ContactDetail = () => {
  const [{ profile }] = useStateContext()

  return (
    <>
      <div className={'w-full lg:border-l border-gray-400 lg:pl-5'}>
        <p className="text-3xl text-primary font-semibold">Kontak Kami</p>
        <Card className={'p-2 mt-2 rounded-md drop-shadow-none shadow-none dark:bg-primary'}>
          <CardContent className={'p-2'}>
            <p className="dark:text-white text-primary font-semibold text-xl">Universitas</p>
            <div className="grid lg:grid-cols-[12rem_1fr] gap-2.5 mt-2">
              <p>Telepon</p>
              <p>: {profile?.telepon_universitas}</p>
              <p>Email</p>
              <p>: {profile?.email_universitas}</p>
            </div>
          </CardContent>
        </Card>

        <Card className={'p-2 mt-2 rounded-md drop-shadow-none shadow-none dark:bg-primary'}>
          <CardContent className={'p-2'}>
            <p className="dark:text-white text-primary font-semibold text-xl">Program Studi</p>
            <div className="grid lg:grid-cols-[12rem_1fr] gap-2.5 mt-2">
              <p>Telepon</p>
              <p>: {profile?.SatuanOrganisasi?.telepon}</p>
              <p>Email</p>
              <p>: {profile?.SatuanOrganisasi?.email}</p>
            </div>
          </CardContent>
        </Card>

        <Card className={'p-2 mt-2 rounded-md drop-shadow-none shadow-none dark:bg-primary'}>
          <CardContent className={'p-2'}>
            <p className="dark:text-white text-primary font-semibold text-xl">Sosial Media</p>
            <div className="grid lg:grid-cols-[12rem_1fr] gap-4 mt-2">
              <p className={'flex items-center gap-1'}>
                <FaFacebook className={'text-primary size-5'} />
                Facebook
              </p>
              <p>: {profile?.SatuanOrganisasi?.facebook}</p>
              <p className={'flex items-center gap-1'}>
                <FaInstagram className={'size-5 text-primary'} />
                Instagram
              </p>
              <p>: {profile?.SatuanOrganisasi?.instagram}</p>
              <p className={'flex items-center gap-1'}>
                <FaTwitter className={'size-5 text-primary'} />
                Twitter
              </p>
              <p>: {profile?.SatuanOrganisasi?.twitter}</p>
              <p className={'flex items-center gap-1'}>
                <FaYoutube className={'size-5 text-primary'} />
                Youtube
              </p>
              <p>: {profile?.SatuanOrganisasi?.youtube}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
