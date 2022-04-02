"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    PORT: process.env.PORT || 8080,
    MONGO_USER: process.env.MONGO_USER || '',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || '',
    MONGO_URL: process.env.MONGO_URL || '',
    DB_NAME: process.env.DB_NAME || '',
    SECRETORPRIVATEKEY: process.env.SECRETORPRIVATEKEY || '',
};
