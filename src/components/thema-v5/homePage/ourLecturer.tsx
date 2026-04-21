'use client'

import { clsx } from 'clsx'
import { UseGetLecturer } from '@/app/homepage/hooks'
import Image from 'next/image'

const LecturerList = () => {
  const { lecturer } = UseGetLecturer({
    page: '1',
    limit: '12',
  })
  return (
    <>
      {lecturer.length > 0 && (
        <div className="w-full max-w-[1920px] lg:p-5 py-5 lg:py-10 bg-primary dark:bg-gray-800">
          <div className="container-sm space-y-5">
            <h1
              className={clsx(
                'underline underline-offset-8 decoration-yellow-500',
                'text-3xl font-semibold text-center text-footer'
              )}
            >
              Dosen Kami
            </h1>

            <div className="flex flex-row overflow-scroll lg:overflow-visible lg:grid grid-cols-4 gap-4">
              {lecturer?.map((row, k) => (
                <div
                  key={k}
                  className="flex flex-col items-center justify-center gap-2 p-4 border w-full min-w-[250px]"
                >
                  <Image
                    src={row?.gambar_url ?? '/img/noimg.png'}
                    alt={'gambar'}
                    width={300}
                    height={300}
                    className={'w-full h-[255px] object-cover rounded-xl'}
                  />
                  <p className="lg:text-xl font-normal text-start">{row?.nama}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default LecturerList
