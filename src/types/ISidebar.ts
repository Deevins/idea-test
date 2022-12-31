import { Dispatch, SetStateAction } from 'react'

import { CurrencyEnum } from './enums/CurrencyEnum'
import { ICheckbox } from './ICheckbox'

export interface ISidebar {
    activeButton: CurrencyEnum
    activeCheckboxes: ICheckbox[]
    setActiveButton: (title: CurrencyEnum) => void
    setActiveCheckboxes: Dispatch<SetStateAction<ICheckbox[]>>
}
