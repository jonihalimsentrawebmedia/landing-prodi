'use client'

import { useParams } from 'next/navigation'
import { useStateContext } from '@/contexts'
import { UseGetAnnouncementDetail } from '@/app/information/announcements/hooks'
import { UseGetAnnouncement } from '@/app/homepage/hooks'
import React, { useEffect, useState } from 'react'
import { QuilWrite } from '@/components/thema-v5/information/component/incon'
import { MdDateRange } from 'react-icons/md'
import { format } from 'date-fns'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'
import { BasicSelect } from '@/components/common/select/basic'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'

const AnnouncementDetailPageV15 = () => {
  const { slug } = useParams()
  const [{ profile }] = useStateContext()

  const { announcementDetail: detail } = UseGetAnnouncementDetail((slug as string) ?? '')
  const { announcement } = UseGetAnnouncement({
    page: '1',
    limit: '4',
    no_include_id: detail?.id_pengumuman,
  })

  const [document, setDocument] = useState('')

  useEffect(() => {
    if (detail) {
      setDocument(detail?.dokumens[0].url_dokumen ?? '')
    }
  }, [detail])

  return (
    <>
      <div className={'bg-primary w-full'}>
        <div className="container-sm p-2">
          <BreadcrumbBasic
            className={'text-white! hover:bg-[#1F7A63]!'}
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Profil', link: '/information' },
              { name: 'Pengumuman', link: '/information/announcements' },
              { name: detail?.judul_pengumuman ?? '' },
            ]}
          />
        </div>
      </div>
      <div className="container-sm lg:max-w-[1280px] mx-auto py-4 lg:py-8">
        <div className="flex flex-col lg:flex-row items-start gap-5">
          <div className="flex flex-col gap-4">
            <p className={'lg:text-2xl font-semibold text-[#444444]'}>
              {detail?.judul_pengumuman}
            </p>
            <p className="flex items-center gap-1.5 text-[#444444]">
              <QuilWrite color={'white'} /> {detail?.penulis ?? 'TIM HUMAS'}
            </p>
            <p className="flex items-center gap-1.5 text-[#444444]">
              <MdDateRange className={'size-6 text-[#1F7A63]'} />
              {detail?.published_at ? format(detail.published_at, 'dd-MM-yyyy') : ''}
            </p>
            <div
              className="html-class flex flex-col gap-5 text-justify"
              dangerouslySetInnerHTML={{ __html: detail?.isi_pengumuman ?? '' }}
            />
            <div className="">
              <ShareContent
                classNameShare={'bg-[#1F7A63]! px-2!'}
                title={detail?.judul_pengumuman ?? ''}
                text={'bagikan'}
              />
            </div>
          </div>
          <div className="w-full lg:min-w-[500px]">
            <BasicSelect
              innerClassname={'text-[#1F7A63]'}
              data={
                detail?.dokumens?.map((row, k) => ({
                  label: 'dokumen ' + (k + 1),
                  value: row?.url_dokumen,
                })) ?? []
              }
              onChange={(e) => {
                setDocument(e)
              }}
              value={document}
            />

            {document !== '' && (
              <iframe src={document} className={'my-5 w-full h-[500px] lg:h-[800px] border border-[#C8C8C8]'} />
            )}
          </div>
        </div>

        <div className="space-y-5 pt-5">
          <div className="flex items-center gap-4">
            <h2 className="text-[#1F7A63] text-[24px] font-semibold shrink-0">Pengumuman Terbaru</h2>
            <div className="h-px bg-[#C8C8C8] flex-1" />
          </div>
          <div className="grid lg:grid-cols-4 gap-6 mt-5">
            {announcement?.map((row, k) => (
              <Link
                href={`/information/announcements/${row?.slug}`}
                className="w-full space-y-1.5 p-5 bg-white rounded-2xl border border-[#C8C8C8] shadow-sm"
                key={k}
              >
                <div className="relative mx-auto w-[80px] size-[80px] lg:w-[180px] lg:size-[180px] rounded-full overflow-hidden">
                  <Image
                    src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                    alt={'image'}
                    fill
                    className={'object-cover'}
                  />
                </div>

                <p className="line-clamp-2 mt-4 text-xl font-semibold text-[#444444]">{row?.judul_pengumuman}</p>
                <p
                  className={
                    'text-xs flex items-center gap-1.5 font-semibold bg-[#E9F5F2] text-[#1F7A63] w-fit rounded-full px-3 py-1.5'
                  }
                >
                  <FaRegCalendarAlt className={'size-4'} />
                  {row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AnnouncementDetailPageV15
