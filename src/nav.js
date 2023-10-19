import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-info d-flex justify-content-between">
            <div className="container-fluid">
                <NavLink to="/" className="link-opacity-50-hover link-underline-light fs-3" >
                    Home
                </NavLink>
                <NavLink to="fires" className="link-opacity-50-hover link-underline-light fs-3">
                    Fires
                </NavLink>
                <NavLink to="about" className="link-opacity-50-hover link-underline-light fs-3">
                    About
                </NavLink>
            </div>
        </nav>
    )
}