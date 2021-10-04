import "./BlogCard.css"

const BlogCard = (props) => {
    return (
        <div className="card-body" >
            <div className="card-texts" >
                <div className="card-title" >{props.title}</div>
                <div className="card-description" >{props.description}</div>
            </div>


            {/* <div className="card-btn-section">
                <div style={{flex: 3}} ></div>

                <div style={{display: "flex", flex: 0.7, flexDirection: "row"}}>
                    <div className="link-btn" >
                        <a href={props.projectLink} >Link</a>
                    </div>

                    <div className="source-code-link-btn" >
                        <a href={props.sourceCodeLink} >Source Code</a>
                    </div>
                </div>

                <div style={{flex: 1.2}} ></div>
            </div> */}
        </div>
    )
}

export default BlogCard;