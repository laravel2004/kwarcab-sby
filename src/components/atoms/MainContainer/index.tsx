import React, { ReactNode } from "react";

type Props = {
    children : ReactNode
}

const MainContainer = (props:Props) => {
    return (
        <div className="mx-36 pt-12">
            {props.children}
        </div>
    )
}

export default MainContainer;