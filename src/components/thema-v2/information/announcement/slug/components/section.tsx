'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { format } from 'date-fns'
import { BasicSelect } from '@/components/common/select/basic'
import { Button } from '@/components/ui/button'
import { MdDownload } from 'react-icons/md'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { id } from 'date-fns/locale/id'
import { useStateContext } from '@/contexts'
import { UseGetAnnouncementDetail } from '@/app/information/announcements/hooks'
import { UseGetAnnouncement } from '@/app/homepage/hooks'
import { useDownloadFile } from '@/hooks'
import { toast } from 'react-toastify'
import { ShareContent } from '@/components/thema-v2/component/common/shareContent'
import { TitleUnderline } from '@/components/thema-v2/component/common/titleUnderLine'

export const DetailSectionAnnouncement = () => {
  const { slug } = useParams()
  const [{ profile }] = useStateContext()
  const { announcementDetail: detail } = UseGetAnnouncementDetail((slug as string) ?? '')
  const { announcement } = UseGetAnnouncement({
    limit: '3',
    page: '1',
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

  return (
    <>
      <div className={'container py-5'}>
        <Link href={'/information/announcements'} className={'flex items-center gap-1.5'}>
          <ArrowLeft className={'size-4'} />
          Kembali
        </Link>

        <div className="flex flex-col lg:flex-row lg:items-start gap-5">
          <div className="lg:w-1/2 w-full">
            <p className="text-sm lg:text-3xl">{detail?.judul_pengumuman}</p>
            <div className="mt-5 flex items-center gap-4">
              <Card
                className={`p-1 lg:p-2 w-[200px] rounded-md border-primary shadow-none drop-shadow-none`}
              >
                <CardContent className={'p-1 lg:p-2 flex flex-col gap-1.5'}>
                  <p className="text-xs text-primary dark:text-white">Tanggal</p>
                  <p className={'text-sm lg:text-base'}>
                    {detail?.published_at ? format(detail?.published_at, 'dd MMM yyyy') : ''}
                  </p>
                </CardContent>
              </Card>
              <Card
                className={`p-1 lg:p-2 w-[200px] rounded-md border-primary shadow-none drop-shadow-none`}
              >
                <CardContent className={'p-1 lg:p-2 flex flex-col gap-1.5'}>
                  <p className="text-xs text-primary dark:text-white">Peneribit</p>
                  <p>{detail?.penulis}</p>
                </CardContent>
              </Card>
            </div>

            <Button
              variant={'outline'}
              onClick={DownloadFile}
              className={
                'text-primary dark:text-white border-primary rounded-full mt-4 hover:text-primary'
              }
            >
              <MdDownload />
              Unduh Dokumen
            </Button>

            <div
              className="html-class flex flex-col gap-5 my-5 text-justify"
              dangerouslySetInnerHTML={{ __html: detail?.isi_pengumuman ?? '' }}
            />

            <ShareContent title={detail?.judul_pengumuman ?? ''} text={'Bagikan Pengumuman'} />
          </div>

          <div className="w-full lg:w-1/2">
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
      </div>

      <div className="w-full mx-auto max-w-[1920px] bg-gray-100 py-5 dark:bg-primary/40">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 container">
          <TitleUnderline text={'Lihat Pengumuman Lainya'} className={'text-start col-span-3'} />
          {announcement?.map((item, l) => (
            <Link href={`/information/announcements/${item?.slug}`} key={l}>
              <div className="border p-5 rounded w-full flex flex-col gap-2 cursor-pointer">
                <Image
                  src={profile?.SatuanOrganisasi?.logo || '/img/noimg.png'}
                  alt="logo"
                  width={120}
                  height={120}
                  className="size-[120px] object-cover mx-auto"
                />
                <p className="line-clamp-2 font-semibold">{item?.judul_pengumuman}</p>
                <p className="flex text-primary dark:text-white items-center gap-1.5 text-sm">
                  <FaRegCalendarAlt />
                  {item?.published_at
                    ? format(item?.published_at, 'dd MMM yyyy', { locale: id })
                    : ''}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
