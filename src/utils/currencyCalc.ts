import { CurrencyEnum } from '../types/enums/CurrencyEnum'

export const currencyCalc = (
    value: number,
    currency: CurrencyEnum.RUB | CurrencyEnum.USD | CurrencyEnum.EUR
) => {
    switch (currency) {
        case CurrencyEnum.RUB:
            return `${value}₽`
        case CurrencyEnum.USD:
            return `${Math.round(value / 64.62)}$`
        case CurrencyEnum.EUR:
            return `${Math.round(value / 66.32)}€`
    }
}
