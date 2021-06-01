import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';

const BlogDetails = () => {
        const { id } = useParams()
        const [blog, setBlog] = useState(null)
        useEffect(() => {
                axios.get(`http://localhost:8000/blogs/${id}`)
                        .then((response) => {
                                setBlog(response.data)
                                console.log(blog)
                        })
                        .catch(() => {
                                console.error('data not found');
                        })
        }, [id])

        const handleDelete = ()=> {
                console.log()
        }

        return (
                <div>
                        {blog &&( 
                                <article>
                                        <h2>Blog No. {blog.id}</h2>
                                        <p>{blog.body}</p>
                                        <p>written by {blog.author}</p>
                                </article>        
                        )}
                </div>
        );
}

export default BlogDetails;