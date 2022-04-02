import express from 'express';
import {getUser, userCreate} from '../controllers/user';
import { validarCampos } from '../middlewares/validar-campos';
import { validation } from '../middlewares/validation';


const router = express.Router();


router.get('/', getUser);

router.post('/create',validation,validarCampos, userCreate);


export default router;
