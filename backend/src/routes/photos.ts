import express from 'express';
import {getPhotos} from '../controllers/getPhotos';
import { validarJWT } from '../middlewares/validar-jwt';
import { esAdminRole } from '../middlewares/validar-roles';

const router = express.Router();


router.get('/', validarJWT ,esAdminRole ,getPhotos);


export default router;
