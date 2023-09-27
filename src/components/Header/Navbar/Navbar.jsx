
import { NavLink } from 'react-router-dom';
import Logo from './Logo';


const Navbar = () => {
    return (
        <div className=' lg:mx-24 lg:mt-6'>
            <div className="navbar relative bg-base-100 px-5 flex flex-col md:flex-row lg:flex-row justify-between items-center">
                <div className="">
                    <Logo></Logo>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 font-semibold text-base flex-col md:flex-row lg:flex-row">
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-black bg-green-500 px-5 py-2 rounded text-medium" : "text-medium px-5 py-2"} >Home</NavLink>
                        <NavLink to="/donation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-black bg-green-500 px-5 py-2 rounded text-medium" : "text-medium px-5 py-2"} >Donation</NavLink>
                        <NavLink to="/statistics" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-black bg-green-500 px-5 py-2 rounded text-medium" : "text-medium px-5 py-2"} >Statistics</NavLink>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;