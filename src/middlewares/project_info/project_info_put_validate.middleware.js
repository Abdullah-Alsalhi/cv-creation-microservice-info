"use strict";
exports.__esModule = true;
exports.project_info_put_validation = void 0;
var express_validator_1 = require("express-validator");
exports.project_info_put_validation = [
    (0, express_validator_1.body)("name")
        .trim()
        .notEmpty()
        .toLowerCase()
        .matches(/^[^<>&]*$/)
        .isLength({ max: 255 })
        .optional({ nullable: true })
        .withMessage("company_name is requried and its max length is : 255"),
    (0, express_validator_1.body)("description")
        .trim()
        .notEmpty()
        .toLowerCase()
        .matches(/^[^<>&]*$/)
        .isLength({ max: 255 })
        .optional({ nullable: true })
        .withMessage("description is requried and its max length is : 255"),
];
