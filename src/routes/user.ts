import express from 'express';
import {userCreate} from '../controllers/user';

const router = express.Router();


router.post('/', userCreate);


export default router;
