
import { mongoose } from '../database';
import { user } from '../models/user';

export const userDAO = {
    add: (payload: any) => {
        return user.create(payload);
    },
    getAll: () => {
        return user.find();
    },

    getOne: (correo: any) => {
        return user.findOne({ correo });
    },
    getOneID: (id: any) => {
        return user.findById({ _id:id});
    },

    update: (id: string, payload: mongoose.UpdateWithAggregationPipeline) => {
        return user.updateOne({ _id: id }, payload);
    },

    delete: (id: string) => {
        return user.deleteOne({ _id: id });
    },
};
