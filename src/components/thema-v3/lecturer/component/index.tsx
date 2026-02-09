import { SearchInput } from '@/components/common/filter/search'
import Image from 'next/image'
import { MdInfo } from 'react-icons/md'

export const ListLecturerTheme3 = () => {
  const dump = [
    'Literature Analysis',
    'Advanced Writing',
    'Research Methods',
    'Listening I',
    'Vocabulary Building',
    'Speaking II',
  ]
  return (
    <>
      <div className={'container py-5'}>
        <SearchInput className={'w-full'} placeholder={'Cari Dosen'} />

        <div className="mt-5 grid lg:grid-cols-3 gap-5">
          {Array.from({ length: 10 }).map((_, k) => (
            <div className="border" key={k}>
              <div className="flex items-center gap-2 border-b p-2">
                <Image
                  src={'/img/lectemp.jpg'}
                  alt={'dosen palsu'}
                  className={'size-12 w-12 rounded-full object-cover'}
                  width={60}
                  height={60}
                />
                <p className="font-semibold">Dr. Ir. Ahmad Ramadhan, M.Sc.</p>
              </div>
              <div className={'flex flex-col gap-1.5 mt-2 p-2'}>
                <p className={'text-xs'}>Matakuliah Diampu</p>
                <div className="flex flex-wrap gap-2">
                  {dump.slice(0, 3).map((item, k) => (
                    <div
                      key={k}
                      className={
                        'border border-primary text-sm p-1.5 bg-primary-foreground text-primary'
                      }
                    >
                      {item}
                    </div>
                  ))}
                  {dump?.length > 3 && (
                    <p className={'text-sm font-semibold'}>+{dump.length - 3} Lainnya</p>
                  )}
                </div>
              </div>
              <div
                className={
                  'p-2 text-primary text-sm font-semibold flex items-center gap-1.5 border-t'
                }
              >
                <MdInfo className={'text-primary size-5'} />
                Lihat Kontak & Jadwal
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
