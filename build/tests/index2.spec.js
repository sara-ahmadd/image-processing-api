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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import required modules.
const supertest_1 = __importDefault(require("supertest"));
const index2_1 = __importDefault(require("../src/routes/index2"));
//using the supertest package for testing endpoint.
const request = (0, supertest_1.default)(index2_1.default);
/*test GET request to ( /images/resize/?(queryParameters)) endpoint
status to be  200OK and the resized image displayed.*/
const path2 = '/resize/?name=image1&width=100&height=200';
it(' Testing GET request to /images/resize/?(queryParameters) endpoint.', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield request.get(path2);
    expect(response.status).toBe(200);
}));
