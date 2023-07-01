import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { user_info_route } from "./routes/user_info/user_info_route";
import { media_info_route } from "./routes/media_info/media_info_route";
import { contact_info_route } from "./routes/contact_info/contact_info_route";
import { education_info_route } from "./routes/education_info/education_info_route";
import { experience_info_route } from "./routes/experience_info/experience_info_route";
import { skill_info_route } from "./routes/skill_info/skill_info_route";
import { project_info_route } from "./routes/project_info/project_info_route";
const PORT = process.env.APP_PORT || 3000;
export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	"/user",
	user_info_route,
	media_info_route,
	contact_info_route,
	education_info_route,
	experience_info_route,
	skill_info_route,
	project_info_route
);
// 404 Not Found route
app.use((req, res, next) => {
	res.status(404).json({ error: "Not Found" });
});

// Todo: check the connection to the db before starting the app
// CONNECTION AND START THE APP
(() => {
	try {
		app.listen(PORT, () => {
			console.log(`App is listening on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
})();
