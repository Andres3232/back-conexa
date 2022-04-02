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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPhotos = void 0;
const getPhotosService_1 = require("../services/getPhotosService");
const getPhotos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const photos = yield getPhotosService_1.getPhotosServices(req);
        res.status(200).json({ photos });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getPhotos = getPhotos;
