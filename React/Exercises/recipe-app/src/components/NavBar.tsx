
import { Link } from "react-router-dom";

const NavBar = () => {
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/random-meal'>Random Meal</Link></li>
            <li><Link to='/meal-search'>Meal Search</Link></li>
        </ul>
    </nav>
};

export default NavBar;


