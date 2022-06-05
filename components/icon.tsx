import React from "react";
import Image, {StaticImageData} from "next/image";

interface Props {
    size?: number;
    src: StaticImageData;
    alt: string;
}

const Icon: React.FC<Props> = ({size = 40, src, alt}) => {
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
