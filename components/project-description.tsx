import Icon from "./icon";
import React from "../public/react.svg";
import {FC, ReactNode} from "react";
import {IconName} from "../utils/icons";

interface Props {
    name: string;
    icons?: IconName[];
    repository: string;
    children: ReactNode;
}

export const ProjectDescription: FC<Props> = ({name, repository, icons = [], children}) => {
    return <li className="flex flex-col gap-4">
        <ul className="flex gap-4">
            {icons.map(icon => <li key={icon}>
                <Icon iconName={icon} />
            </li>)}
        </ul>
        <a href={repository}>
            <h2 className="text-2xl font-bold">{name}</h2>
        </a>
        <div className="flex-grow">
            {children}
        </div>
    </li>
}