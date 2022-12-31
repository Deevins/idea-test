import React from 'react'
import { IoIosAirplane } from 'react-icons/io'

import img from 'assets/img/Turkish_Airlines_logo.png'

import { currencyCalc, dateToStringParser, getNoun } from 'utils'

import { ITicketCard } from 'types/ITicketCard'

const TicketCard: React.FC<ITicketCard> = (props) => {
    const {
        arrival_time,
        arrival_date,
        departure_date,
        departure_time,
        destination,
        destination_name,
        origin_name,
        origin,
        stops,
        price,
        activeButton
    } = props

    return (
        <div
            className={
                'w-[600px] h-[150px] scale-[60%] sm:scale-[65%] md:scale-[75%] lg:scale-[90%] mb-8 shadow-xl bg-white rounded-md flex '
            }
        >
            <div
                className={
                    'flex w-[200px] h-full flex-col pl-6 pt-6 border-r-gray-100 border-r-[1.3px]'
                }
            >
                <img className={'h-[30px] w-[150px] mb-4'} src={img} alt="ticket_logo" />
                <button
                    className={
                        'text-white bg-orange-600 hover:bg-orange-500 rounded-[5px] h-14 w-[150px]'
                    }
                >
                    <span>Купить</span>
                    <p>за {currencyCalc(price, activeButton)}</p>
                </button>
            </div>
            {/*First block starts*/}
            <div className={'w-[25%] pt-4 pl-6'}>
                <span className={'text-4xl'}>{departure_time}</span>
                <p className={'text-[13px]'}>
                    {origin}, {origin_name}
                </p>
                <p className={'text-[12px] text-gray-400'}>{dateToStringParser(departure_date)}</p>
            </div>
            {/*Second block starts*/}
            <div className={'relative w-[18%] h-[50px]'}>
                <span
                    className={
                        'text-gray-400 text-[13px] pl-3 w-full absolute top-5 border-b-[1px] border-b-gray-400'
                    }
                >
                    {`${stops} ${getNoun(stops)}`}
                </span>
                <IoIosAirplane
                    fill={'darkgray'}
                    className={'absolute top-[2.031rem] left-[94px]'}
                />
                <span className={'w-12 absolute bg-blue-800'} />
            </div>
            {/*Third block starts*/}
            <div className={'w-[25%] pt-4 pr-6 flex flex-col items-end'}>
                <span className={'text-4xl'}>{arrival_time}</span>
                <p className={'text-[13px]'}>
                    {destination}, {destination_name}
                </p>
                <p className={'text-[12px] text-gray-400'}>{dateToStringParser(arrival_date)}</p>
            </div>
        </div>
    )
}

export default TicketCard
