"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var ToolsRepository_1 = __importDefault(require("@modules/tools/infra/typeorm/repositories/ToolsRepository"));
tsyringe_1.container.registerSingleton('ToolsRepository', ToolsRepository_1.default);
