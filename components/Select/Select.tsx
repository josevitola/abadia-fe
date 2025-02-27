"use client";

import { Colors } from '@/styles/colors';
import ReactSelect, { Props } from 'react-select';

export const Select = (props: Props) => {
    return (
        <ReactSelect {...props}
            styles={{
                container: (baseStyles) => ({
                    ...baseStyles,
                    flex: '1 1 0px',
                }),
                control: (baseStyles) => ({
                    ...baseStyles,
                    borderRadius: 0,
                    border: `1px solid ${Colors.LIGHTGRAY}`,
                    backgroundColor: Colors.LIGHTGRAY,
                    color: Colors.GRAY,
                }),
            }} />
    )
}