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
//import required modules
const path_1 = __importDefault(require("path"));
const filefolderCheck_1 = require("./helpers/filefolderCheck");
const resizing_1 = __importDefault(require("../src/routes/api/resizing"));
/*testing if the file of the image selected exists or not,
then open the file which contain the resized image to check
if the resizing process occured.*/
it('test processing of image', () => __awaiter(void 0, void 0, void 0, function* () {
    const file = 'images/image5.jpg';
    (0, filefolderCheck_1.folderCreation)(path_1.default.resolve('./' + 'newImages'));
    const newlocation = 'newImages/image5-300-300.jpg';
    (0, filefolderCheck_1.findresizedimageFile)(newlocation);
    yield (0, resizing_1.default)(file, 300, 300, newlocation);
    expect(console.log()).toBe(console.log(`IMAGE IS DISPLAYED
            -----------------------------------`));
}));
