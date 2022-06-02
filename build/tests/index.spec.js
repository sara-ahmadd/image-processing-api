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
const index_1 = __importDefault(require("../src/index"));
const request = (0, supertest_1.default)(index_1.default);
//check if GET request to (localhost:3000/) woks with no error.
describe('Testing (localhost:3000/images) endpoint', () => {
    it('Testing homepage endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const path = '/';
        const response = yield request.get(path);
        expect(response.status).toBe(200);
    }));
    const path1 = '/images';
    it(' Testing GET request to /images/', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request.get(path1);
        expect(console.log()).toBe(console.log('COMPLETE THE END POINT TO REACH THE RESIZED IMAGE :)'));
    }));
});
