
import { Request, Response, NextFunction } from 'express';
import { userDAO } from '../DAO/daoUser';
import {generarJWT} from '../helpers/generarJWT'
import bcryptjs from 'bcryptjs'


const login =async (req: Request, res: Response, next: NextFunction): Promise<Response | void>=> {
    
    const { correo, password } = req.body;

    try {
      
        // Verificar si el email existe
        const user = await userDAO.getOne( correo );
        
        if ( !user ) {
            return res.status(400).json({
                msg: 'El correo no es correcto'
            });
        }

        // SI el usuario está activo
        //@ts-ignore
        if ( !user.estado ) {
            return res.status(400).json({
                msg: 'El usuario tiene estado false'
            });
        }

        const validPassword = bcryptjs.compareSync( password, user.password );
        if ( !validPassword ) {
            return res.status(400).json({
                msg: 'Password no es correcto'
            });
        }

        // Generar el JWT
        //@ts-ignore
        const token = await generarJWT( user._id );

        res.json({
            user,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }   
}


export {login}