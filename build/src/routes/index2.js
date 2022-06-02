"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import required modules.
const express_1 = __importDefault(require("express"));
const images_1 = __importDefault(require("./api/images"));
//create new router from Router object in express.
const routes = express_1.default.Router();
//add (imageRoute) middleware to (routes) so it can use it with all request methods.
routes.use('/resize', images_1.default);
//exporting routes to test the end point in testing file.
exports.default = routes;
