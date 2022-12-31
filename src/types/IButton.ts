import { CurrencyEnum } from './enums/CurrencyEnum'

export interface IButton {
    title: CurrencyEnum
    activeButton: CurrencyEnum
    setActiveButton: (title: CurrencyEnum) => void
}
