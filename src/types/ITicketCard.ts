import { ITicket } from './ITicket'

import { CurrencyEnum } from './enums/CurrencyEnum'

export interface ITicketCard extends ITicket {
    activeButton: CurrencyEnum
}
