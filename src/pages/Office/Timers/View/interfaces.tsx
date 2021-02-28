import { OfficeTimersTimerProps } from './Timer/interfaces'

import { Moment } from 'moment'
import { Timer_Fragment } from 'src/modules/gql/generated'

export type OfficeTimersViewProps = {
  timers: OfficeTimersTimerProps['timer'][]
  // totalTime: OfficeTimersTimerProps['totalTime'][]
  // timersContent: OfficeTimersTimerProps['timersContent'][]


  date: Moment
  setDate: (date: Moment) => void
  totalTime: Timer_Fragment
  timersContent: Timer_Fragment
  // timer: number

}
