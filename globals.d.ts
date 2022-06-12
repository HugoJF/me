import {StaticImageData} from "next/image";

declare global {
    type AdaptiveImage = {
        light: StaticImageData;
        dark: StaticImageData;
    }

    type SrcType = AdaptiveImage | StaticImageData;
}
