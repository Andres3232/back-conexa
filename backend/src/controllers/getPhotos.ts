
import { Request, Response, NextFunction } from 'express';
import { paginateResults } from '../helpers/paginateResults';
import { getPhotosServices } from '../services/getPhotosService';



const getPhotos =async (req: Request, res: Response, next: NextFunction): Promise<Response | void>=> {
    
   try {

     const photos = await getPhotosServices(req);
     
     const results = paginateResults(req,photos);

     res.status(200).json(results);


   } catch (error) {
      console.log(error);
       
   };
};


export {getPhotos};