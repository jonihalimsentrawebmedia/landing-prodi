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

const ButtonDetailV8 = (props: props) => {
  const { data } = props

  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={
          'p-1.5 px-3 rounded-md border border-primary flex items-center gap-1 text-primary'
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
        <div className={'flex flex-col lg:flex-row items-start gap-5'}>
          {data?.gambar && (
            <div className={'w-[240px] min-w-[240px] h-[180px] relative'}>
              <Image src={data?.gambar} alt={'Certificate'} className={'object-cover'} fill />
            </div>
          )}
          <div>
            <p className="text-xs">
              {data?.mulai_berlaku ? format(data?.mulai_berlaku, 'dd MMMM yyyy') : '-'}
            </p>
            <p className="text-xl text-primary">{data?.nama_satuan_organisasi_akreditas}</p>

            <p className="text-2xl font-bold capitalize">
              {data?.nilai_akreditas?.split('_').join(' ').toLowerCase()}
            </p>
            <p>{data?.uraian}</p>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 mt-2 lg:mt-4 w-full lg:w-fit">
              <Link href={data?.gambar ?? '#'} target={'_blank'} className={'w-full lg:w-fit'}>
                <Button
                  className={
                    'col-span-2 border-primary hover:text-primary text-primary w-full lg:w-fit'
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
                    'col-span-2 border-primary hover:text-primary text-primary w-full lg:w-fit'
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

export default ButtonDetailV8
