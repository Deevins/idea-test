import React from 'react'
import clsx from 'clsx'

import { IButton } from 'types/IButton'

const Button: React.FC<IButton> = ({ title, activeButton, setActiveButton }) => {
    return (
        <button
            onClick={() => setActiveButton(title)}
            className={clsx(
                'px-[20px] py-2 bg-white border-[1px] font-medium hover:bg-sky-200 first:rounded-l-lg last:rounded-r-lg text-white',
                {
                    'bg-blue-500 hover:bg-blue-500 hover:cursor-default': title === activeButton,
                    'text-blue-400': title !== activeButton
                }
            )}
        >
            {title}
        </button>
    )
}

export default Button
