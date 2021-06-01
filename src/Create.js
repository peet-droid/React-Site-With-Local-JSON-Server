import { useState } from "react";

import { useHistory } from "react-router-dom";

const Create = () => {

        const [title, setTitle] = useState(null)

        const [description, setDescription] = useState(null)

        const [author, setAuthor] = useState(null)

        let history = useHistory()

        const handleSubmit = (e)=>{
                e.preventDefault() 
                const newBlog = {
                        author,
                        title,
                        body:description,
                       
                }
                fetch('http://localhost:8000/blogs', {
                        method: 'POST',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(newBlog)
                })

                history.push("/")

        }

        return ( 
                <div className="create">
                        <h2>Add a new Blog</h2>
                        <form onSubmit={handleSubmit}>
                                <label>Blog Title</label>
                                <input type="text" value={title}
                                 onChange = {(e)=>setTitle(e.target.value)}
                                 required/>
                                <label>Blog Description</label>
                                <textarea required value={description} 
                                 onChange={(e)=>setDescription(e.target.value)}/>
                                <label>Blog Author</label>
                                <input type="text" value={author}
                                 onChange={(e)=>setAuthor(e.target.value)}
                                 required/>
                                <button onClick={handleSubmit}>Add Blog</button>
                        </form>
                        <p>{title}</p>
                        <p>{author}</p>
                </div>
         );
}
 
export default Create;