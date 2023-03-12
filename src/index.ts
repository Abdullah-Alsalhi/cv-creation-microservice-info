import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from 'body-parser';
import { userAuth } from './routes/auth.route';
const PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', userAuth);

// CONNECTION AND START THE APP
(async () => {
    try {
        app.listen(PORT, () => {
            console.log(`App is listenting on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
})();