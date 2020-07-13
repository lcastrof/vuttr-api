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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var CreateToolService_1 = __importDefault(require("@modules/tools/services/CreateToolService"));
var ListToolsService_1 = __importDefault(require("@modules/tools/services/ListToolsService"));
var FindToolsByTagsService_1 = __importDefault(require("@modules/tools/services/FindToolsByTagsService"));
var DeleteToolService_1 = __importDefault(require("@modules/tools/services/DeleteToolService"));
var ToolsController = /** @class */ (function () {
    function ToolsController() {
    }
    ToolsController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var createTool, _a, title, link, description, tags, tool;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        createTool = tsyringe_1.container.resolve(CreateToolService_1.default);
                        _a = request.body, title = _a.title, link = _a.link, description = _a.description, tags = _a.tags;
                        return [4 /*yield*/, createTool.execute({ title: title, link: link, description: description, tags: tags })];
                    case 1:
                        tool = _b.sent();
                        return [2 /*return*/, response.status(201).json(tool)];
                }
            });
        });
    };
    ToolsController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteTool, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deleteTool = tsyringe_1.container.resolve(DeleteToolService_1.default);
                        id = request.params.id;
                        return [4 /*yield*/, deleteTool.execute(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(200).send()];
                }
            });
        });
    };
    ToolsController.prototype.index = function (request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var tag, findTools, tools_1, listTools, tools;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tag = (_a = request.query.tag) === null || _a === void 0 ? void 0 : _a.toString();
                        if (!tag) return [3 /*break*/, 2];
                        findTools = tsyringe_1.container.resolve(FindToolsByTagsService_1.default);
                        return [4 /*yield*/, findTools.execute(tag)];
                    case 1:
                        tools_1 = _b.sent();
                        return [2 /*return*/, response.status(200).json(tools_1)];
                    case 2:
                        listTools = tsyringe_1.container.resolve(ListToolsService_1.default);
                        return [4 /*yield*/, listTools.execute()];
                    case 3:
                        tools = _b.sent();
                        return [2 /*return*/, response.status(200).json(tools)];
                }
            });
        });
    };
    return ToolsController;
}());
exports.default = ToolsController;
