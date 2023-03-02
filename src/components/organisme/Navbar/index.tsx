import React, { useEffect, useState } from "react";


const Navbar = () => {
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.pageYOffset)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const [responsive, setResponsive] = useState(false)
    const [style, setStyle] = useState('hidden');
    const handleNav = () => {
        setResponsive(!responsive);
        if(responsive) {
            setStyle('inline');
        }
        else {
            setStyle('hidden');
        }
        console.log(style);
    }


    return (
        <div className={scroll > 50 ? 'navbar opacity-70 md:px-36 shadow-xl fixed pb-6 w-full  z-40 bg-slate-100 font-semibold' : 'navbar bg-base-100 md:px-36 fixed w-full bg-transparent pb-6 font-semibold'}>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Kwarcab Surabaya</a>
            </div>
            <div className={`flex-none md:inline ${style} top-0`}>
                <ul className="menu md:menu-horizontal menu-vertical px-1">
                    <li><a>Home</a></li>
                    <li tabIndex={0}>
                        <a>
                            Event
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-base-100">
                        <li><a>Outbound</a></li>
                        <li><a>Bakti Sosial</a></li>
                        </ul>
                    </li>
                    <li><a>Kepengurusan</a></li>
                </ul>
            </div>
            <label className="btn-circle swap swap-rotate md:hidden">
                <input type="checkbox" onClick={handleNav} />
                
                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                
            </label>
        </div>
    )
}

export default Navbar;