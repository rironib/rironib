import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-slate-900 dark:bg-slate-800 transition-transform duration-300 sticky top-0 z-50">
            <div className="w-11/12 lg:w-10/12 max-w-[1275px] mx-auto px-4 flex justify-between items-center h-16">
                <Link to='/' className="font-atomic text-white font-bold text-2xl lg:text-3xl">
                    RONiB
                </Link>
                <div className="lg:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={20}/> : <FaBars size={20}/>}
                </div>
                <div className="hidden lg:flex gap-6 font-medium text-lg text-white">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/skills'>Skills</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
            </div>
            {isOpen && (
                <div className="w-full h-screen fixed lg:hidden top-16 bg-slate-700 text-white">
                    <div onClick={() => setIsOpen(false)} className="grid justify-center items-center text-center gap-8 p-4">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/skills'>Skills</NavLink>
                        <NavLink to='/projects'>Projects</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;