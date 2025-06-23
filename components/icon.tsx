import React from "react";
import Image, {StaticImageData} from "next/image";
import {IconName, icons} from "../utils/icons";
import clsx from "clsx";
import {Tooltip} from "./tooltip";

interface Props {
    iconName: IconName;
    size?: number;
    dimensionAxis?: 'width' | 'height';
}

// TODO: handle alts
const Icon: React.FC<Props> = ({iconName, size = 40, dimensionAxis = 'height'}) => {
    const data = icons[iconName] as Icon;
    const onlyLight = 'dark' in data;

    function dimensions(data: StaticImageData) {
        const scale = size / data[dimensionAxis];

        return {
            width: data.width * scale,
            height: data.height * scale,
        }
    }

    return <Tooltip description={data.alt}>
        {data.light && <div className={clsx({'dark:hidden': onlyLight})}>
          <Image
            src={data.light}
            alt={data.alt}
            layout="fixed"
            quality={100}
            {...dimensions(data.light)}
          />
        </div>}

        {data.dark && <div className="hidden dark:block">
          <Image
            src={data.dark}
            alt={data.alt}
            layout="fixed"
            quality={100}
            {...dimensions(data.dark)}
          />
        </div>}
    </Tooltip>
}
export default Icon;
