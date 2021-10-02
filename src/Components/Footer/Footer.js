import "./Footer.css";


const Footer = () => {
    return (
        <div className="footer-bar" >
            <div style={{flex: 1}}></div>

            <div className="nav-tabs">
                <div className="links" ><a href="https://github.com/Dikhyant" >Git Hub</a></div>
                <div className="links" ><a href="https://www.linkedin.com/in/dikhyantkrishnadalai" >Linked In</a></div>
            </div>
            <div style={{flex: 1}}></div>

        </div>
    )
}

export default Footer;