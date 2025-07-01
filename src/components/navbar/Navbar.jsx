import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router'; // Changed from react-router to react-router-dom and added NavLink
import { useAuth } from '../../context/AuthContext';
import api from '../../utilities/axiosInstance';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, setUser } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = async () => {
        setShowDropdown(false);
        try {
            const res = await api.post('/auth/logout');
            toast.success(res.data.message);
            setUser(null);
        }
        catch (error) {
            console.error('Logout failed:', error);
        }
    }

    // Active link class
    const activeLinkClass = "text-blue-600 font-medium";
    const defaultLinkClass = "text-gray-700 hover:text-blue-600 transition duration-300";

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                    <span className="text-xl font-bold text-gray-800">EventMaster</span>
                </Link>

                <ul className="hidden md:flex space-x-6">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? activeLinkClass : defaultLinkClass}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/events" 
                            className={({ isActive }) => isActive ? activeLinkClass : defaultLinkClass}
                        >
                            Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/add-event" 
                            className={({ isActive }) => isActive ? activeLinkClass : defaultLinkClass}
                        >
                            Add Event
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/my-events" 
                            className={({ isActive }) => isActive ? activeLinkClass : defaultLinkClass}
                        >
                            My Events
                        </NavLink>
                    </li>
                </ul>

                <div className="flex items-center">
                    {user ? (
                        <div className="relative" ref={dropdownRef}>
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="h-10 w-10 rounded-full cursor-pointer border-2 border-transparent hover:border-blue-500"
                                onClick={() => setShowDropdown(!showDropdown)}
                            />
                            {showDropdown && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                    <div className="px-4 py-2 border-b">
                                        <p className="text-sm font-medium text-gray-700">{user.name}</p>
                                    </div>
                                    <button
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300">
                            login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;