'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import SideNavV5 from '@/components/thema-v5/profile/component/sideNav'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { UseGetContactUsProfile } from '@/app/profile/contact-us/hooks'
import { IoLocationSharp, IoMailSharp } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const ContactUsProfileV5 = () => {
  const { contactUse, loading } = UseGetContactUsProfile()

  if (loading) return <></>

  return (
    <>
      <ProfileLayout title={'Profil'} context={'PROFIL'}>
        <div className={'bg-footer w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
          <div className="container-sm px-2!">
            <BreadcrumbBasic data={[{ name: 'Beranda', link: '/' }, { name: 'Profil' }]} />
          </div>
        </div>
        <div className="p-0 py-2 lg:p-5 bg-primary dark:bg-gray-800">
          <div className="container-sm px-2!">
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8">
              <SideNavV5 />
              <div className={'w-full space-y-4'}>
                <p className="text-2xl font-semibold text-footer underline underline-offset-8 decoration-yellow-500">
                  Hubungi Kami
                </p>

                <ul className={'mt-4 space-y-4 py-5 lg:py-0'}>
                  <li className={'flex items-center gap-3 border-l-2 border-l-yellow-500 pl-2'}>
                    <div className="p-2 bg-footer text-white rounded-md w-fit">
                      <IoLocationSharp className={'size-5'} />
                    </div>
                    <div>
                      <p className="text-sm text-footer">Alamat</p>
                      <p className={'text-sm'}>{contactUse?.alamat}</p>
                    </div>
                  </li>
                  <li className={'flex items-center gap-3 border-l-2 border-l-yellow-500 pl-2'}>
                    <div className="p-2 bg-footer text-white rounded-md w-fit">
                      <BsFillTelephoneFill className={'size-5'} />
                    </div>
                    <div>
                      <p className="text-sm text-footer">Telepon</p>
                      <p className={'text-sm'}>{contactUse?.no_telepon}</p>
                    </div>
                  </li>
                  <li className={'flex items-center gap-3 border-l-2 border-l-yellow-500 pl-2'}>
                    <div className="p-2 bg-footer text-white rounded-md w-fit">
                      <IoMailSharp className={'size-5'} />
                    </div>
                    <div>
                      <p className="text-sm text-footer">Alamat</p>
                      <p className={'text-sm'}>{contactUse?.email}</p>
                    </div>
                  </li>
                </ul>

                <ul className={'flex gap-3 mt-5'}>
                  <li className={'p-2 bg-footer text-white w-fit rounded'}>
                    <FaFacebook className={'size-6'} />
                  </li>
                  <li className={'p-2 bg-footer text-white w-fit rounded'}>
                    <FaYoutube className={'size-6'} />
                  </li>
                  <li className={'p-2 bg-footer text-white w-fit rounded'}>
                    <FaInstagram className={'size-6'} />
                  </li>
                  <li className={'p-2 bg-footer text-white w-fit rounded'}>
                    <FaTwitter className={'size-6'} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default ContactUsProfileV5
