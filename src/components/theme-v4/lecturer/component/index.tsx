import { SearchInput } from '@/components/common/filter/search'
import Image from 'next/image'

export const ListLecturerTheme4 = () => {
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
            <div className="border flex items-center gap-2" key={k}>
              <Image
                src={'/img/lectemp.jpg'}
                alt={'dosen'}
                className={'w-[150px] h-[200px] object-cover'}
                width={150}
                height={200}
              />
              <div className={'flex flex-col gap-1.5'}>
                <p className="text-xl font-semibold">Dr. Ir. Ahmad Ramadhan, M.Sc.</p>
                <p className={'text-sm'}>
                  {dump?.slice(0, 3).join(', ')} +{dump?.length - 3}
                </p>
                <button className={'text-primary font-semibold underline underline-offset-8 text-start text-sm'}>
                  Lihat Kontak & Jadwal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
