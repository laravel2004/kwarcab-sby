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

    return (
        <div className={scroll > 50 ? 'navbar opacity-70 px-36 shadow-xl fixed pb-6 w-full z-40 bg-slate-100 font-semibold' : 'navbar bg-base-100 px-36 fixed w-full bg-transparent pb-6 font-semibold'}>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Kwarcab Surabaya</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
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
        </div>
    )
}

export default Navbar;