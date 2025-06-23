import React, {useState} from "react";
import clsx from "clsx";
import Button from "./button";

interface Props {}

const FinalCta: React.FC<Props> = ({}) => {
    return <div className="mx-auto flex flex-col max-w-lg text-gray-100 px-6 py-4 bg-gray-900 rounded-lg">
        <p className="text-center mb-6">Interessado em trabalhar juntos? Entre em contato comigo através de um dos canais abaixo.</p>

        <ul className="flex flex-col gap-4">
            <li>
                <Button primary>contact@hugo.dev.br</Button>
            </li>
            <li>
                <Button>LinkedIn</Button>
            </li>
            <li>
                <Button>GitHub</Button>
            </li>
        </ul>
    </div>
}
export default FinalCta;
