require('dotenv').config(); //LIIBRERIA PARA .ENV
import server from './server/index';
import { environment } from './configuration/environment';


const PORT = environment.PORT;

server.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));