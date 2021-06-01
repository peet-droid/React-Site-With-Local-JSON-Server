import { useState,useEffect } from 'react';
import Bloglist from './Bloglist';
import axios from 'axios';
import useFetch from './useFetch'


const Home = () => {

        const {data : changes, setData} = useFetch()

        const [blogs, setblogs] = useState(null)

        const [pending, setpending] = useState(true)
        const [eload, setEload] = useState(false)

        useEffect(() => {
                const controller = new AbortController();
        //     axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => {
        //             setblogs(res.data)
        //     })
        //     .catch((error) => {
        //           alert('There is an error')  
        //     })
                setTimeout(() => {
                        
                        fetch('http://localhost:8000/blogs', {signal: controller.signal})
                        .then(res => {
                                return res.json()
                        })
                        .then(data => {
                                setblogs(data)
                                setpending(false)
                        }).catch(e => {
                                console.log(e)
                                setpending(false)
                                setEload(true)

                        })
                }, 2000);

                return () => controller.abort();    

        }, [])
        const handleDelete = (id) => {
                const newBlogs = blogs.filter((blog) => blog.id !== id)
                setblogs(newBlogs)
                axios.delete(`http://localhost:8000/blogs/${id}`)
                .then((res)=>{
                        console.log(res.data)
                })
                .catch((error) => {
                        console.log(error)
                })

                setData(changes+1)
        }

        return (
                <div className="home">
                        {pending && <div>Loading...</div>}
                        {eload && <div>Big Error</div>}
                        {blogs && <Bloglist blogs = {blogs} handleDelete={handleDelete}/>}
                        <p>Changes: {changes}</p>
                        
                </div>

        );
}

export default Home;