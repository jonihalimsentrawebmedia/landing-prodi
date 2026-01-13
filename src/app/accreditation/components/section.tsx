'use client'

import { UseGetAccreditation } from '@/app/accreditation/hooks'
import Image from 'next/image'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { MdDownload } from 'react-icons/md'
import { toast } from 'react-toastify'

export const AccreditationSection = () => {
  const { accreditation, loading } = UseGetAccreditation()

  const DownloadFile = async (url: string) => {
    console.log(url)
    toast.info('Fitur sedang dalam pengembangan')
  }

  // const DownloadFile = async (url?: string) => {
  //   if (!url) {
  //     alert('File tidak tersedia')
  //     return
  //   }
  //
  //   try {
  //     const response = await fetch(url)
  //     const blob = await response.blob()
  //
  //     const link = document.createElement('a')
  //     link.href = window.URL.createObjectURL(blob)
  //     link.download = 'file'
  //     document.body.appendChild(link)
  //     link.click()
  //     document.body.removeChild(link)
  //   } catch (error) {
  //     console.error(error)
  //     alert('Gagal mengunduh file')
  //   }
  // }

  return (
    <>
      <div className={'w-full h-full bg-[#EAEAEA] py-10'}>
        <div className="container space-y-5">
          {loading ? (
            <>
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="grid grid-cols-[340px_1fr] gap-5 animate-pulse">
                  {/* Image Skeleton */}
                  <div className="w-[340px] h-[255px] bg-gray-300 rounded" />

                  {/* Content Skeleton */}
                  <div className="flex flex-col gap-3">
                    <div className="h-4 w-32 bg-gray-300 rounded" />
                    <div className="h-5 w-40 bg-gray-300 rounded" />

                    <div className="h-4 w-40 bg-gray-300 rounded" />
                    <div className="h-5 w-52 bg-gray-300 rounded" />

                    <div className="h-4 w-40 bg-gray-300 rounded" />
                    <div className="h-5 w-72 bg-gray-300 rounded" />

                    <div className="h-4 w-40 bg-gray-300 rounded" />
                    <div className="h-5 w-64 bg-gray-300 rounded" />

                    <div className="h-10 w-40 bg-gray-300 rounded mt-2" />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {accreditation?.map((item, k) => (
                <div key={k} className={'grid grid-cols-[340px_1fr] gap-5'}>
                  <Image
                    src={item?.gambar}
                    alt={'gambar'}
                    className={'w-[340px] h-[255px] object-cover'}
                    width={340}
                    height={255}
                  />
                  <div className={'flex flex-col gap-2'}>
                    <div className={'flex flex-col gap-1'}>
                      <p className="text-sm text-gray-500">Akreditasi</p>
                      <p>{item?.nilai_akreditas}</p>
                    </div>
                    <div className={'flex flex-col gap-1'}>
                      <p className="text-sm text-gray-500">Lembaga Akreditasi</p>
                      <p>{item?.lembaga_penilaian}</p>
                    </div>
                    <div className={'flex flex-col gap-1'}>
                      <p className="text-sm text-gray-500">Surat Keputusan</p>
                      <p>{item?.no_surat_keputusan}</p>
                    </div>
                    <div className={'flex flex-col gap-1'}>
                      <p className="text-sm text-gray-500">Masa Berlaku</p>
                      <p>
                        {item?.mulai_berlaku ? format(item?.mulai_berlaku, 'dd/MM/yyyy') : ''} s.d{' '}
                        {item?.akhir_berlaku ? format(item?.akhir_berlaku, 'dd/MM/yyyy') : ''}
                      </p>
                    </div>
                    <Button
                      onClick={() => DownloadFile(item?.gambar)}
                      className={'text-white w-fit'}
                    >
                      <MdDownload className={'size-4'} />
                      Unduh Akreditasi
                    </Button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}
