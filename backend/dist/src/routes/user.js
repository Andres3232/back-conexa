"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const validar_campos_1 = require("../middlewares/validar-campos");
const validation_1 = require("../middlewares/validation");
const router = express_1.default.Router();
router.get('/', user_1.getUser);
router.post('/create', validation_1.validation, validar_campos_1.validarCampos, user_1.userCreate);
exports.default = router;
