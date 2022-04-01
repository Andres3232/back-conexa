"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const express_validator_1 = require("express-validator");
exports.validation = [
    express_validator_1.check('password', 'El password es obligatorio y debe ser mas de 6 letras').isLength({ min: 6 }),
    express_validator_1.check('correo', 'El correo no es valido').isEmail(),
];
