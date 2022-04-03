
import { Request, Response, NextFunction, response } from 'express';
import { environment } from '../configuration/environment';
import { userDAO } from '../DAO/daoUser';
import jwt from 'jsonwebtoken'

export const validarJWT = async (req: Request, res: Response, next: NextFunction): Promise<Response | void>=> {

    const token = req.header('x-token');
    
    if( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        });
    };

    try {
     
        //@ts-ignore
        const { uid } = jwt.verify( token, environment.SECRETORPRIVATEKEY );

        // leer el usuario que corresponde al uid
        const user = await userDAO.getOneID(uid);

        if ( !user ) {
        //@ts-ignore
            return res.status(401) ({
                msg: ' -user no existe DB'
            });
        };

        //Verificar si el uid tiene estado en true
        if( !user.estado ) {
            return res.status(401).json({
                msg: '-user con estado:false'
            });
        };

        //@ts-ignore
        req.user = user;
        next();
        
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no valido'
        });
    };

};
