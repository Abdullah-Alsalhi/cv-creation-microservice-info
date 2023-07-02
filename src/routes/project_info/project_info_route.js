"use strict";
exports.__esModule = true;
exports.project_info_route = void 0;
var express_1 = require("express");
exports.project_info_route = (0, express_1.Router)();
var passport_1 = require("passport");
var authentcateJWTtoken_middleware_1 = require("../../middlewares/authentcateJWTtoken.middleware");
var checkUserJWT_middleware_1 = require("../../middlewares/checkUserJWT.middleware");
var get_many_project_info_controller_1 = require("../../controllers/project_info/get_many_project_info.controller");
var post_project_info_controller_1 = require("../../controllers/project_info/post_project_info.controller");
var put_project_info_controller_1 = require("../../controllers/project_info/put_project_info.controller");
var project_info_post_validate_middleware_1 = require("../../middlewares/project_info/project_info_post_validate.middleware");
var project_info_validated_fields_middleware_1 = require("../../middlewares/project_info/project_info_validated_fields.middleware");
var project_info_put_validate_middleware_1 = require("../../middlewares/project_info/project_info_put_validate.middleware");
var get_single_project_info_controller_1 = require("../../controllers/project_info/get_single_project_info.controller");
passport_1["default"].use(checkUserJWT_middleware_1.JWTcheck);
exports.project_info_route
    .route("/project")
    .get(authentcateJWTtoken_middleware_1.authenticateJWTtoken, get_many_project_info_controller_1.project_info_get_many_controller)
    .post(authentcateJWTtoken_middleware_1.authenticateJWTtoken, project_info_post_validate_middleware_1.project_info_post_validation, project_info_validated_fields_middleware_1.project_info_validated_fields, post_project_info_controller_1.project_info_post_controller);
exports.project_info_route
    .route("/project/:id")
    .get(authentcateJWTtoken_middleware_1.authenticateJWTtoken, get_single_project_info_controller_1.project_info_get_single_controller)
    .put(authentcateJWTtoken_middleware_1.authenticateJWTtoken, project_info_put_validate_middleware_1.project_info_put_validation, project_info_validated_fields_middleware_1.project_info_validated_fields, put_project_info_controller_1.project_info_put_controller);
