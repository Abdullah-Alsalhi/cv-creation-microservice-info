"use strict";
exports.__esModule = true;
exports.contact_info_route = void 0;
var express_1 = require("express");
exports.contact_info_route = (0, express_1.Router)();
var passport_1 = require("passport");
var authentcateJWTtoken_middleware_1 = require("../../middlewares/authentcateJWTtoken.middleware");
var checkUserJWT_middleware_1 = require("../../middlewares/checkUserJWT.middleware");
var contact_info_post_put_validate_middleware_1 = require("../../middlewares/contact_info/contact_info_post_put_validate.middleware");
var contact_info_validated_fields_middleware_1 = require("../../middlewares/contact_info/contact_info_validated_fields.middleware");
var post_contact_info_controller_1 = require("../../controllers/contact_info/post_contact_info.controller");
var get_contact_info_controller_1 = require("../../controllers/contact_info/get_contact_info.controller");
var put_contact_info_controller_1 = require("../../controllers/contact_info/put_contact_info.controller");
passport_1["default"].use(checkUserJWT_middleware_1.JWTcheck);
exports.contact_info_route
    .route("/contact")
    .get(authentcateJWTtoken_middleware_1.authenticateJWTtoken, get_contact_info_controller_1.contact_info_get_controller)
    .post(authentcateJWTtoken_middleware_1.authenticateJWTtoken, contact_info_post_put_validate_middleware_1.contact_info_post_put_validation, contact_info_validated_fields_middleware_1.contact_info_validated_fields, post_contact_info_controller_1.contact_info_post_controller);
exports.contact_info_route
    .route("/contact/:id")
    .put(authentcateJWTtoken_middleware_1.authenticateJWTtoken, contact_info_post_put_validate_middleware_1.contact_info_post_put_validation, contact_info_validated_fields_middleware_1.contact_info_validated_fields, put_contact_info_controller_1.contact_info_put_controller);
