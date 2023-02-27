import Image from "next/image";
import React from "react";
import HomeImg from './../../../assets/hero.jpg'

const Carousel = () => {
    return(
        <div className="carousel w-full rou">
            <div id="slide1" className="carousel-item relative w-full h-96 object-cover">
                <Image src={HomeImg} alt='nfsj' className="w-full rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative">
                <Image src={HomeImg} alt='nfsj' className="w-full rounded-lg h-96 object-cover" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <Image src={HomeImg} alt='nfsj' className="w-full rounded-lg h-96 object-cover" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <Image src={HomeImg} alt='nfsj' className="w-full rounded-lg h-96 object-cover" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}

export default Carousel