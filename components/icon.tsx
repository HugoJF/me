import React from "react";
import Image, {StaticImageData} from "next/image";
import {IconName, icons} from "../utils/icons";
import clsx from "clsx";
import {Tooltip} from "./tooltip";

interface Props {
    icon: IconName;
    alt: string;
    size?: number;
}

// TODO: handle alts
const Icon: React.FC<Props> = ({icon, size = 40}) => {
    const data = icons[icon] as Icon;
    const onlyLight = 'dark' in data;

    function dimensions(data: StaticImageData) {
        const scale = size / data.height;

        return {
            width: data.width * scale,
            height: data.height * scale,
        }
    }

    return <Tooltip description={icon}>
        {data.light && <div className={clsx({'dark:hidden': onlyLight})}>
          <Image
            src={data.light}
            alt={icon}
            layout="fixed"
            quality={100}
            {...dimensions(data.light)}
          />
        </div>}

        {data.dark && <div className="hidden dark:block">
          <Image
            src={data.dark}
            alt={icon}
            layout="fixed"
            quality={100}
            {...dimensions(data.dark)}
          />
        </div>}
    </Tooltip>
}
export default Icon;
