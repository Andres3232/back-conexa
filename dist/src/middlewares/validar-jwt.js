"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarJWT = void 0;
const environment_1 = require("../configuration/environment");
const daoUser_1 = require("../DAO/daoUser");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validarJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        });
    }
    try {
        //@ts-ignore
        const { uid } = jsonwebtoken_1.default.verify(token, environment_1.environment.SECRETORPRIVATEKEY);
        // leer el usuario que corresponde al uid
        const user = yield daoUser_1.userDAO.getOneID(uid);
        if (!user) {
            //@ts-ignore
            return res.status(401)({
                msg: ' -user no existe DB'
            });
        }
        //Verificar si el uid tiene estado en true
        if (!user.estado) {
            return res.status(401).json({
                msg: '-user con estado:false'
            });
        }
        //@ts-ignore
        req.user = user;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no valido'
        });
    }
});
exports.validarJWT = validarJWT;
