import JumbotronTitleV7 from '@/components/thema-V7/component/common/jumbotron'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ContentAboutV7 from '@/components/thema-V7/component/profile/contentAbout'

const ProfileSectionPage7 = () => {
  return (
    <>
      <JumbotronTitleV7 title={'Profil'} context={'PROFIL'} />
      <div className={'bg-primary w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
        <div className="container-sm px-2!">
          <BreadcrumbBasic
            className={'text-white! hover:bg-primary!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Profil' }]}
          />
        </div>
      </div>
      <ContentAboutV7 />
    </>
  )
}

export default ProfileSectionPage7
