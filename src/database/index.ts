import mongoose from 'mongoose';
import  {environment}  from '../configuration/environment'

const uri = `mongodb+srv://${environment.MONGO_USER}:${environment.MONGO_PASSWORD}@${environment.MONGO_URL}/${environment.DB_NAME || ''}`;

console.log('uri',uri);


mongoose.connect(uri);

export const connect_mongo = () => {
    const db = mongoose.connection;

    db.on('error', (err) => {
        console.error(`MongoDB ✖, ${err}`);
    });

    db.once('connected', () => {
        console.info('✔ MongoDB Connected!');
    });

    db.on('reconnected', () => {
        console.info('MongoDB reconnected ✔!');
    });

    db.on('reconnecting', () => {
        console.info('MongoDB reconectando...');
    });
};

export { mongoose };
