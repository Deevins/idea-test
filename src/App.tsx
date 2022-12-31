import React from 'react'

import Logo from './assets/img/logo.png'

import Sidebar from './components/Sidebar'

import { CurrencyEnum } from './types/enums/CurrencyEnum'
import { checkboxItems } from './constants/checkboxItems'
import TicketList from 'components/TicketList/TicketList'

const App: React.FC = () => {
    const [activeButton, setActiveButton] = React.useState(CurrencyEnum.RUB)
    const [activeCheckboxes, setActiveCheckboxes] = React.useState(checkboxItems)

    return (
        <div
            className={
                'bg-slate-300 w-max h-max sm:w-full sm:h-full lg:relative flex flex-row lg:min-w-[100vw'
            }
        >
            <img
                src={Logo}
                alt="aviasales_logo"
                className={
                    'absolute w-18 h-18 left-[71%] md:left-[47%] top-6 lg:ml-0 lg:left-[48%] sm:left-[52%] '
                }
            />
            <Sidebar
                activeButton={activeButton}
                activeCheckboxes={activeCheckboxes}
                setActiveButton={setActiveButton}
                setActiveCheckboxes={setActiveCheckboxes}
            />
            <TicketList activeButton={activeButton} activeCheckboxes={activeCheckboxes} />
        </div>
    )
}

export default App
