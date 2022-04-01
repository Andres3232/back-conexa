
import { Request, Response, NextFunction } from 'express';
import { userDAO } from '../DAO/daoUser';
import bcryptjs from 'bcryptjs'


const userCreate =async (req: Request, res: Response, next: NextFunction): Promise<Response | void>=> {
    
    try {

        const salt = bcryptjs.genSaltSync();
        req.body.password = bcryptjs.hashSync( req.body.password, salt );

        const response = await userDAO.add(req.body);
        return res.status(200).json(response);
        
    } catch (error) {
        next(error);
    }

}


export {userCreate}