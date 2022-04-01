
import { Request } from 'express';
import axios from 'axios';

const getPhotosServices = async (req: Request) => {

    const url = `https://jsonplaceholder.typicode.com/photos`;
    
    const { data } = await axios.get(url).catch((err) => {
        err.origin = 'Error getting Photos';
        throw err;
    });
 
    return data;
};

export { getPhotosServices };
