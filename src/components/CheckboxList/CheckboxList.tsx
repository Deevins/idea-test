import React from 'react'
import clsx from 'clsx'

import { ICheckbox } from 'types/ICheckbox'
import Checkbox from './Checkbox'

type Props = {
    activeCheckboxes: ICheckbox[]
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckboxList: React.FC<Props> = React.memo(({ activeCheckboxes, handleInputChange }) => {
    return (
        <form className={'flex flex-col w-[380px] '}>
            <div
                className={clsx(
                    'item w-[17.5rem] flex row-auto text-[15px] items-center text-lg leading-[38px] pl-4 hover:cursor-pointer hover:bg-blue-50 select-none'
                )}
            >
                <input
                    type="checkbox"
                    name="allSelect"
                    id="helper-checkbox"
                    checked={!activeCheckboxes.some((item) => item?.isChecked !== true)}
                    onChange={handleInputChange}
                    className={
                        'checked:bg-amber-400 justify-items-center mr-3 checked:rounded-[5px] w-[1.2em] h-[1.2em] pl-[3px] pt-[3px] hover:cursor-pointer'
                    }
                />
                <label
                    htmlFor="helper-checkbox"
                    className={'w-full hover:cursor-pointer select-none'}
                >
                    Все
                </label>
            </div>
            {activeCheckboxes.map((el, index) => (
                <Checkbox
                    index={index}
                    key={index}
                    element={el}
                    handleInputChange={handleInputChange}
                />
            ))}
        </form>
    )
})

export default CheckboxList
