import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NavBar() {
    return (
        <nav className=" fixed top-4 right-4 z-50"> 
            <Link to="/" className="text-gray-800 hover:text-gray-600 text-3xl">
                <FaHome />
            </Link>
        </nav>
    );
}

export default NavBar;
