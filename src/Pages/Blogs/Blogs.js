import "./Blogs.css";

//UI components
import BlogCard from "../../Components/NavBar/Widgets/BlogCards/BlogCard";
//import BlogPage from "./BlogPage";

//JSON
import BlogContents from "../../BlogContents/BlogContents";

//npm packages
import {  Link } from "react-router-dom";

const Blogs = (props)=>{
    const BlogCards = BlogContents.map( (blog)=>{
        return (
            <Link key={blog.id} to={`/blogs/${blog.id}`} >
                <BlogCard title={blog.title} />
            </Link>
        )
    } )

    /* const BlogPages = BlogContents.map( (blog)=>{
        console.log(blog.content)
        return (
            <Route key={blog.id} exact path={"/blog" + blog.id} >
                <BlogPage title={blog.title} content={blog.content} />
            </Route>
        )
    } ) */
    return (
        <div className="blogs" >

            <div style={{flex: 1}} ></div>

            <div className="content" >
                {BlogCards}
            </div>

            <div style={{flex: 1}} ></div>

        </div>
    )
}

export default Blogs;