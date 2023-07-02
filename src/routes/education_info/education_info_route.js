"use strict";
exports.__esModule = true;
exports.education_info_route = void 0;
var express_1 = require("express");
exports.education_info_route = (0, express_1.Router)();
var passport_1 = require("passport");
var authentcateJWTtoken_middleware_1 = require("../../middlewares/authentcateJWTtoken.middleware");
var checkUserJWT_middleware_1 = require("../../middlewares/checkUserJWT.middleware");
var get_education_info_controller_1 = require("../../controllers/education_info/get_education_info.controller");
var post_education_info_controller_1 = require("../../controllers/education_info/post_education_info.controller");
var put_education_info_controller_1 = require("../../controllers/education_info/put_education_info.controller");
var education_info_post_validate_middleware_1 = require("../../middlewares/education_info/education_info_post_validate.middleware");
var education_info_validated_fields_middleware_1 = require("../../middlewares/education_info/education_info_validated_fields.middleware");
var education_info_put_validate_middleware_1 = require("../../middlewares/education_info/education_info_put_validate.middleware");
passport_1["default"].use(checkUserJWT_middleware_1.JWTcheck);
exports.education_info_route
    .route("/edu")
    .get(authentcateJWTtoken_middleware_1.authenticateJWTtoken, get_education_info_controller_1.education_info_get_controller)
    .post(authentcateJWTtoken_middleware_1.authenticateJWTtoken, education_info_post_validate_middleware_1.education_info_post_validation, education_info_validated_fields_middleware_1.education_info_validated_fields, post_education_info_controller_1.education_info_post_controller);
exports.education_info_route
    .route("/edu/:id")
    .put(authentcateJWTtoken_middleware_1.authenticateJWTtoken, education_info_put_validate_middleware_1.education_info_put_validation, education_info_validated_fields_middleware_1.education_info_validated_fields, put_education_info_controller_1.education_info_put_controller);
