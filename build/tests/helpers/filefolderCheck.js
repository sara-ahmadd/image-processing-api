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
Object.defineProperty(exports, "__esModule", { value: true });
exports.folderCreation = exports.findresizedimageFile = void 0;
const fs_1 = __importStar(require("fs"));
const fs_2 = require("fs");
const promises_1 = require("fs/promises");
//function check if a folder with the desired name already exists.
function folderCreation(path) {
    if ((0, fs_2.existsSync)(path)) {
        return (0, fs_1.readdir)(path, () => {
            console.log('FOLDER ALREADY EXISTS');
        });
    }
    else {
        fs_1.default.mkdir(path, () => {
            console.log('FOLDER CREATED SUCCESSFULLY!!');
        });
    }
}
exports.folderCreation = folderCreation;
folderCreation;
//check if that image entered already exists ==> so, display it.
// But if image not exists create it with w & h entered and display it. */
function findresizedimageFile(path) {
    if ((0, fs_2.existsSync)(path)) {
        console.log('FILE ALREADY EXISTS');
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
            console.log('FILE CREATED SUCCESSFULLY!!!');
        });
    }
}
exports.findresizedimageFile = findresizedimageFile;
findresizedimageFile;
