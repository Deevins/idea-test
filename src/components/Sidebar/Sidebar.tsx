import React from 'react'

import Button from '../Button'
import CheckboxList from '../CheckboxList/CheckboxList'

import { CurrencyEnum } from 'types/enums/CurrencyEnum'
import { ISidebar } from 'types/ISidebar'

const buttonTitles = [CurrencyEnum.RUB, CurrencyEnum.USD, CurrencyEnum.EUR]

const Sidebar: React.FC<ISidebar> = ({
    activeButton,
    setActiveButton,
    activeCheckboxes,
    setActiveCheckboxes
}) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target

        if (name === 'allSelect') {
            let tempItems = activeCheckboxes.map((item) => {
                return { ...item, isChecked: checked }
            })

            setActiveCheckboxes(tempItems)
        } else {
            let tempItems = activeCheckboxes.map((item) =>
                item.name === name ? { ...item, isChecked: checked } : item
            )

            setActiveCheckboxes(tempItems)
        }

        if (e.type === 'click') {
            let tempItems = activeCheckboxes.map((item) => {
                return String(item.name) === String(e.target.id)
                    ? { ...item, isChecked: true }
                    : { ...item, isChecked: false }
            })

            setActiveCheckboxes(tempItems)
        }
    }

    return (
        <div
            className={
                'absolute lg:static h-[340px] w-[280px] bg-white rounded-xl mt-32 ml-[44%] md:ml-[37%] sm:ml-[55%] lg:ml-0 lg:ml-40 sm:ml-[37%] lg:ml-[25%] lg:flex-nowrap '
            }
        >
            <span className={'pt-3 flex pl-4 pb-2'}>Валюта</span>
            <div className={'pl-7'}>
                {buttonTitles.map((el, i) => (
                    <Button
                        key={i}
                        title={el}
                        activeButton={activeButton}
                        setActiveButton={setActiveButton}
                    />
                ))}
            </div>
            <div className={'flex flex-col mt-6'}>
                <span className={'pl-3'}>Количество пересадок</span>
                <CheckboxList
                    activeCheckboxes={activeCheckboxes}
                    handleInputChange={handleInputChange}
                />
            </div>
        </div>
    )
}

export default Sidebar
