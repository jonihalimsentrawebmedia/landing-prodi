'use client'

import { useParams } from 'next/navigation'
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'
import { ArrowLeft } from 'lucide-react'
import { UseGetAnnouncement } from '@/app/homepage/hooks'
import Link from 'next/link'
import { UseGetAnnouncementDetail } from '@/app/information/announcements/hooks'
import { MdDownload } from 'react-icons/md'
import { useDownloadFile } from '@/hooks'
import { toast } from 'react-toastify'
import { BasicSelect } from '@/components/common/select/basic'
import { useEffect, useState } from 'react'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'

export const DetailAnnouncementTheme4 = () => {
  const { slug } = useParams()
  const { announcementDetail, loading: load1 } = UseGetAnnouncementDetail((slug as string) ?? '')
  const { announcement, loading: load2 } = UseGetAnnouncement({
    limit: '4',
    page: '1',
    no_include_id: announcementDetail?.id_pengumuman ?? '',
  })

  const [fileValue, setFileValue] = useState('')

  useEffect(() => {
    if (announcementDetail) {
      setFileValue(announcementDetail?.dokumens[0].url_dokumen ?? '')
    }
  }, [announcementDetail])

  const loading = load1 || load2

  if (loading) return <></>

  return (
    <>
      <div>
        <div className={'container'}>
          <div className="flex flex-col lg:flex-row items-start w-full gap-5 mt-5">
            <div className="w-full">
              <Link href={'/information/announcements'}>
                <button className={'flex items-center gap-1.5'}>
                  <ArrowLeft />
                  Kembali
                </button>
              </Link>
              <p className="mt-5 lg:text-2xl font-semibold">
                {announcementDetail?.judul_pengumuman}
              </p>
              <BasicSelect
                innerClassname={'text-primary'}
                data={
                  announcementDetail?.dokumens?.map((row, k) => ({
                    label: 'dokumen ' + (k + 1),
                    value: row?.url_dokumen,
                  })) ?? []
                }
                onChange={(e) => {
                  setFileValue(e)
                }}
                value={fileValue}
              />

              {fileValue !== '' && (
                <iframe src={fileValue} className={'my-5 w-full h-[500px] lg:h-[800px]'} />
              )}

              <div
                className="html-class mt-5 text-justify flex flex-col gap-4 mb-4"
                dangerouslySetInnerHTML={{ __html: announcementDetail?.isi_pengumuman ?? '' }}
              />
            </div>

            <div className="w-full h-full max-w-[335px]">
              <div className="p-5 bg-white dark:bg-primary shadow drop-shadow rounded-lg flex flex-col gap-2">
                <div className={'flex flex-col gap-1'}>
                  <p className={'text-gray-500 flex items-center gap-1.5 text-sm'}>
                    <FaRegCalendarAlt className={'text-primary dark:text-white'} />
                    Diupload
                  </p>
                  <p className={'font-semibold text-sm'}>
                    {announcementDetail?.published_at
                      ? format(announcementDetail.published_at, 'dd MMM yyyy', { locale: id })
                      : ''}
                  </p>
                </div>
                <div className={'flex flex-col gap-1'}>
                  <p className={'text-gray-500 flex items-center gap-1.5 text-sm'}>
                    <FaUser className={'text-primary dark:text-white'} />
                    Penulis
                  </p>
                  <p className={'font-semibold text-sm'}>
                    {announcementDetail?.penulis ? announcementDetail.penulis : '-'}
                  </p>
                </div>
              </div>
              <div className="p-5 bg-white dark:bg-primary shadow drop-shadow-none rounded-lg flex flex-col gap-2 mt-5">
                <ShareContent
                  title={announcementDetail?.judul_pengumuman ?? ''}
                  text={'Bagikan Pengumuman'}
                />
              </div>

              <div className="p-5 bg-white shadow drop-shadow dark:bg-primary rounded-lg flex flex-col gap-2 mt-5">
                <p className="text-primary dark:text-white">Unduh Dokumen</p>
                {announcementDetail?.dokumens?.map((item, k) => (
                  <button
                    onClick={async () => {
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      await useDownloadFile(item?.url_dokumen ?? '', 'babi')
                        .then((res) => {
                          if (res.success) {
                            toast.success('Berhasil mengunduh dokumen')
                          }
                        })
                        .catch(() => {
                          toast.error('Gagal mengunduh dokumen')
                        })
                    }}
                    key={k}
                    className={
                      'flex items-center gap-1.5 border p-1.5 rounded-full border-primary px-4 w-fit dark:border-white'
                    }
                  >
                    <MdDownload className={'text-primary dark:text-white'} />
                    Unduh Dokumen
                  </button>
                ))}
              </div>

              <div className="my-5">
                <p className={'text-white pl-2 text-xl border-l-white border-l-4'}>Baca Juga</p>
                <ul className={'flex flex-col gap-4 mt-2.5'}>
                  {announcement?.map((item, k) => (
                    <Link href={`/information/announcements/${item?.slug}`} key={k}>
                      <li className={'flex flex-col gap-1.5 p-2 border rounded border-primary'}>
                        <p className="text-primary font-semibold line-clamp-2">
                          {item?.judul_pengumuman}
                        </p>
                        <p className={'text-primary flex items-center gap-1.5'}>
                          <FaRegCalendarAlt className={'text-primary'} />
                          {item?.published_at
                            ? format(item?.published_at, 'dd MMM yyyy', { locale: id })
                            : '-'}
                        </p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
