import express, { Request, Response } from 'express';
import cors from 'cors';
//import swagger from '../../swagger';
import auth from '../routes/auth';
import user from '../routes/user'
import photos from '../routes/photos'
import posts from '../routes/posts'

//import { healthCheck } from '../controllers/health';

import { connect_mongo } from '../database';


const server = express();
//swagger('/swagger', server);
server.use(express.json());

server.use(cors());
//server.get('/health', healthCheck);
server.get('/', (req: Request, res: Response) => res.send('Movistar DAO nba is Up!'));

server.use('/api/user', user);
server.use('/api/login', auth);
server.use('/api/photos', photos);
server.use('/api/posts', posts);

connect_mongo();

export default server;
