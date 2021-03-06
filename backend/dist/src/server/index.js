"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_1 = __importDefault(require("../../swagger"));
const auth_1 = __importDefault(require("../routes/auth"));
const user_1 = __importDefault(require("../routes/user"));
const photos_1 = __importDefault(require("../routes/photos"));
const posts_1 = __importDefault(require("../routes/posts"));
const database_1 = require("../database");
const server = express_1.default();
server.use(express_1.default.json());
server.use(cors_1.default());
server.get('/', (req, res) => res.send('Challenge Andres Murgo is up!!'));
swagger_1.default('/swagger', server);
server.use('/api/user', user_1.default);
server.use('/api/login', auth_1.default);
server.use('/api/photos', photos_1.default);
server.use('/api/posts', posts_1.default);
database_1.connect_mongo();
exports.default = server;
