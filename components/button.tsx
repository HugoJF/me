import React, {useState} from "react";
import clsx from "clsx";

interface Props {
    primary?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<Props> = ({primary = false, children}) => {
    return <button className={clsx('w-full px-4 py-2 rounded-lg', {
        'bg-blue-500 text-gray-900': primary,
        'border border-gray-600': !primary,
    })}>
        {children}
    </button>
}
export default Button;
