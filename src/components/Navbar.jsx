import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex items-center justify-between flex-wrap">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Admin Dashboard</span>
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
                    >
                        {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </button>
                </div>
                <div className={`w-full ${isOpen ? 'block' : 'hidden'} flex-grow lg:flex lg:items-center lg:w-auto`}>
                    <div className="text-sm lg:flex-grow">
                        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                            Dashboard
                        </Link>
                        <Link to="/users" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                            Users
                        </Link>
                        <Link to="/charts" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                            Charts
                        </Link>
                        <Link to="/calendar" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                            Calendar
                        </Link>
                        <Link to="/kanban" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
                            Kanban
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
