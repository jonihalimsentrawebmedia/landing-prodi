import { IAccreditation } from '@/app/accreditation/data/types'
import { useState } from 'react'
import { MdDownload, MdInfo } from 'react-icons/md'
import { DialogCustom } from '@/components/common/Dialog'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface props {
  data: IAccreditation
}

const ButtonDetail = (props: props) => {
  const { data } = props

  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={
          'p-1.5 px-3 rounded-full border border-footer flex items-center gap-1 text-footer'
        }
      >
        <MdInfo className={'size-4'} />
        Detail
      </button>

      <DialogCustom
        open={open}
        setOpen={setOpen}
        title={'Detail Akreditasi'}
        className={'lg:min-w-4xl'}
      >
        <div className={'flex flex-col lg:flex-row items-center gap-5'}>
          {data?.gambar && (
            <div className={'max-w-[373px] w-full lg:h-[280px] relative'}>
              <Image
                src={data?.gambar}
                alt={'Certificate'}
                className={'w-full object-contain lg:object-contain'}
                fill
              />
            </div>
          )}
          <div>
            <p className="text-xs">
              {data?.mulai_berlaku ? format(data?.mulai_berlaku, 'dd MMMM yyyy') : '-'}
            </p>
            <p className="text-xl text-footer">{data?.nama_satuan_organisasi_akreditas}</p>
            <p className="text-gray-500 dark:text-gray-100">{data?.uraian}</p>
            <p className="text-gray-500 mt-2 flex items-center gap-1.5">
              {data?.no_surat_keputusan}
            </p>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 mt-2 lg:mt-4 w-full lg:w-fit">
              <Link href={data?.gambar ?? '#'} target={'_blank'} className={'w-full lg:w-fit'}>
                <Button
                  className={
                    'col-span-2 border-footer hover:text-footer text-footer w-full lg:w-fit'
                  }
                  variant={'outline'}
                >
                  <MdDownload />
                  Unduh Sertifikat Akreditasi
                </Button>
              </Link>
              <Link
                href={data?.dokumen_akreditas ?? '#'}
                target={'_blank'}
                className={'w-full lg:w-fit'}
              >
                <Button
                  className={
                    'col-span-2 border-footer hover:text-footer text-footer w-full lg:w-fit'
                  }
                  variant={'outline'}
                >
                  <MdDownload />
                  Unduh SK Akreditasi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </DialogCustom>
    </>
  )
}

export default ButtonDetail
