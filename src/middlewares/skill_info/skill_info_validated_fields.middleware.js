"use strict";
exports.__esModule = true;
exports.skill_info_validated_fields = void 0;
var express_validator_1 = require("express-validator");
var skill_info_validated_fields = function (req, res, next) {
    try {
        var errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            throw errors;
        }
        if (req.user) {
            var user_id = req.user["user_id"];
            req.body["user_id"] = user_id;
        }
        next();
    }
    catch (err) {
        var message = "The given data was not valid";
        var objErr_1 = {};
        err["errors"].map(function (e) { return (objErr_1[e["param"]] = e["msg"]); });
        // console.log(objErr);
        return res.status(422).json({ message: message, errors: objErr_1 });
    }
};
exports.skill_info_validated_fields = skill_info_validated_fields;
