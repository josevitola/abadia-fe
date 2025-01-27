"use client";

import ReactSelect, { Props } from 'react-select';

export const Select = (props: Props) => {
    return (
        <ReactSelect {...props}
            styles={{
                control: (baseStyles) => {
                    return ({
                        ...baseStyles,
                        borderRadius: 0,
                        border: '1px solid gray',
                    })
                },
            }} />
    )
}