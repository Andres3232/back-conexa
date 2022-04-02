require('dotenv').config(); 
import { environment } from './configuration/environment';
import server from './server/index';


const PORT = environment.PORT;

server.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));
