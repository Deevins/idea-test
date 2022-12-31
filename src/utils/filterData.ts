import { ITicket } from '../types/ITicket'

export const filterData = (items: ITicket[], condition: string[]) => {
    let filteredData: ITicket[] = items.sort((a, b) => a.price - b.price)

    let filtersToNum = condition.map(function (item) {
        let number = parseInt(item)
        return isNaN(number) ? item : number
    })

    filteredData = items.filter((item) => filtersToNum.includes(item.stops))
    return filteredData
}
