import React from "react";
import clsx from "clsx";

interface Props {
    title: string;
    children?: React.ReactNode;
}

const SectionHeading: React.FC<Props> = ({title, children}) => {
    return <>
        <h2 className="text-3xl font-medium">{title}</h2>
        <p>{children}</p>
    </>
}
export default SectionHeading;
