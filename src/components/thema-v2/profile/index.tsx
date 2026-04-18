'use client'

import { UseGetProfileVisionMission } from '@/app/profile/vision/hooks'
import { IoTelescope } from 'react-icons/io5'
import { GiOnTarget } from 'react-icons/gi'
import { AboutProfile } from '@/components/thema-v2/profile/component/AboutProfile'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { clsx } from 'clsx'
import { UnitSection } from '@/components/thema-v2/profile/unit/components/unitSection'
import { SectionStructureOrganization } from '@/components/thema-v2/profile/structure-organization/components/section'
import { useState } from 'react'
import { SectionStaffProfile } from '@/components/thema-v2/profile/staff/components/section'
import { SectionLecturerProfile } from '@/components/thema-v2/profile/lecturer/components/section'
import { GoGoal } from 'react-icons/go'
import { FaChalkboardTeacher, FaHouseUser } from 'react-icons/fa'
import { ImTree } from 'react-icons/im'
import { FaPeopleGroup } from 'react-icons/fa6'

export const AboutProfileTheme2 = () => {
  const { visionMission } = UseGetProfileVisionMission()
  const [tabsValue, setTabsValue] = useState('unit')

  const TabsMenu = [
    {
      value: 'unit',
      name: 'Unit Pengelolah',
      element: <UnitSection />,
      icon: <FaHouseUser className={'size-6'} />,
    },
    {
      value: 'organization',
      name: 'Struktur Organisasi',
      element: <SectionStructureOrganization />,
      icon: <ImTree className={'size-6'} />,
    },
    {
      value: 'staff',
      name: 'Staff',
      element: <SectionStaffProfile />,
      icon: <FaPeopleGroup className={'size-6'} />,
    },
    {
      value: 'lectuer',
      name: 'Dosen',
      element: <SectionLecturerProfile />,
      icon: <FaChalkboardTeacher className={'size-6'} />,
    },
  ]

  return (
    <>
      <AboutProfile />

      <div className="absolute w-full">
        <Image
          src={'/img/curian.png'}
          alt={'image'}
          className={'w-full h-[200px] object-cover'}
          width={1920}
          height={250}
        />
      </div>
      <div className={'my-5 relative container-sm'}>
        <div className="flex flex-col lg:flex-row items-stretch gap-4">
          <div className="w-full lg:w-1/3 border p-4 rounded bg-primary flex flex-col gap-1.5">
            <p className="text-4xl flex items-center gap-3 font-semibold text-white">
              <IoTelescope className={'size-10'} />
              Visi
            </p>
            <div
              className={'html-class flex flex-col gap-1.5'}
              dangerouslySetInnerHTML={{ __html: visionMission?.visi ?? '' }}
            />
          </div>

          <div className="w-full lg:w-2/3 border p-4 rounded  flex flex-col gap-1.5 bg-footer">
            <p className="text-4xl flex items-center gap-3 font-semibold text-white">
              <GiOnTarget className={'size-10'} />
              Misi
            </p>
            <div
              className={'html-class'}
              dangerouslySetInnerHTML={{ __html: visionMission?.misi ?? '' }}
            />
          </div>
        </div>

        <div className="w-full border p-4 rounded  flex flex-col gap-1.5 bg-footer mt-5">
          <p className="text-4xl flex items-center gap-3 font-semibold text-white">
            <GoGoal className={'size-10'} />
            Tujuan
          </p>
          <div
            className={'html-class'}
            dangerouslySetInnerHTML={{ __html: visionMission?.tujuan ?? '' }}
          />
        </div>
      </div>

      <div className="container-sm pb-5">
        <Tabs className={'w-full h-full'} value={tabsValue} onValueChange={setTabsValue}>
          <TabsList
            className={
              'w-full h-full flex justify-start rounded bg-white overflow-x-scroll lg:overflow-visible'
            }
          >
            {TabsMenu?.map((row, k) => (
              <TabsTrigger
                key={k}
                value={row?.value}
                className={clsx(
                  'rounded shadow-none!',
                  'data-[state=active]:bg-primary data-[state=active]:text-white p-2'
                )}
              >
                {row?.icon}
                {row?.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {TabsMenu?.map((row, k) => (
            <TabsContent key={k} value={row?.value}>
              {row?.element}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  )
}
