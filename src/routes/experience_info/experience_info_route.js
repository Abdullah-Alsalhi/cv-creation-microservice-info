"use strict";
exports.__esModule = true;
exports.experience_info_route = void 0;
var express_1 = require("express");
exports.experience_info_route = (0, express_1.Router)();
var passport_1 = require("passport");
var authentcateJWTtoken_middleware_1 = require("../../middlewares/authentcateJWTtoken.middleware");
var checkUserJWT_middleware_1 = require("../../middlewares/checkUserJWT.middleware");
var get_many_experience_info_controller_1 = require("../../controllers/experience_info/get_many_experience_info.controller");
var post_experience_info_controller_1 = require("../../controllers/experience_info/post_experience_info.controller");
var put_experience_info_controller_1 = require("../../controllers/experience_info/put_experience_info.controller");
var experience_info_post_validate_middleware_1 = require("../../middlewares/experience_info/experience_info_post_validate.middleware");
var experience_info_validated_fields_middleware_1 = require("../../middlewares/experience_info/experience_info_validated_fields.middleware");
var experience_info_put_validate_middleware_1 = require("../../middlewares/experience_info/experience_info_put_validate.middleware");
var get_single_experience_info_controller_1 = require("../../controllers/experience_info/get_single_experience_info.controller");
passport_1["default"].use(checkUserJWT_middleware_1.JWTcheck);
exports.experience_info_route
    .route("/xp")
    .get(authentcateJWTtoken_middleware_1.authenticateJWTtoken, get_many_experience_info_controller_1.experience_info_get_many_controller)
    .post(authentcateJWTtoken_middleware_1.authenticateJWTtoken, experience_info_post_validate_middleware_1.experience_info_post_validation, experience_info_validated_fields_middleware_1.experience_info_validated_fields, post_experience_info_controller_1.experience_info_post_controller);
exports.experience_info_route
    .route("/xp/:id")
    .get(authentcateJWTtoken_middleware_1.authenticateJWTtoken, get_single_experience_info_controller_1.experience_info_get_single_controller)
    .put(authentcateJWTtoken_middleware_1.authenticateJWTtoken, experience_info_put_validate_middleware_1.experience_info_put_validation, experience_info_validated_fields_middleware_1.experience_info_validated_fields, put_experience_info_controller_1.experience_info_put_controller);
