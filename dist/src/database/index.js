"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoose = exports.connect_mongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.mongoose = mongoose_1.default;
const environment_1 = require("../configuration/environment");
const uri = `mongodb+srv://${environment_1.environment.MONGO_USER}:${environment_1.environment.MONGO_PASSWORD}@${environment_1.environment.MONGO_URL}/${environment_1.environment.DB_NAME || ''}`;
console.log('uri', uri);
mongoose_1.default.connect(uri);
const connect_mongo = () => {
    const db = mongoose_1.default.connection;
    db.on('error', (err) => {
        console.error(`MongoDB ✖, ${err}`);
    });
    db.once('connected', () => {
        console.info('✔ MongoDB Connected!');
    });
    db.on('reconnected', () => {
        console.info('MongoDB reconnected ✔!');
    });
    db.on('reconnecting', () => {
        console.info('MongoDB reconectando...');
    });
};
exports.connect_mongo = connect_mongo;
