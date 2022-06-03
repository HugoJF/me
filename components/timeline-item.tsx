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
            <div className="h-4 w-1 bg-gray-800"></div>
            <div className="h-3 w-3 bg-gray-900 border border-white rounded-full"></div>
            <div className="flex-grow w-1 bg-gray-800"></div>
        </div>
        <div className="py-4">
            <h2 className="text-2xl font-medium">{from} — {to}</h2>
            <h3 className="mb-2 text-gray-600">{title}</h3>
            <p className="text-gray-800 text-lg">{children}</p>
        </div>
    </li>
}
export default TimelineItem;