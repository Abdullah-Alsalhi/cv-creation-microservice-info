"use strict";
exports.__esModule = true;
exports.media_info_route = void 0;
var express_1 = require("express");
exports.media_info_route = (0, express_1.Router)();
var passport_1 = require("passport");
var authentcateJWTtoken_middleware_1 = require("../../middlewares/authentcateJWTtoken.middleware");
var checkUserJWT_middleware_1 = require("../../middlewares/checkUserJWT.middleware");
var media_info_post_put_validate_middleware_1 = require("../../middlewares/media_info/media_info_post_put_validate.middleware");
var media_info_validated_fields_middleware_1 = require("../../middlewares/media_info/media_info_validated_fields.middleware");
var post_media_info_controller_1 = require("../../controllers/media_info/post_media_info.controller");
var put_media_info_controller_1 = require("../../controllers/media_info/put_media_info.controller");
var get_media_info_controller_1 = require("../../controllers/media_info/get_media_info.controller");
passport_1["default"].use(checkUserJWT_middleware_1.JWTcheck);
exports.media_info_route
    .route("/media")
    .get(authentcateJWTtoken_middleware_1.authenticateJWTtoken, get_media_info_controller_1.media_info_get_controller)
    .post(authentcateJWTtoken_middleware_1.authenticateJWTtoken, media_info_post_put_validate_middleware_1.media_info_post_put_validation, media_info_validated_fields_middleware_1.media_info_validated_fields, post_media_info_controller_1.media_info_post_controller);
exports.media_info_route
    .route("/media/:id")
    .put(authentcateJWTtoken_middleware_1.authenticateJWTtoken, media_info_post_put_validate_middleware_1.media_info_post_put_validation, media_info_validated_fields_middleware_1.media_info_validated_fields, put_media_info_controller_1.media_info_put_controller);
