import { JumbotronTitle } from '@/components/common/jumbotronTitle'
import { Suspense } from 'react'
import { AgendaSection } from '@/app/information/agenda/component/agendaSection'

export const InformationAgendaTheme1 = () => {
  return (
    <div className={'w-full max-w-[1920px] mx-auto'}>
      <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
      <Suspense>
        <AgendaSection />
      </Suspense>
    </div>
  )
}
