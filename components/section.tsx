import React, {useState} from "react";
import clsx from "clsx";

interface Props {
    dark?: boolean;
    sectionClassName?: string;
    className?: string;
    children: React.ReactNode;
}

const Section: React.FC<Props> = ({dark = false, sectionClassName, className, children}) => {
    return <section
        className={clsx({dark})}
    >
        <div
            className={clsx('py-12 px-4 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900', sectionClassName)}>
            <div className={clsx('container mx-auto gap-8', className)}>
                {children}
            </div>
        </div>
    </section>
}
export default Section;
