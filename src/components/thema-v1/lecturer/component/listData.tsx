import { SearchInput } from '@/components/common/filter/search'
import Image from 'next/image'

export const ListDataLecturer = () => {
  return (
    <>
      <div className={'bg-primary'}>
        <div className="py-5 container">
          <SearchInput placeholder={'Cari Dosen ...'} className={'w-full bg-white rounded'} />

          <div className="grid grid-cols-3 gap-5 mt-5">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="bg-white rounded shadow-sm p-5">
                <Image
                  src={'/img/dumpLecture.jpg'}
                  alt={'image'}
                  width={100}
                  height={100}
                  className={'rounded-full size-20 object-cover'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
