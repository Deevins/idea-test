import React from 'react'

import { ICheckbox } from 'types/ICheckbox'

interface Props {
    index: number
    element: ICheckbox
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | any) => void
}

export const Checkbox: React.FC<Props> = ({ index, element, handleInputChange }) => {
    const [isHovering, setIsHovering] = React.useState(false)

    return (
        <div
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
            className={
                'w-[17.5rem] flex row-auto text-[15px] items-center text-lg leading-[38px] pl-4 hover:cursor-pointer hover:bg-blue-50 select-none'
            }
        >
            <input
                type="checkbox"
                name={String(element.name)}
                id={`single-checkbox${index}`}
                onChange={(event) => handleInputChange(event)}
                checked={element?.isChecked || false}
                className={
                    'justify-items-center mr-3 rounded-[5px] w-[1.1em] h-[1.1em] pl-[3px] pt-[3px] hover:cursor-pointer'
                }
            />
            <label htmlFor={`single-checkbox${index}`} className="h-full hover:cursor-pointer">
                {element.title}
            </label>
            {isHovering && (
                <span
                    id={`${element.name}`}
                    onClick={(event) => handleInputChange(event)}
                    className="text-[#2196F3] text-[1rem] select-none ml-auto mr-4"
                >
                    только
                </span>
            )}
        </div>
    )
}
