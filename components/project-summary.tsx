import Image, {StaticImageData} from "next/image";
import clsx from "clsx";
import Icon from "./icon";
import {FC, ReactNode} from "react";
import React from "../public/react.svg";
import {IconName} from "../utils/icons";

interface Props {
    name: string;
    image: StaticImageData;
    icons?: IconName[];
    repository: string;
    hasDetails: boolean;
    odd?: boolean;
    children: ReactNode;
}

const ProjectSummary: FC<Props> = ({name, image, icons = [], repository, hasDetails, odd = false, children}) => {
    return <li className={clsx('flex gap-4', {
        'flex-row': odd,
        'flex-row-reverse': !odd,
    })}>
        <div className="w-1/2 pr-2">
            <Image
                src={image}
                alt={name}
                className="rounded-lg"
            />
        </div>
        <div className="w-1/2 flex flex-col gap-2 pl-2">
            <ul className="flex gap-4">
                {icons.map(icon => <li key={icon}>
                    <Icon icon={icon} size={30}/>
                </li>)}
            </ul>
            <h2 className="text-2xl font-bold">{name}</h2>
            {children}
            {Boolean(repository || hasDetails) && <ul className="flex gap-2">
                {hasDetails &&
                  <a
                    className="duration-150 inline-block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 border dark:border-gray-900 rounded-lg"
                    href="#"
                  >
                    Mais detalhes
                  </a>}
                {repository && <a
                  className="duration-150 inline-block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 border dark:border-gray-900 rounded-lg"
                  href={repository}
                >
                  Repositório
                </a>}
            </ul>}
        </div>
    </li>
}
export default ProjectSummary;
