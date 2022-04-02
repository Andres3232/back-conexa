
import { Request, Response, NextFunction } from 'express';
import { getPostsServices } from '../services/getPostsService';



const getPosts =async (req: Request, res: Response, next: NextFunction): Promise<Response | void>=> {
    
   try {
       
    const Posts = await getPostsServices(req)
    res.status(200).json({Posts})


   } catch (error) {
      console.log(error);
       
   }
}


export {getPosts}