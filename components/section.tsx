import React from "react";
import clsx from "clsx";

interface Props {
    sectionClassName?: string;
    className?: string;
    children: React.ReactNode;
}

const Section: React.FC<Props> = ({sectionClassName, className, children}) => {
    return <div className={clsx('py-8 px-4 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900', sectionClassName)}>
        <div className={clsx('container mx-auto gap-8', className)}>
            {children}
        </div>
    </div>
}
export default Section;
