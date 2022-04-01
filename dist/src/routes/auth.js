"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_1 = require("../controllers/login");
const validation_1 = require("../middlewares/validation");
const router = express_1.default.Router();
router.post('/', validation_1.validation, login_1.login);
exports.default = router;
