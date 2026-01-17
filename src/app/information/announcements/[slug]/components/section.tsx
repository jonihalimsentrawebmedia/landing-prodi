'use client'

import { useParams } from 'next/navigation'
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa'
import { format } from 'date-fns'
import { id } from 'date-fns/locale/id'
import { Button } from '@/components/ui/button'
import { IoMdLink } from 'react-icons/io'
import { ArrowLeft } from 'lucide-react'
import { UseGetAnnouncement } from '@/app/homepage/hooks'
import Link from 'next/link'
import { UseGetAnnouncementDetail } from '@/app/information/announcements/hooks'
import { MdDownload } from 'react-icons/md'
import { useDownloadFile } from '@/hooks'
import { toast } from 'react-toastify'
import { BasicSelect } from '@/components/common/select/basic'
import { useEffect, useState } from 'react'

export const DetailSectionAnnouncement = () => {
  const { slug } = useParams()
  const { announcementDetail } = UseGetAnnouncementDetail((slug as string) ?? '')
  const { announcement } = UseGetAnnouncement({
    limit: '4',
    page: '1',
  })

  const [fileValue, setFileValue] = useState('')

  useEffect(() => {
    if (announcementDetail) {
      setFileValue(announcementDetail?.dokumens[0].url_dokumen ?? '')
    }
  }, [announcementDetail])

  return (
    <>
      <div className="bg-primary">
        <div className={'container'}>
          <div className="flex flex-col-reverse flex-row items-start w-full gap-5">
            <div className="w-full h-full max-w-[420px] bg-primary lg:pr-5">
              <div className="p-5 bg-[#F5FAFF] rounded-lg flex flex-col gap-2">
                <div className={'flex flex-col gap-1'}>
                  <p className={'text-gray-500 flex items-center gap-1.5'}>
                    <FaRegCalendarAlt className={'text-primary'} />
                    Diupload
                  </p>
                  <p className={'font-semibold'}>
                    {announcementDetail?.published_at
                      ? format(announcementDetail.published_at, 'dd MMM yyyy', { locale: id })
                      : ''}
                  </p>
                </div>
                <div className={'flex flex-col gap-1'}>
                  <p className={'text-gray-500 flex items-center gap-1.5'}>
                    <FaUser className={'text-primary'} />
                    Penulis
                  </p>
                  <p className={'font-semibold'}>
                    {announcementDetail?.penulis ? announcementDetail.penulis : '-'}
                  </p>
                </div>
              </div>
              <div className="p-5 bg-[#F5FAFF] rounded-lg flex flex-col gap-2 mt-5">
                <p className="text-primary">Bagikan Berita</p>
                <Button
                  className={'w-fit flex items-center gap-1.5 rounded-full border-primary'}
                  variant={'outline'}
                >
                  <IoMdLink />
                  Salin Link
                </Button>
              </div>

              <div className="p-5 bg-[#F5FAFF] rounded-lg flex flex-col gap-2 mt-5">
                <p className="text-primary">Unduh Dokumen</p>
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
                      'flex items-center gap-1.5 border p-1.5 rounded-full border-primary px-4 w-fit'
                    }
                  >
                    <MdDownload className={'text-primary'} />
                    Unduh Dokumen
                  </button>
                ))}
              </div>

              <div className="mt-5">
                <p className={'text-white pl-2 text-xl border-l-white border-l-4'}>Baca Juga</p>
                <ul className={'flex flex-col gap-4 mt-2.5'}>
                  {announcement
                    .filter((row) => row?.slug !== slug)
                    ?.map((item, k) => (
                      <Link href={`/information/announcements/${item?.slug}`} key={k}>
                        <li className={'flex flex-col gap-1.5 p-2 border rounded border-white'}>
                          <p className="text-white font-semibold line-clamp-2">
                            {item?.judul_pengumuman}
                          </p>
                          <p className={'text-white flex items-center gap-1.5'}>
                            <FaRegCalendarAlt className={'text-white'} />
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

            <div className="w-full bg-white p-5">
              <Link href={'/information/announcements'}>
                <button className={'flex items-center gap-1.5'}>
                  <ArrowLeft />
                  Kembali
                </button>
              </Link>

              <p className="mt-5 text-2xl font-semibold">{announcementDetail?.judul_pengumuman}</p>

              <BasicSelect
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
                className="html-class mt-5"
                dangerouslySetInnerHTML={{ __html: announcementDetail?.isi_pengumuman ?? '' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
