import React from "react";
import Image, {StaticImageData} from "next/image";
import {IconName, icons} from "../utils/icons";
import clsx from "clsx";

interface Props {
    icon: IconName;
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

    return <>
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
    </>
}
export default Icon;
