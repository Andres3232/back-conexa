
import {check} from 'express-validator'

export const validation = [
    check('password', 'El password es obligatorio y debe ser mas de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es valido').isEmail(),
]
