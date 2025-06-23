import {StaticImageData} from "next/image";

declare global {
    type Icon = {
        alt: string;
        light: StaticImageData;
        dark: StaticImageData;
    };
}
