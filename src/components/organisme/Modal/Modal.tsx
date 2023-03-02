import Button from "@/components/atoms/Button";
import Image from "next/image";
import React, { ReactNode } from "react";
import Raimuna from './../../../assets/raimuna.png'

type Porps = {
    children? : ReactNode;
    title? : string;
    onClick?: any;
}

const Modal = (props:Porps) => {
    return(
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="text-2xl text-center font-semibold">Congratulations random Internet user!</h3>
                    <div className="flex justify-center">
                        <Image src={Raimuna} alt='raimuna' />
                    </div>
                    <p className="py-4">Kesalahan ini dapat diperbaiki dengan memperbaiki karakter yang tidak di-escape dengan benar. Untuk mencegah kesalahan ini terjadi di masa mendatang, perlu memperbaiki konfigurasi ESLint dan menonaktifkan aturan yang memeriksa karakter yang tidak di-escape dengan benar. Link untuk informasi lebih lanjut tentang menonaktifkan aturan ESLint tersedia pada pesan kesalahan tersebut.</p>
                    <Button 
                        onClick={props.onClick} 
                        title ='Daftar Sekarang' 
                        className=" btn-success font-semibold px-6"
                    />
                    <div className="modal-action relative">
                        <label htmlFor="my-modal-5" className="btn p-3 btn-primary mt-4 mb-3 px-6 absolute">Tutup</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;