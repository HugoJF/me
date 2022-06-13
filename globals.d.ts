import {StaticImageData} from "next/image";

declare global {
    type Icon = {
        light: StaticImageData;
        dark: StaticImageData;
    };
}
