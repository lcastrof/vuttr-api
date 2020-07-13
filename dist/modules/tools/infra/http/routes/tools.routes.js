"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ToolsController_1 = __importDefault(require("../controllers/ToolsController"));
var toolsRouter = express_1.Router();
var toolsController = new ToolsController_1.default();
toolsRouter.get('/', toolsController.index);
toolsRouter.post('/', toolsController.create);
toolsRouter.delete('/:id', toolsController.delete);
exports.default = toolsRouter;
