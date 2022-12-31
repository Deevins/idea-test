import { months } from '../constants/months'
import { days } from '../constants/days'

export const dateToStringParser = (date: string) => {
    const myDate = new Date()
    const parsedDate = date.split('.')

    myDate.setFullYear(Number(parsedDate[2]), Number(parsedDate[1]), Number(parsedDate[0]))

    return `${myDate.getDate()} 
      ${months[myDate.getMonth()]} 20${myDate.getFullYear()},  
      ${days[myDate.getDay()]}`
}
