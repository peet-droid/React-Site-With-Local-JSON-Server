import { Link } from "react-router-dom";

const BlogList = ({blogs , handleDelete}) => {
        return (
                <div className="blog-list">
                        {blogs.map((blog, i) => {return (
                                <div className="blog-preview" key={blog.id}>
                                        <h2>Blog No. {blog.id}</h2>
                                        <p>{blog.body}</p>
                                        <p>written by {blog.author}</p>
                                        <button onClick={()=>handleDelete(blog.id)}>Delete</button>
                                        <Link to={`/detail/${blog.id}`}><button>Detail</button></Link>
                                </div>
                        )})}
                </div>
        );
}

export default BlogList;