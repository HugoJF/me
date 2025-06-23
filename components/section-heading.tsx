import React from "react";
import clsx from "clsx";

interface Props {
    title: string;
    children?: React.ReactNode;
    className?: string;
}

const SectionHeading: React.FC<Props> = ({title, className,children}) => {
    return <div className={className}>
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300">{children}</p>
    </div>
}
export default SectionHeading;
