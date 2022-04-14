import express from 'express';
import  config  from 'config';
import mongoose  from 'mongoose';
import router from './routes/auth.routes.js'

const app = express();

app.use('/api/auth', router)

const PORT = config.get('port') || 5000;


async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(PORT, () => console.log(`app has been started on port ${PORT}`));
    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
}
start();

