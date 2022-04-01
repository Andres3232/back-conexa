import jwt from 'jsonwebtoken'
import { environment } from '../configuration/environment';

export const generarJWT = ( uid = '' ) => {

    return new Promise( (resolve, reject) => {

        const payload = { uid };

        jwt.sign( payload, environment.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        },( err, token ) => {

            if ( err ) {
                console.log(err);
                reject( 'No se pudo gener el token' );
            } else {
                resolve( token );
            }

        })

    })

}




