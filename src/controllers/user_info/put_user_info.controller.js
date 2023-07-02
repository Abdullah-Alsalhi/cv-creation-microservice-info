"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.user_info_put_controller = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var user_info_put_controller = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user_id, user_info_found, user_info_updated, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(req.user && req.params)) return [3 /*break*/, 7];
                id = +req.params.id;
                user_id = req.user["user_id"];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, prisma.userInfo.findFirstOrThrow({
                        where: {
                            id: id
                        }
                    })];
            case 2:
                user_info_found = _a.sent();
                if (!((user_info_found === null || user_info_found === void 0 ? void 0 : user_info_found.user_id) !== user_id)) return [3 /*break*/, 3];
                return [2 /*return*/, res
                        .status(403)
                        .json({ msg: "you don't own this resource ".concat(id) })];
            case 3: return [4 /*yield*/, prisma.userInfo.update({
                    data: req.body,
                    where: {
                        id: id
                    }
                })];
            case 4:
                user_info_updated = _a.sent();
                return [2 /*return*/, res.status(200).json(user_info_updated)];
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                if (error_1 instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                    if (error_1.code === "P2002") {
                        return [2 /*return*/, res.status(400).json(error_1.meta)];
                    }
                }
                if (error_1.name === "NotFoundError") {
                    return [2 /*return*/, res.status(404).json({ msg: "no data" })];
                }
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.user_info_put_controller = user_info_put_controller;