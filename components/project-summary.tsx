import React from "react";
import Image, {StaticImageData} from "next/image";

interface Props {
    name: string;
    image: StaticImageData;
    repository: string;
    hasDetails: boolean;
    children: React.ReactNode;
}

const ProjectSummary: React.FC<Props> = ({name, image, repository, hasDetails, children}) => {
    return <li className="flex gap-4 flex-row-reverse">
        <div className="w-1/2 pr-2">
            <Image
                src={image}
                alt={name}
                className="rounded-lg"
            />
        </div>
        <div className="w-1/2 flex flex-col gap-2 pl-2">
            <h2 className="text-2xl font-medium">{name}</h2>
            {children}
            {Boolean(repository || hasDetails) && <ul className="flex gap-2">
                {hasDetails &&
                  <a
                    className="duration-150 inline-block px-4 py-2 text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 border dark:border-gray-900 rounded-lg"
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
