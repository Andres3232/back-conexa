
import { Request, Response, NextFunction } from 'express';
import { getPhotosServices } from '../services/getPhotosService';



const getPhotos =async (req: Request, res: Response, next: NextFunction): Promise<Response | void>=> {
    
   try {
       
    const photos = await getPhotosServices(req)
    res.status(200).json({photos})


   } catch (error) {
      console.log(error);
       
   }
}


export {getPhotos}