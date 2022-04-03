
import { Request, Response, NextFunction } from 'express';
import { userDAO } from '../DAO/daoUser';
import bcryptjs from 'bcryptjs'


const getUser =async (req: Request, res: Response, next: NextFunction): Promise<Response | void>=> {
    
    try {

        const users = await userDAO.getAll();
        return res.status(200).json({users});
        
    } catch (error) {
        console.log(error);
    };

};
const userCreate =async (req: Request, res: Response, next: NextFunction): Promise<Response | void>=> {
    
    try {

        const salt = bcryptjs.genSaltSync();
        req.body.password = bcryptjs.hashSync( req.body.password, salt );

        const response = await userDAO.add(req.body);
        return res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
    }

};


export {userCreate,getUser};