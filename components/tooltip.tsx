import {FC, useRef, useState} from "react";
import clsx from "clsx";

interface Props {
    description: string;
    children: React.ReactNode;
}

export const Tooltip: FC<Props> = ({description, children}) => {
    const [open, setOpen] = useState(false);
    const [over, setOver] = useState(false);
    const timeout = useRef<ReturnType<typeof setTimeout>>();

    function handleOnMouseEnter() {
        setOpen(true);
        setOver(true);
        clearTimeout(timeout.current);
    }

    function handleOnMouseLeave() {
        setOver(false);
        timeout.current = setTimeout(() => setOpen(false), 300);
    }

    return <div className="relative" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
        {children}
        <div
            className={clsx(
                'duration-100 absolute top-full left-1/2 -translate-x-1/2 px-2 py-1',
                'text-sm text-white bg-black rounded-lg shadow-md', {
                    'opacity-100': open,
                    'opacity-0': !open,
                    'z-10': over,
                    'z-0': !over,
                })}
        >
            {description}
        </div>
    </div>
}
export default Tooltip;
