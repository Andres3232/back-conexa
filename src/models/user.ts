import { mongoose } from '../database';

const Schema = mongoose.Schema;

const storeSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo:{
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    password:{
        type: String,
        required: [true, 'El password es obligatorio']
    },
    rol:{
        type: String,
        required:true,
        default: 'USER_ROLE',
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
});

storeSchema.methods.toJSON = function() {
    const { __v,password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}
const user = mongoose.model('user', storeSchema);

export { user };
