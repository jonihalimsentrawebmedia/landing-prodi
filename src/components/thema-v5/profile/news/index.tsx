'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import SideNavV5 from '@/components/thema-v5/profile/component/sideNav'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import { format } from 'date-fns'

const NewsProfileSectionV5 = () => {
  const { news, loading } = UseGetNews({
    page: '1',
    limit: '3',
  })

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
                  Berita
                </p>

                {news?.map((row, k) => (
                  <div className={'flex flex-col lg:flex-row gap-2.5 lg:gap-5'} key={k}>
                    <Image
                      src={row?.gambar}
                      alt={'gambar'}
                      width={300}
                      height={250}
                      className={'lg:w-[295px] w-full h-[210px] object-cover rounded-md'}
                    />
                    <div className={'space-y-4'}>
                      <p className="text-sm font-semibold text-footer">
                        {row?.nama_kategori_berita}
                      </p>
                      <p className={'text-2xl'}>{row?.judul}</p>
                      <p className="text-sm text-footer">
                        {row?.tanggal_berita ? format(row?.tanggal_berita, 'dd-MM-yyyy') : ''}
                      </p>
                      <div
                        className={'html-class flex flex-col gap-1.5 line-clamp-3!'}
                        dangerouslySetInnerHTML={{ __html: row?.isi_berita ?? '' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default NewsProfileSectionV5
