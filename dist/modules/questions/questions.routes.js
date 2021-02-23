"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const questions_controller_1 = require("./questions.controller");
const router = express_1.default.Router();
router.get('/', questions_controller_1.getQuestions);
exports.default = router;
//# sourceMappingURL=questions.routes.js.map