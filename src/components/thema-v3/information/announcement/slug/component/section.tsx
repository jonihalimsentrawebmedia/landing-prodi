'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa'
import { format } from 'date-fns'
import { useParams } from 'next/navigation'
import { UseGetAnnouncementDetail } from '@/app/information/announcements/hooks'
import { UseGetAnnouncement } from '@/app/homepage/hooks'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'
import { Button } from '@/components/ui/button'
import { MdDownload } from 'react-icons/md'
import { useDownloadFile } from '@/hooks'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { BasicSelect } from '@/components/common/select/basic'
import Image from 'next/image'
import { TitleContent } from '@/components/thema-v3/component/common/titleContent'
import { useStateContext } from '@/contexts'
import { DetailAnnouncementTheme3Skeleton } from '@/components/thema-v3/information/announcement/slug/component/skeleton'

export const DetailAnnouncementTheme3 = () => {
  const { slug } = useParams()
  const [{ profile }] = useStateContext()
  const { announcementDetail: detail, loading: load1 } = UseGetAnnouncementDetail(
    (slug as string) ?? ''
  )
  const { announcement, loading: load2 } = UseGetAnnouncement({
    page: '1',
    limit: '3',
    year: new Date(detail?.published_at as string).getFullYear().toString() ?? '',
    no_include_id: detail?.id_pengumuman ?? '',
  })

  const [fileValue, setFileValue] = useState('')

  useEffect(() => {
    if (detail) {
      setFileValue(detail?.dokumens[0].url_dokumen ?? '')
    }
  }, [detail])

  const DownloadFile = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useDownloadFile(fileValue, 'file A')
      .then((res) => {
        if (res.success) {
          toast.success('Berhasil Mengunduh File')
        }
      })
      .catch((err) => {
        toast.error(err?.message || 'Gagal Mengunduh File')
      })
  }

  const loading = load1 || load2

  if (loading) return <DetailAnnouncementTheme3Skeleton />

  return (
    <>
      <div className={'container py-5'}>
        <Link href={'/information/announcements'} className={'flex items-center gap-1.5'}>
          <ArrowLeft className={'size-4'} />
          Kembali
        </Link>

        <div className="w-full flex items-start gap-x-8 lg:mt-4">
          <div className="flex flex-col gap-5">
            <div className="w-full py-5 bg-primary-foreground p-2.5 mb-4">
              <p className={'text-2xl font-semibold dark:text-primary'}>{detail?.judul_pengumuman}</p>
              <div className="grid grid-cols-2 w-fit gap-2.5 text-primary mt-2">
                <p className={'flex items-center gap-1.5'}>
                  <FaRegCalendarAlt /> Diupload
                </p>
                <p>: {detail?.published_at ? format(detail?.published_at, 'dd MMM yyyy') : '-'}</p>
                <p className={'flex items-center gap-1.5'}>
                  <FaUser /> Penulis
                </p>
                <p>: {detail?.penulis}</p>
              </div>
            </div>

            <Button
              variant={'outline'}
              onClick={DownloadFile}
              className={
                'text-primary dark:text-white border-primary rounded-full mt-4 hover:text-primary w-fit'
              }
            >
              <MdDownload />
              Unduh Dokumen
            </Button>

            <div
              className="html-class flex flex-col gap-5 text-justify"
              dangerouslySetInnerHTML={{ __html: detail?.isi_pengumuman ?? '' }}
            />

            <ShareContent title={detail?.judul_pengumuman ?? ''} text={'Bagikan Pengumuman'} />
          </div>

          <div className="w-full lg:min-w-[480px]">
            <BasicSelect
              innerClassname={'text-primary'}
              data={
                detail?.dokumens?.map((row, k) => ({
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
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <TitleContent text={'Pengumuman Lainnya'} line_position={'bottom'} />
          <div className={'grid grid-cols-3 gap-5'}>
            {announcement?.map((row, k) => (
              <Link
                href={`/information/announcements/${row?.slug}`}
                key={k}
                className="flex flex-col gap-2 border p-4 rounded"
              >
                <Image
                  src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                  alt={'logo'}
                  width={120}
                  height={120}
                  className={'rounded-full size-28 mx-auto'}
                />
                <p className={'font-semibold line-clamp-2'}>{row?.judul_pengumuman}</p>
                <p className={'flex items-center gap-1.5 text-sm text-gray-500'}>
                  <FaRegCalendarAlt className={'size-4 text-primary'} />
                  {row?.published_at ? format(row?.published_at, 'dd MMM yyyy') : '-'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
