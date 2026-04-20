'use client'

import { useParams } from 'next/navigation'
import { useStateContext } from '@/contexts'
import { UseGetAnnouncement } from '@/app/homepage/hooks'
import { UseGetAnnouncementDetail } from '@/app/information/announcements/hooks'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { useEffect, useState } from 'react'
import { BasicSelect } from '@/components/common/select/basic'
import { QuilWrite } from '@/components/thema-v5/information/component/incon'
import { MdDateRange } from 'react-icons/md'
import { format } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'

const DetailAnnouncementPageV5 = () => {
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
      <div className="bg-footer">
        <div className="container-sm py-2.5">
          <BreadcrumbBasic
            data={[
              { name: 'Beranda', link: '/' },
              { name: 'Informasi', link: '/information' },
              { name: 'Pengumuman', link: '/information/announcements' },
              { name: detail?.judul_pengumuman ?? '' },
            ]}
          />
        </div>
      </div>

      <div className="container-sm py-4 lg:py-8">
        <div className="flex flex-col lg:flex-row items-start gap-x-5">
          <div className="flex flex-col gap-y-4">
            <p className={'text-2xl font-semibold dark:text-primary'}>{detail?.judul_pengumuman}</p>
            <p className="flex items-center gap-1.5">
              <QuilWrite /> {detail?.penulis ?? 'TIM HUMAS'}
            </p>
            <p className="flex items-center gap-1.5">
              <MdDateRange className={'size-6 text-footer'} />
              {detail?.published_at ? format(detail.published_at, 'dd-MM-yyyy') : ''}
            </p>
            <div
              className="html-class flex flex-col gap-5 text-justify"
              dangerouslySetInnerHTML={{ __html: detail?.isi_pengumuman ?? '' }}
            />
          </div>
          <div className="w-full lg:min-w-[480px]">
            <BasicSelect
              innerClassname={'text-footer'}
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
              <iframe src={document} className={'my-5 w-full h-[500px] lg:h-[800px]'} />
            )}
          </div>
        </div>

        <div className="space-y-5 pt-5">
          <p className="text-2xl font-semibold text-white bg-footer px-3 py-1.5 w-fit">
            Baca Juga
          </p>
          <div className="grid lg:grid-cols-4 gap-6 mt-5">
            {announcement?.map((row, k) => (
              <Link
                href={`/information/announcements/${row?.slug}`}
                className="w-full space-y-1.5"
                key={k}
              >
                <Image
                  src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                  alt={'image'}
                  width={300}
                  height={300}
                  className={'w-[300px] h-[300px] size-[300px] object-cover rounded-full'}
                />
                <p className="line-clamp-2 text-2xl font-semibold">{row?.judul_pengumuman}</p>
                <p>{row?.published_at ? format(row?.published_at, 'dd-MM-yyyy') : ''}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default DetailAnnouncementPageV5
