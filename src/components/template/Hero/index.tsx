import Card from "@/components/atoms/Card";
import Grid from "@/components/atoms/Grid";
import MainContainer from "@/components/atoms/MainContainer";
import Carousel from "@/components/organisme/Carousel";
import Footer from "@/components/organisme/Footer";
import MainHero from "@/components/organisme/MainHero";
import { RootContext } from "@/service/reducer/Reducer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useContext } from "react";
import HeroImg from './../../../assets/hero.jpg'
import Pimpinan from './../../../assets/pimpinan.png'
import Raimuna from './../../../assets/raimuna.png'

const Hero = () => {

    const context = useContext(RootContext);
    console.log(context)

    const handleScroll = () => {
        window.scrollTo({
            top:800,
            behavior: 'smooth'
        })
    }

    return (
       <div>
        <div className="hero min-h-screen bg-image">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold">SALAM PRAMUKA !</h1>
                <p className="mb-5">Satyaku ku Dharmakan, Dharmaku ku Baktikan <br /> Iklas Bhakti Bina Bangsa </p>
                <button className="btn btn-primary" onClick={handleScroll}>Get Started</button>
                </div>
            </div>
        </div>
        <MainContainer>
            <div className="text-4xl text-center font-semibold mt-16">
                <h3>Layanan Kepanduan</h3>
                <small className="text-base font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatem.</small>
            </div>
            <div className="flex mt-10 gap-8 justify-center">
                <Card 
                    image= {HeroImg}
                    title= 'Bhakti Sosial'
                    body='lorem ipsum makan siang dan minum pagi'
                    status="New"
                    bagde1="Peduli"
                    bagde2="Kemanusiaan"
                />
                <Card 
                    image= {HeroImg}
                    title= 'Bhakti Sosial'
                    body='lorem ipsum makan siang dan minum pagi'
                    status="New"
                    bagde1="Peduli"
                    bagde2="Kemanusiaan"
                />
                <Card 
                    image= {HeroImg}
                    title= 'Bhakti Sosial'
                    body='lorem ipsum makan siang dan minum pagi'
                    status="New"
                    bagde1="Peduli"
                    bagde2="Kemanusiaan"
                />
                
            </div>
            <h1 className="text-5xl text-center font-semibold mb-24 mt-32">Kepanduan Kwartir Cabang Kota Surabaya</h1>
            <Grid>
                <Image src={Pimpinan} alt ='pimpinan' className="rounded-b-3xl items-center w-96" />
                <MainHero />
            </Grid>
            <h3 className="text-4xl font-semibold mt-32 mb-10 ">Informasi Penting</h3>
            <div className="grid grid-cols-2 bg-slate-200 p-5 rounded-lg">
                <div>
                    <div>
                        <p className="mt-5">Raimuna 2023</p>
                        <p className="mt-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quia repellendus sapiente minus libero dolorum, officiis sit voluptatem, quis tempora beatae amet necessitatibus iste praesentium, quaerat explicabo inventore dolorem odio!</p>
                        <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, hic.</p>
                        <Link href='#' className="p-3 btn-primary mt-16 px-6 rounded-lg">Daftar Sekarang</Link>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Image src={Raimuna} alt='raimuna' className="items-center" />
                </div>
            </div>
            <div className="grid grid-cols-2 bg-slate-200 p-5 rounded-lg mt-10">
                <div>
                    <div>
                        <p className="mt-5">Raimuna 2023</p>
                        <p className="mt-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quia repellendus sapiente minus libero dolorum, officiis sit voluptatem, quis tempora beatae amet necessitatibus iste praesentium, quaerat explicabo inventore dolorem odio!</p>
                        <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, hic.</p>
                        <Link href='#' className="p-3 btn-primary mt-16 px-6 rounded-lg">Daftar Sekarang</Link>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Image src={Raimuna} alt='raimuna' className="items-center" />
                </div>
            </div>
        <Footer />
        </MainContainer>
       </div>
    )
}

export default Hero