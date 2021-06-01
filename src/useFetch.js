import { useState, useEffect } from 'react';

const useFetch = () => {
        const [data, setData] = useState(0);
        useEffect(() => {
               console.log('data changed', data) 
        })

        return { data , setData};
}

export default useFetch;