import { type } from "os";
import React, { ReactNode } from "react";

type Props ={
    children : ReactNode;
}

const Grid = (props:Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {props.children}
        </div>
    )
}
export default Grid;