"use strict";
exports.__esModule = true;
exports.media_info_post_put_validation = void 0;
var express_validator_1 = require("express-validator");
exports.media_info_post_put_validation = [
    (0, express_validator_1.body)("personal")
        .trim()
        .matches(/^(http)?s?:\/\/(?:www\.)?[a-z0-9-]+(?:\.[a-z]{2,})(?:\/[^\s]*)?$/i)
        .withMessage("personal website url")
        .optional({ nullable: true }),
    (0, express_validator_1.body)("linkedin")
        .trim()
        .matches(/^(http)?s?:\/\/(?:www\.)?[a-z0-9-]+(?:\.[a-z]{2,})(?:\/[^\s]*)?$/i)
        .withMessage("personal linkedin account url")
        .optional({ nullable: true }),
    (0, express_validator_1.body)("github")
        .trim()
        .matches(/^(http)?s?:\/\/(?:www\.)?[a-z0-9-]+(?:\.[a-z]{2,})(?:\/[^\s]*)?$/i)
        .withMessage("personal github account url")
        .optional({ nullable: true }),
];
