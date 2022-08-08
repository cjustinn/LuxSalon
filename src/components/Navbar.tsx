import { useState } from "react"
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {

    const [ open, setOpen ] = useState(false);

    return <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-primary-500">
        <div className="container w-full lg:w-min px-4 flex flex-wrap items-center justify-between">
            <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
                <Link to="/" className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                    Lux Salon
                </Link>
                
                <button type="button" onClick={() => setOpen(!open)} className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none">
                    <FaBars/>
                </button>
            </div>
        </div>

        <div className={ `lg:flex flex-grow items-center ${open ? 'flex' : 'hidden'}` }>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                    <Link to="/" className="px-3 py-2 flex items-center text-sm uppercase font-light md:font-bold leading-snug text-white hover:opacity-75 hover:text-accent-100">
                        <span>Home</span>
                    </Link>
                </li>
                {/*<li className="nav-item">
                    <Link to="/about" className="px-3 py-2 flex items-center text-sm uppercase font-light md:font-bold leading-snug text-white hover:opacity-75 hover:text-accent-100">
                        <span>About</span>
                    </Link>
                </li>*/}
                <li className="nav-item">
                    <Link to="/services" className="px-3 py-2 flex items-center text-sm uppercase font-light md:font-bold leading-snug text-white hover:opacity-75 hover:text-accent-100">
                        <span>Services</span>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>

}