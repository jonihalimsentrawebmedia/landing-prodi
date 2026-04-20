'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import SideNavV5 from '@/components/thema-v5/profile/component/sideNav'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { UseGetProfileVisionMission } from '@/app/profile/vision/hooks'

const VisionMissionGoalsV5 = () => {
  const { visionMission, loading } = UseGetProfileVisionMission()
  if (loading) return <></>

  return (
    <>
      <ProfileLayout title={'Profil'} context={'PROFIL'}>
        <div className={'bg-footer w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
          <div className="container-sm px-2!">
            <BreadcrumbBasic data={[{ name: 'Beranda', link: '/' }, { name: 'Profil' }]} />
          </div>
        </div>
        <div className="p-0 py-2 lg:p-5 bg-primary dark:bg-gray-800">
          <div className="container-sm px-2!">
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8">
              <SideNavV5 />
              <div className={'w-full space-y-4'}>
                <p className="text-2xl font-semibold text-footer underline underline-offset-8 decoration-yellow-500">
                  Visi, Misi, dan Tujuan
                </p>

                <p className="text-white bg-footer font-semibold w-full rounded p-1.5 px-3">Visi</p>
                <div
                  className={'html-class text-base!'}
                  dangerouslySetInnerHTML={{ __html: visionMission?.visi ?? '' }}
                />

                <p className="text-white bg-footer font-semibold w-full rounded p-1.5 px-3">Misi</p>
                <div
                  className={'html-class flex flex-col gap-2'}
                  dangerouslySetInnerHTML={{ __html: visionMission?.misi ?? '' }}
                />

                <p className="text-white bg-footer font-semibold w-full rounded p-1.5 px-3">
                  Tujuan
                </p>
                <div
                  className={'html-class'}
                  dangerouslySetInnerHTML={{ __html: visionMission?.tujuan ?? '' }}
                />
              </div>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default VisionMissionGoalsV5
