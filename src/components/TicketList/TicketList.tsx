import React from 'react'

import data from 'assets/tickets.json'

import ItemCard from './Ticket/Ticket'

import { filterData } from 'utils'

import { ITicket } from 'types/ITicket'
import { CurrencyEnum } from 'types/enums/CurrencyEnum'
import { ICheckbox } from 'types/ICheckbox'

type Props = {
    activeButton: CurrencyEnum
    activeCheckboxes: ICheckbox[]
}

const TicketList: React.FC<Props> = ({ activeButton, activeCheckboxes }) => {
    const [tickets, setTickets] = React.useState<ITicket[]>(data.tickets)

    // Получаем при первом рендере свежие данные
    React.useEffect(() => {
        setTickets(data.tickets)
    }, [])

    // при изменении Checkbox'а производим фильтрацию и обновляем State с билетами
    React.useEffect(() => {
        const selectedCheckboxes = activeCheckboxes
            .filter((el) => el.isChecked)
            .map((el) => el.name)

        const filteredArray = filterData(data.tickets, selectedCheckboxes)

        setTickets(filteredArray)
    }, [activeCheckboxes])

    return (
        <div
            className={
                'mt-[500px] sm:ml-10 lg:mt-32 lg:static md:top-[70%] md:ml-28 min-h-[90vh] sm:min-h[86vh]'
            }
        >
            {tickets.length ? (
                tickets.map((el, i) => <ItemCard key={i} activeButton={activeButton} {...el} />)
            ) : (
                <h1
                    className={
                        'h-screen text-xl text-center sm:text-lg md:text-3xl font-bold mb-20'
                    }
                >
                    По заданным фильтрам билетов не найдено
                </h1>
            )}
        </div>
    )
}

export default TicketList
