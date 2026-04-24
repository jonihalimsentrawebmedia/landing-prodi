'use client'

import { useParams } from 'next/navigation'
import { useStateContext } from '@/contexts'
import { UseGetAnnouncementDetail } from '@/app/information/announcements/hooks'
import { UseGetAnnouncement } from '@/app/homepage/hooks'
import { useEffect, useState } from 'react'
import { QuilWrite } from '@/components/thema-v5/information/component/incon'
import { MdDateRange } from 'react-icons/md'
import { format } from 'date-fns'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'
import { BasicSelect } from '@/components/common/select/basic'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'

const AnnouncementDetailPageV9 = () => {
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
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDocument(detail?.dokumens[0].url_dokumen ?? '')
    }
  }, [detail])

  return (
    <>
      <div className="bg-primary">
        <div className="container-sm py-5">
          <div className="p-1.5 px-2 rounded">
            <BreadcrumbBasic
              className={'text-white hover:bg-transparent!'}
              data={[
                { name: 'Beranda', link: '/' },
                { name: 'Informasi', link: '/information' },
                { name: 'Pengumuman', link: '/information/announcements' },
                { name: detail?.judul_pengumuman ?? '' },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="container-sm py-4 lg:py-8">
        <div className="flex flex-col lg:flex-row items-start gap-5">
          <div className="flex flex-col gap-4">
            <p className={'lg:text-2xl font-semibold dark:text-primary'}>
              {detail?.judul_pengumuman}
            </p>
            <p className="flex items-center gap-1.5">
              <QuilWrite className={'stroke-primary'} /> {detail?.penulis ?? 'TIM HUMAS'}
            </p>
            <p className="flex items-center gap-1.5">
              <MdDateRange className={'size-6 text-primary'} />
              {detail?.published_at ? format(detail.published_at, 'dd-MM-yyyy') : ''}
            </p>
            <div
              className="html-class flex flex-col gap-5 text-justify"
              dangerouslySetInnerHTML={{ __html: detail?.isi_pengumuman ?? '' }}
            />
            <div className="">
              <ShareContent
                classNameShare={'bg-primary! px-2!'}
                title={detail?.judul_pengumuman ?? ''}
                text={'bagikan'}
              />
            </div>
          </div>
          <div className="w-full lg:min-w-[500px]">
            <BasicSelect
              innerClassname={'text-primary'}
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
              <iframe src={document} className={'my-5 w-full h-[500px] lg:h-[800px] border'} />
            )}
          </div>
        </div>

        <div className="space-y-5 pt-5">
          <div className={'w-full border-b-2 border-b-primary'}>
            <p className="text-sm lg:text-xl w-fit font-semibold bg-primary px-3 py-1.5 text-white">
              Pengumuman Terbaru
            </p>
          </div>
          <div className="grid lg:grid-cols-4 gap-6 mt-5">
            {announcement?.map((row, k) => (
              <Link
                href={`/information/announcements/${row?.slug}`}
                className="w-full space-y-1.5 p-5 bg-white rounded-2xl border"
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

                <p className="line-clamp-2 mt-4 text-xl font-semibold">{row?.judul_pengumuman}</p>
                <p
                  className={
                    'text-xs flex items-center gap-1.5 font-semibold bg-primary/10 w-fit rounded-full px-3 py-1.5 text-primary'
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

export default AnnouncementDetailPageV9
