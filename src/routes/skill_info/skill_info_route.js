"use strict";
exports.__esModule = true;
exports.skill_info_route = void 0;
var express_1 = require("express");
exports.skill_info_route = (0, express_1.Router)();
var passport_1 = require("passport");
var authentcateJWTtoken_middleware_1 = require("../../middlewares/authentcateJWTtoken.middleware");
var checkUserJWT_middleware_1 = require("../../middlewares/checkUserJWT.middleware");
var get_many_skill_info_controller_1 = require("../../controllers/skill_info/get_many_skill_info.controller");
var post_skill_info_controller_1 = require("../../controllers/skill_info/post_skill_info.controller");
var put_skill_info_controller_1 = require("../../controllers/skill_info/put_skill_info.controller");
var skill_info_post_validate_middleware_1 = require("../../middlewares/skill_info/skill_info_post_validate.middleware");
var skill_info_validated_fields_middleware_1 = require("../../middlewares/skill_info/skill_info_validated_fields.middleware");
var skill_info_put_validate_middleware_1 = require("../../middlewares/skill_info/skill_info_put_validate.middleware");
var get_single_skill_info_controller_1 = require("../../controllers/skill_info/get_single_skill_info.controller");
passport_1["default"].use(checkUserJWT_middleware_1.JWTcheck);
exports.skill_info_route
    .route("/skill")
    .get(authentcateJWTtoken_middleware_1.authenticateJWTtoken, get_many_skill_info_controller_1.skill_info_get_many_controller)
    .post(authentcateJWTtoken_middleware_1.authenticateJWTtoken, skill_info_post_validate_middleware_1.skill_info_post_validation, skill_info_validated_fields_middleware_1.skill_info_validated_fields, post_skill_info_controller_1.skill_info_post_controller);
exports.skill_info_route
    .route("/skill/:id")
    .get(authentcateJWTtoken_middleware_1.authenticateJWTtoken, get_single_skill_info_controller_1.skill_info_get_single_controller)
    // todo: delete route to delete skill
    .put(authentcateJWTtoken_middleware_1.authenticateJWTtoken, skill_info_put_validate_middleware_1.skill_info_put_validation, skill_info_validated_fields_middleware_1.skill_info_validated_fields, put_skill_info_controller_1.skill_info_put_controller);
