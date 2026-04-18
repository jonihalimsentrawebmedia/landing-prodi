import { AgendaSection } from '@/components/thema-v2/information/agenda/component/agendaSection'
import { Suspense } from 'react'
import { JumbotronTitle } from '@/components/thema-v2/component/common/jumbotronTitle'

export const InformationAgendaTheme2 = () => {
  return (
    <div className={'w-full max-w-[1920px] mx-auto'}>
      <JumbotronTitle context={'INFORMASI'} title={'Informasi'} />
      <Suspense>
        <AgendaSection />
      </Suspense>
    </div>
  )
}
