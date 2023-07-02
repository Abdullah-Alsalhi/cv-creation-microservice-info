"use strict";
exports.__esModule = true;
exports.authenticateJWTtoken = void 0;
var passport_1 = require("passport");
exports.authenticateJWTtoken = passport_1["default"].authenticate("jwt", {
    session: false
});
