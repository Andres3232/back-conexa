import express from 'express';
import {getPhotos} from '../controllers/getPhotos';
import { validarJWT } from '../middlewares/validar-jwt';

const router = express.Router();


router.get('/', validarJWT  ,getPhotos);


export default router;
