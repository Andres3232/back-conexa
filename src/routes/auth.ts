import express from 'express';
import {login} from '../controllers/login';
import { validation } from '../middlewares/validation';

const router = express.Router();


router.post('/',validation, login);


export default router;
