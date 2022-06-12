import React from "react";

interface Props {
    from: string;
    to: string;
    title: string;
    children: React.ReactNode;
}

const TimelineItem: React.FC<Props> = ({from, to, title, children}) => {
    return <li className="flex gap-4">
        <div className="flex flex-col items-center">
            <div className="h-7 w-[2px] bg-gray-200 dark:bg-gray-800"></div>
            <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
            <div className="flex-grow w-[2px] bg-gray-200 dark:bg-gray-800"></div>
        </div>
        <div className="py-4">
            <h2 className="text-2xl font-medium">{from} — {to}</h2>
            <h3 className="mb-2 text-gray-600 dark:text-gray-400 font-medium">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300 tracking-tight">{children}</p>
        </div>
    </li>
}
export default TimelineItem;
