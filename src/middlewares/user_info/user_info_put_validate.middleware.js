"use strict";
exports.__esModule = true;
exports.user_info_put_validation = void 0;
var express_validator_1 = require("express-validator");
exports.user_info_put_validation = [
    (0, express_validator_1.body)("first_name")
        .trim()
        .notEmpty()
        .toLowerCase()
        .matches(/^[a-z]+$/)
        .isLength({ max: 16 })
        .optional({ nullable: true })
        .withMessage("first_name is requried and its max length is : 16"),
    (0, express_validator_1.body)("last_name")
        .trim()
        .notEmpty()
        .toLowerCase()
        .matches(/^[a-z]+$/)
        .isLength({ max: 16 })
        .optional({ nullable: true })
        .withMessage("last_name is required and its max length is : 16"),
    (0, express_validator_1.body)("country")
        .trim()
        .toLowerCase()
        .matches(/^[^<>&]*$/)
        .withMessage("Enter valid country")
        .optional({ nullable: true }),
    (0, express_validator_1.body)("city")
        .trim()
        .toLowerCase()
        .matches(/^[^<>&]*$/)
        .withMessage("Enter valid city")
        .optional({ nullable: true }),
    (0, express_validator_1.body)("bio")
        .trim()
        .notEmpty()
        .matches(/^[^<>&]*$/)
        .toLowerCase()
        .isLength({ max: 255 })
        .withMessage("bio can be only less than  or equal to 255 letters")
        .optional({ nullable: true }),
];
