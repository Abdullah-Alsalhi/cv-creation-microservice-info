"use strict";
exports.__esModule = true;
exports.education_info_post_validation = void 0;
var express_validator_1 = require("express-validator");
exports.education_info_post_validation = [
    (0, express_validator_1.body)("institution_name")
        .trim()
        .notEmpty()
        .toLowerCase()
        .matches(/^[^<>&]*$/)
        .isLength({ max: 52 })
        .withMessage("institution_name is requried and its max length is : 52"),
    (0, express_validator_1.body)("degree")
        .trim()
        .notEmpty()
        .toLowerCase()
        .matches(/^[^<>&]*$/)
        .isLength({ max: 52 })
        .withMessage("degree is required and its max length is : 16"),
    (0, express_validator_1.body)("field_of_study")
        .trim()
        .notEmpty()
        .toLowerCase()
        .matches(/^[^<>&]*$/)
        .isLength({ max: 255 })
        .withMessage("field_of_study is required and its max length is : 255"),
    (0, express_validator_1.body)("end_date")
        .trim()
        .toLowerCase()
        .matches(/[0-9]+/)
        .withMessage("Enter valid year for example: 2023")
        .optional({ nullable: true }),
];
