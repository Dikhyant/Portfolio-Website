import "./Tile.css";

const Tile = (props)=>{
    return (
        <div className="tile" >
            <div className="tile-image" >
                <img src={props.img} alt="not found" />
            </div>
            <div className="tile-title" >
                {props.title}
            </div>
        </div>
    )
}

export default Tile;