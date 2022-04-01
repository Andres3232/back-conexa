import express from 'express';
import {getPosts} from '../controllers/getPosts';
import { validarJWT } from '../middlewares/validar-jwt';
import { esAdminRole } from '../middlewares/validar-roles';

const router = express.Router();


router.get('/',validarJWT,esAdminRole, getPosts);


export default router;
