import "./HomePage.css";
import ReactLogo from "../../Assets/Images/React logo.png"

import Tile from "../../Components/NavBar/Widgets/Tile/Tile";

const HomePage = ()=>{
    return (
        <div className="home-page" >
            <div className="image" ><img src={ReactLogo} alt="Not found" /></div>

            <div style={{
                fontSize: "2rem",
                color: "#5B5B5B",
                fontWeight: "bolder"
            }} >Languages I'm experienced in</div>

            <div className="programming-languages" >
                
                <Tile 
                    title="C++"
                    img={require("../../Assets/Images/CPP_logo.png").default}
                />
                <Tile 
                    title="JS"
                    img={require("../../Assets/Images/JS_logo.png").default}
                />
                <Tile 
                    title="C#"
                    img={require("../../Assets/Images/CS_logo.png").default}
                />
                <Tile 
                    title="Java"
                    img={require("../../Assets/Images/Java_logo.png").default}
                />
                <Tile 
                    title="Python"
                    img={require("../../Assets/Images/Python_logo.png").default}
                />
            </div>
        </div>
    )
}

export default HomePage;