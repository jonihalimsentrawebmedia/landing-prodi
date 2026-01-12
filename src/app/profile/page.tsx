import Image from 'next/image'

const PageProfileProdi = () => {
  return (
    <>
      <div className={'w-full max-w-[1920px] mx-auto'}>
        <div className="relative">
          <div className="absolute z-10 w-full h-full bg-linear-to-t from-primary to-primary/70">
            <div className="flex flex-col items-start justify-center container h-full">
              <p className="font-semibold text-white text-4xl relative z-10">Profile</p>
              <p className="text-[117px] font-semibold bg-linear-to-t from-primary relative to-white/60 -mt-14 bg-clip-text text-transparent">
                Profile
              </p>
            </div>
          </div>

          <Image
            src={'/img/school.jpg'}
            alt={'image'}
            width={1920}
            height={460}
            className={'w-full h-[460px] object-cover object-center'}
          />
        </div>
      </div>
      
    </>
  )
}

export default PageProfileProdi
