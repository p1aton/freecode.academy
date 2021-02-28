import React, { useCallback, useMemo } from 'react'
import { OfficeProjectListSectionStyled } from '../../components/ui/list/styles'
import { OfficeTitleStyled } from '../../components/ui/Title/styles'
import { OfficeTimersViewProps } from './interfaces'
import OfficeTimersTimer from './Timer'
import moment from 'moment'

const OfficeTimersView: React.FC<OfficeTimersViewProps> = ({
  timers,
  date,
  setDate,
}) => {
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newDate = moment(event.currentTarget.value)

      if (newDate && newDate.isValid()) {
        setDate(newDate)
      }
    },
    [setDate]
  )

  // Обернуть цикл в мемо, чтобы при изменении массива посчитать актуальное время и сформировать актуальный список
  // Результатом выполнения функции будет объект с двумя свойствами
  const {
    totalTime,
    timersContent,
  } = useMemo(() => {
    // Счетчик общего времени
    let totalTime = 0;

      // Набить таймеры в шаблоны
  const timersContent = timers.map((timer) => {
    // Здесь посчитать затраченное время по таймеру и добавить в общий счетчик
    totalTime += timer
    return <OfficeTimersTimer key={timer.id} timer={timer} />
  })

   // Возвращаем объект с обеими переменными
   return {
    totalTime,
    timersContent,
  }
}, [timers]);

    return useMemo(() => {
      return (
        <>
          <OfficeProjectListSectionStyled>
            <OfficeTitleStyled>
              Лог выполнения{' '}
              <input
                type="date"
                value={date.format('YYYY-MM-DD')}
                onChange={onChange}
                style={{
                  color: 'white',
                  background: 'none',
                  border: 0,
                }}
              />
            </OfficeTitleStyled>
            {timers.map((timer) => {
              return <OfficeTimersTimer key={timer.id} timer={timer} />
            })}
          </OfficeProjectListSectionStyled>
        </>
      )
    }, [date, timers, onChange])
  }

export default OfficeTimersView
