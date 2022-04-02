
import { Request } from 'express';
import axios from 'axios';

const getPostsServices = async (req: Request) => {

    const url = `https://jsonplaceholder.typicode.com/posts`;
    
    const { data } = await axios.get(url).catch((err) => {
        err.origin = 'Error getting Photos';
        throw err;
    });
 
    return data;
};

export { getPostsServices };
