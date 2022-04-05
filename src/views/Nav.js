import './Nav.scss';
import {
    NavLink
} from "react-router-dom";
const Nav = () => {
    return (
        <>
            <div className="topnav">
                <NavLink activeclassname="active" to="/" exact="true" >Home</NavLink>
                <NavLink activeclassname="active" to="/timer">Timer App</NavLink>
                <NavLink activeclassname="active" to="todo">Todo App</NavLink>
                <NavLink activeclassname="active" to="/blog">Blog App</NavLink>
                <NavLink activeclassname="active" to="/secret">Secret</NavLink>
            </div>
        </>
    )
}

export default Nav;