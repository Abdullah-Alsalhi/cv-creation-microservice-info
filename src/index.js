"use strict";
exports.__esModule = true;
exports.app = void 0;
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var express_1 = require("express");
var user_info_route_1 = require("./routes/user_info/user_info_route");
var media_info_route_1 = require("./routes/media_info/media_info_route");
var contact_info_route_1 = require("./routes/contact_info/contact_info_route");
var education_info_route_1 = require("./routes/education_info/education_info_route");
var experience_info_route_1 = require("./routes/experience_info/experience_info_route");
var skill_info_route_1 = require("./routes/skill_info/skill_info_route");
var project_info_route_1 = require("./routes/project_info/project_info_route");
var PORT = process.env.APP_PORT || 3000;
exports.app = (0, express_1["default"])();
exports.app.use(express_1["default"].json());
exports.app.use(express_1["default"].urlencoded({ extended: true }));
exports.app.use("/user", user_info_route_1.user_info_route, media_info_route_1.media_info_route, contact_info_route_1.contact_info_route, education_info_route_1.education_info_route, experience_info_route_1.experience_info_route, skill_info_route_1.skill_info_route, project_info_route_1.project_info_route);
// 404 Not Found route
exports.app.use(function (req, res, next) {
    res.status(404).json({ error: "Not Found" });
});
// Todo: check the connection to the db before starting the app
// CONNECTION AND START THE APP
(function () {
    try {
        exports.app.listen(PORT, function () {
            console.log("App is listening on port ".concat(PORT));
        });
    }
    catch (error) {
        console.log(error);
    }
})();
