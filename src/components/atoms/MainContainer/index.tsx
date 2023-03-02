import React, { ReactNode } from "react";

type Props = {
    children : ReactNode
}

const MainContainer = (props:Props) => {
    return (
        <div className="md:mx-36 mx-6 pt-12">
            {props.children}
        </div>
    )
}

export default MainContainer;