"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importStar(require("fs"));
const data_1 = __importDefault(require("../../../names-of-imgs/data"));
const url_1 = require("url");
const resizing_1 = __importDefault(require("../api/resizing"));
const promises_1 = require("fs/promises");
//create new router from Router object in express.
const imageRoute = express_1.default.Router();
//add the path of images folder (that contain the images) so imageRoute can access its content.
imageRoute.use(express_1.default.static(__dirname + '/images'));
/*make GET request to '/resize/' endpoint where, if the user entered

name of an available image and a width value and a height value

it will be displayed in browser. */
imageRoute.get('/', (req, res) => {
    //declare required variables.
    //parse the request url to access the query parameters.
    const urlObj = (0, url_1.parse)(req.url, true);
    const queryData = urlObj.query;
    const name = queryData.name;
    const width = parseInt(queryData.width);
    const height = parseInt(queryData.height);
    const imagesNames = data_1.default.includes(name);
    const imagelocation = path_1.default.resolve('./' + `./images/${name}.jpg`);
    /*an ASYNCHRONOUS FUNCTION that takes parameters : (name & width & height ) entered by the
  user ...
  first : check if they are valid.
  second : create new folder if not exists.
  third : check if that image entered already exists ==> so, display it in browser.
  fourth : if image not exists create it with (name & w & h) entered and display it. */
    resizingImage(name, width, height);
    function resizingImage(a, b, c) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //first : check if they are valid.
                if (imagesNames === true && width !== NaN && height !== NaN) {
                    const folder = path_1.default.resolve('./' + 'newImages');
                    //second : create new folder if not already exists.
                    function folderCreation(path) {
                        if ((0, fs_1.existsSync)(path)) {
                            (0, fs_1.readdir)(path, () => {
                                console.log(`FOLDER ALREADY EXISTS
            -----------`);
                            });
                        }
                        else {
                            fs_1.default.mkdir(path, () => {
                                console.log();
                            });
                        }
                    }
                    folderCreation(folder);
                    const newloc = path_1.default.resolve('./' + `newImages/${name}_${width}_${height}.jpg`);
                    // third : check if that image entered already exists ==> SO, DISPLAY IT DIRECTLY..
                    // fourth : OR  if image not exists CREATE IT with w & h entered AND DISPLAY IT. */
                    function findimageFile(path) {
                        if ((0, fs_1.existsSync)(path)) {
                            console.log(`FILE ALREADY EXISTS
        -----------`);
                            (0, promises_1.readFile)(path);
                        }
                        else {
                            const request = {
                                headers: {
                                    'Content-Type': 'image/jpeg',
                                    Authorization: 'your token',
                                    host: 'localhost:3000',
                                },
                                encoding: 'binary',
                            };
                            fs_1.default.writeFile(path, request.encoding, 'binary', () => {
                                console.log();
                            });
                        }
                    }
                    findimageFile(newloc);
                    /*waiting for sharp method (from sharp package) to resize
                    the selected image then put it in the created file.*/
                    yield (0, resizing_1.default)(imagelocation, b, c, newloc).then(() => {
                        //use fs.readfile  to display the new created image with sharp .
                        fs_1.default.readFile(newloc, (err, data) => {
                            res.write(data);
                            res.end();
                            console.log(`IMAGE IS DISPLAYED
            -----------------------------------`);
                        });
                    });
                }
                else {
                    /*IF any of : name or width or height is not of the specified types in the resizingImages function
                        this messege is displayed in the browser.*/
                    res.send(' (NAME OR WIDTH OR HEIGHT) QUERY IS UNVALID.... OR ..IMAGE DOESNOT EXIST');
                    console.log(' (NAME OR WIDTH OR HEIGHT) QUERY IS UNVALID....OR ..IMAGE DOESNOT EXIST ');
                }
                /*if any error occured during executing the resizing
              function this messege will be displayed.*/
            }
            catch (err) {
                res.send('USER ERROR OCCURED');
                console.log(`USER ERROR OCCURED
    `);
            }
        });
    }
});
//exporting the (imageRoute) Router to can test its endpoint.
exports.default = imageRoute;
