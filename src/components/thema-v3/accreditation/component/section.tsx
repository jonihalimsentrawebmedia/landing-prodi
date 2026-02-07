'use client'

import { UseGetAccreditation } from '@/app/accreditation/hooks'
import { useDownloadFile } from '@/hooks'
import { toast } from 'react-toastify'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { MdDownload } from 'react-icons/md'

export const AccreditationSectionTheme3 = () => {
  const { accreditation, loading } = UseGetAccreditation()

  const DownloadFile = async (url: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useDownloadFile(url ?? '', 'file')
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
        <p className="text-primary font-semibold text-2xl">Akreditasi</p>

        <div className="mt-5 grid grid-cols-2 gap-5">
          {accreditation?.map((row, k) => (
            <Card key={k}>
              <CardContent>
                <Image
                  src={row?.gambar}
                  alt={row?.nilai_akreditas}
                  width={566}
                  height={425}
                  className={'w-full h-[425px] object-cover'}
                />
                <div className="flex flex-col gap-1.5 mt-4">
                  <p className="text-gray-500 text-sm">Akreditasi</p>
                  <p>{row?.nilai_akreditas}</p>
                  <p className="text-gray-500 text-sm">Lembaga Akreditasi</p>
                  <p>{row?.lembaga_penilaian}</p>
                  <p className="text-gray-500 text-sm">Surat Keputusan</p>
                  <p>{row?.no_surat_keputusan}</p>
                  <p className="text-gray-500 text-sm">Masa Berlaku</p>
                  <p>
                    {row?.mulai_berlaku ? format(row?.mulai_berlaku, 'dd/MM/yyyy') : ''} s.d{' '}
                    {row?.akhir_berlaku ? format(row?.akhir_berlaku, 'dd/MM/yyyy') : ''}
                  </p>

                  <Button
                    variant={'outline'}
                    onClick={() => DownloadFile(row?.gambar)}
                    className={'text-primary border-primary hover:text-primary w-fit'}
                  >
                    <MdDownload /> Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
