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
exports.login = void 0;
const daoUser_1 = require("../DAO/daoUser");
const generarJWT_1 = require("../helpers/generarJWT");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, password } = req.body;
    try {
        // Verificar si el email existe
        const user = yield daoUser_1.userDAO.getOne(correo);
        if (!user) {
            return res.status(400).json({
                msg: 'El correo no es correcto'
            });
        }
        // SI el usuario está activo
        //@ts-ignore
        if (!user.estado) {
            return res.status(400).json({
                msg: 'El usuario tiene estado false'
            });
        }
        const validPassword = bcryptjs_1.default.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Password no es correcto'
            });
        }
        // Generar el JWT
        //@ts-ignore
        const token = yield generarJWT_1.generarJWT(user._id);
        res.json({
            user,
            token
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.login = login;
