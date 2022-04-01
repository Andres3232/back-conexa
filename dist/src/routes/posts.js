"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getPosts_1 = require("../controllers/getPosts");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_roles_1 = require("../middlewares/validar-roles");
const router = express_1.default.Router();
router.get('/', validar_jwt_1.validarJWT, validar_roles_1.esAdminRole, getPosts_1.getPosts);
exports.default = router;
