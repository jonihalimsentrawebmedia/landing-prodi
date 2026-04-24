'use client'

import JumbotronTitleV10 from '@/components/thema-v10/component/common/jumbotronTitle'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ContentAboutV10 from '@/components/thema-v10/profile/contentAbout'

const ProfilePageV10 = () => {
  // const TabsData = [
  //   { name: 'Unit Pengelola', link: '/profile' },
  //   { name: 'Visi, Misi dan Tujuan', link: '/profile/vision' },
  //   { name: 'Struktur Organisasi', link: '/profile/structure-organization' },
  //   { name: 'Staff', link: '/profile/staff' },
  //   { name: 'Dosen', link: '/profile/lecturer' },
  //   { name: 'Berita', link: '/profile/news' },
  //   { name: 'Galeri', link: '/profile/gallery' },
  //   { name: 'Hubungi Kami', link: '/profile/contact-us' },
  // ]

  // const pathName = usePathname()
  // const router = useRouter()
  // const { unitProfile, loading } = UseGetProfileUnit()

  // if (loading) return <></>

  return (
    <>
      <JumbotronTitleV10 title={'Profile'} context={'PROFIL'} />
      <div className="container-sm py-5">
        <div className="bg-blue-50 p-1.5 px-2 rounded">
          <BreadcrumbBasic
            className={'text-primary hover:bg-transparent!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Profil' }]}
          />
        </div>
      </div>

      <ContentAboutV10 />
    </>
  )
}
export default ProfilePageV10
