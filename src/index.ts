import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { personInfoRoute } from "./routes/personInfo.route";
import { user_info_route } from "./routes/user_info/user_info_route";
const PORT = process.env.APP_PORT || 3000;
export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", user_info_route);
app.use("/info", personInfoRoute);

// Todo: check the connection to the db before starting the app
// CONNECTION AND START THE APP
(() => {
	try {
		app.listen(PORT, () => {
			console.log(`App is listenting on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
})();

function T(arg0: () => void) {
	throw new Error("Function not implemented.");
}
