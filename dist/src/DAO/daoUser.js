"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDAO = void 0;
const user_1 = require("../models/user");
exports.userDAO = {
    add: (payload) => {
        return user_1.user.create(payload);
    },
    getAll: () => {
        return user_1.user.find();
    },
    getOne: (correo) => {
        return user_1.user.findOne({ correo });
    },
    getOneID: (id) => {
        return user_1.user.findById({ _id: id });
    },
    update: (id, payload) => {
        return user_1.user.updateOne({ _id: id }, payload);
    },
    delete: (id) => {
        return user_1.user.deleteOne({ _id: id });
    },
};
