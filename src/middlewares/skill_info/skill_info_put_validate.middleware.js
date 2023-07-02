"use strict";
exports.__esModule = true;
exports.skill_info_put_validation = void 0;
var express_validator_1 = require("express-validator");
exports.skill_info_put_validation = [
    (0, express_validator_1.body)("name")
        .trim()
        .notEmpty()
        .toLowerCase()
        .matches(/^[^<>&]*$/)
        .isLength({ max: 32 })
        .withMessage("company_name is requried and its max length is : 32")
        .optional({ nullable: true }),
];
