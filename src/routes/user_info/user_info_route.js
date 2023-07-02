"use strict";
exports.__esModule = true;
exports.user_info_route = void 0;
var express_1 = require("express");
exports.user_info_route = (0, express_1.Router)();
var passport_1 = require("passport");
var authentcateJWTtoken_middleware_1 = require("../../middlewares/authentcateJWTtoken.middleware");
var checkUserJWT_middleware_1 = require("../../middlewares/checkUserJWT.middleware");
var user_info_post_validate_middleware_1 = require("../../middlewares/user_info/user_info_post_validate.middleware");
var user_info_validated_fields_middleware_1 = require("../../middlewares/user_info/user_info_validated_fields.middleware");
var post_user_info_controller_1 = require("../../controllers/user_info/post_user_info.controller");
var put_user_info_controller_1 = require("../../controllers/user_info/put_user_info.controller");
var user_info_put_validate_middleware_1 = require("../../middlewares/user_info/user_info_put_validate.middleware");
var get_user_info_controller_1 = require("../../controllers/user_info/get_user_info.controller");
passport_1["default"].use(checkUserJWT_middleware_1.JWTcheck);
exports.user_info_route
    .route("/info")
    .get(authentcateJWTtoken_middleware_1.authenticateJWTtoken, get_user_info_controller_1.user_info_get_controller)
    .post(authentcateJWTtoken_middleware_1.authenticateJWTtoken, user_info_post_validate_middleware_1.user_info_post_validation, user_info_validated_fields_middleware_1.user_info_validated_fields, post_user_info_controller_1.user_info_post_controller);
exports.user_info_route
    .route("/info/:id")
    .put(authentcateJWTtoken_middleware_1.authenticateJWTtoken, user_info_put_validate_middleware_1.user_info_put_validation, user_info_validated_fields_middleware_1.user_info_validated_fields, put_user_info_controller_1.user_info_put_controller);
