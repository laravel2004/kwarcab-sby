import Image from "next/image";
import React from "react";

type Props = {
    image : any;
    status : string;
    title : string;
    body : string;
    bagde1? : string;
    bagde2? : string;
}

const Card = (props:Props) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <Image src={props.image} alt='alal' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {props.title}
                    <div className="badge badge-outline">{props.status}</div>
                </h2>
                <p>{props.body}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-primary">{props.bagde1}</div> 
                    <div className="badge badge-secondary">{props.bagde2}</div>
                </div>
            </div>
        </div>
    )
}

export default Card;