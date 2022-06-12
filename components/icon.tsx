import React from "react";
import Image from "next/image";

interface Props {
    size?: number;
    src: SrcType;
    alt: string;
}

const Icon: React.FC<Props> = ({size = 40, src, alt}) => {

    if ('light' in src) {
        return <>
            <div className="dark:hidden">
                <Icon
                    key={alt + '-light'}
                    src={src.light}
                    alt={alt}
                />
            </div>
            <div className="hidden dark:block">
                {src.dark && <Icon
                  key={alt + '-dark'}
                  src={src.dark}
                  alt={alt}
                />}
            </div>
        </>
    }

    const scale = size / src.height;

    return <Image
        src={src}
        alt={alt}
        width={src.width * scale}
        height={src.height * scale}
        layout="fixed"
        quality={100}
    />
}
export default Icon;
