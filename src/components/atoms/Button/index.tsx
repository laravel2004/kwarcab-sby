import { type } from "os";
import React from "react"

type Props = {
    title: string;
    onClick : () => void;
    className? : string
}

const Button = (props : Props) => {
    return (
        <button className="p-5 rounded-lg">
            {props.title}
        </button>
    )
}

export default Button;