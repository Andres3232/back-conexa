import express from 'express';
import {getPosts} from '../controllers/getPosts';
import { validarJWT } from '../middlewares/validar-jwt';

const router = express.Router();


router.get('/',validarJWT, getPosts);


export default router;
