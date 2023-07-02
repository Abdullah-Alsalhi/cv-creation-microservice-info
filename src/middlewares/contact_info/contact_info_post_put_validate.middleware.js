"use strict";
exports.__esModule = true;
exports.contact_info_post_put_validation = void 0;
var express_validator_1 = require("express-validator");
exports.contact_info_post_put_validation = [
    (0, express_validator_1.body)("email")
        .trim()
        .isEmail()
        .toLowerCase()
        .withMessage("Enter a valid email"),
    (0, express_validator_1.body)("phone")
        .trim()
        .notEmpty()
        .matches(/^[0-9]+$/)
        .isLength({ min: 10, max: 10 })
        .withMessage("Enter a 10 digits phone number"),
];
