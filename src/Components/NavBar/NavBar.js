import "./NavBar.css";
import NavTab from "./Widgets/NavTab";

import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar" >
            <div className="site-title">Dikhyant Krishna Dalai</div>
            <div className="nav-tabs">
                <Link to="/" ><NavTab title="Home" /></Link>
                <Link to="/projects" ><NavTab title="Projects" /></Link>
                <Link to="/blogs" ><NavTab title="Blogs" /></Link>
            </div>
            <div style={{flex: 1}}></div>
        </div>
    )
}

export default NavBar;