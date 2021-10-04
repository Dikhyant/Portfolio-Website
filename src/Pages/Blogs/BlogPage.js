import "./BlogPage.css";

import BlogContents from "../../BlogContents/BlogContents";

import { useParams } from "react-router-dom";

const BlogPage = (props)=>{
    var BlogContent , BlogTitle ;
    const { id } = useParams();

    for(var i = 0 ; i < BlogContents.length ; i++){
        if( BlogContents[i].id === parseInt(id) ){
            BlogTitle = BlogContents[i].title;
            BlogContent = BlogContents[i].content;
            break;
        }
    }
    return (
        <div className="blog-page" >
            <div style={{flex: 1}} ></div>

            <div className="content" >
                <div className="blog-title-section" >
                    <div style={{flex: 1}} ></div>

                    <div className="blog-title" >
                        {BlogTitle}
                    </div>

                    <div style={{flex: 1}} ></div>
                </div>
                
                {BlogContent}
            </div>
            
            <div style={{flex: 1}} ></div>
        </div>
    )
}

export default BlogPage;