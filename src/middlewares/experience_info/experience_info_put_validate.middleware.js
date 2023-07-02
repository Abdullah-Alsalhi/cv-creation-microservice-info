"use strict";
exports.__esModule = true;
exports.experience_info_put_validation = void 0;
var express_validator_1 = require("express-validator");
exports.experience_info_put_validation = [
    (0, express_validator_1.body)("company_name")
        .trim()
        .notEmpty()
        .toLowerCase()
        .matches(/^[^<>&]*$/)
        .isLength({ max: 255 })
        .withMessage("company_name is requried and its max length is : 255")
        .optional({ nullable: true }),
    (0, express_validator_1.body)("job_title")
        .trim()
        .notEmpty()
        .toLowerCase()
        .matches(/^[^<>&]*$/)
        .isLength({ max: 255 })
        .withMessage("job_title is requried and its max length is : 255")
        .optional({ nullable: true }),
    (0, express_validator_1.body)("description")
        .trim()
        .notEmpty()
        .toLowerCase()
        .matches(/^[^<>&]*$/)
        .isLength({ max: 255 })
        .withMessage("description is requried and its max length is : 255")
        .optional({ nullable: true }),
    (0, express_validator_1.body)("start_date")
        .trim()
        .notEmpty()
        .withMessage("start_date is required.")
        .matches(/^\d{4}-\d{2}$/)
        .withMessage("start_date must be in YYYY-MM format.")
        .optional({ nullable: true }),
    (0, express_validator_1.body)("end_date")
        .trim()
        .notEmpty()
        .withMessage("end_date is required.")
        .matches(/^\d{4}-\d{2}$/)
        .withMessage("end_date must be in YYYY-MM format.")
        .optional({ nullable: true }),
    (0, express_validator_1.body)("location")
        .trim()
        .notEmpty()
        .toLowerCase()
        .matches(/^[^<>&]*$/)
        .isLength({ max: 128 })
        .withMessage("location is requried and its max length is : 128 letters")
        .optional({ nullable: true }),
];
