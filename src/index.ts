import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { userAuth } from './routes/auth.route';
const PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', userAuth);

// CONNECTION AND START THE APP
(() => {
    try {
        app.listen(PORT, () => {
            console.log(`App is listenting on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
})();