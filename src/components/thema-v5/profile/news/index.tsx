'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import SideNavV5 from '@/components/thema-v5/profile/component/sideNav'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { UseGetNews } from '@/app/homepage/hooks'
import Image from 'next/image'
import { format } from 'date-fns'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaCircleChevronRight } from 'react-icons/fa6'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const NewsProfileSectionV5 = () => {
  const { news, loading } = UseGetNews({
    page: '1',
    limit: '4',
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

                <div className="grid grid-cols-2 gap-5">
                  {news?.map((row, k) => (
                    <Link key={k} href={`/information/news/${row?.slug}`}>
                      <div className={'shadow rounded-lg border h-full group'}>
                        <div className="w-full h-[310px] overflow-hidden rounded-t-lg">
                          <Image
                            src={row?.gambar}
                            alt={row?.judul}
                            className={
                              'w-full h-[310px] object-cover rounded-t-lg group-hover:scale-110 transition-all duration-300'
                            }
                            width={500}
                            height={310}
                          />
                        </div>
                        <div className={'p-4 space-y-2.5 relative'}>
                          <div className="flex items-center gap-x-2">
                            <p className="text-sm py-1.5 px-3 rounded-full font-semibold bg-footer/10 text-footer flex items-center gap-1">
                              <FaRegCalendarAlt />
                              {row?.tanggal_berita
                                ? format(row?.tanggal_berita, 'dd-MM- yyyy')
                                : ''}
                            </p>
                            <p className="text-sm py-1.5 px-3 rounded-full font-semibold bg-footer/10 text-footer flex items-center gap-1">
                              {row?.nama_kategori_berita}
                            </p>
                          </div>
                          <p className="font-semibold group-hover:text-footer line-clamp-2">
                            {row?.judul}
                          </p>
                          <button className={'text-footer flex items-center gap-1 text-sm'}>
                            <FaCircleChevronRight className={'size-4'} />
                            Baca Lebih Lanjut
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className={'flex justify-end'}>
                  <Link href={'/information/news'} className={'flex items-center gap-1'}>
                    Lihat Berita Lainnya
                    <ArrowRight className={'size-4'} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default NewsProfileSectionV5
