import { Request, Response, NextFunction } from 'express';



 export const esAdminRole = (req: Request, res: Response, next: NextFunction) => {
    //@ts-ignore
    if ( !req.user ) {
        return res.status(500).json({
            msg: 'Se quiere verificar el rol sin validar el token primero'
        });
    }
    //@ts-ignore

    const { rol, nombre } = req.user;

    if( rol !== 'ADMIN_ROLE' ){
        return res.status(401).json({
            msg: `${ nombre } no es administrador-No puede hacer esto`
        });
    }

    next()
}

