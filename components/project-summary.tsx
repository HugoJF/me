import React from "react";
import Image, {StaticImageData} from "next/image";

interface Props {
    name: string;
    image: StaticImageData;
    github: string;
    hasDetails: boolean;
    children: React.ReactNode;
}

const ProjectSummary: React.FC<Props> = ({name, image, github, hasDetails, children}) => {
    return <li className="flex flex-row-reverse">
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
            {Boolean(github || hasDetails) && <ul className="flex gap-2">
                {hasDetails &&
                  <a className="duration-150 inline-block px-4 py-2 text-sm bg-white hover:bg-gray-50 border rounded-lg"
                     href="#">Mais detalhes</a>}
                {github &&
                  <a className="duration-150 inline-block px-4 py-2 text-sm bg-white hover:bg-gray-50 border rounded-lg"
                     href="#">GitHub</a>}
            </ul>}
        </div>
    </li>
}
export default ProjectSummary;
