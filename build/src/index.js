"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import required modules.
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index2_1 = __importDefault(require("./routes/index2"));
//create app from express object in express.
const app = (0, express_1.default)();
//add the path of statics folder (that contain the html file) so app can access its content.
app.use(express_1.default.static(path_1.default.join(__dirname, 'statics')));
//get request to '/' end point to show available images to the user to choose from them.
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'statics/index.html'));
});
//get request to '/images' end point to ensure that the user entered complete endpoint to resize the image.
app.get('/images', (req, res) => {
    res.send('COMPLETE THE END POINT TO REACH THE RESIZED IMAGE :)');
    return 'COMPLETE THE END POINT TO REACH THE RESIZED IMAGE :)';
});
//add the routes custom middleware.
app.use('/images', index2_1.default);
const port = 3000;
//create the server.
app.listen(port, () => {
    console.log(`server is running on port : ${port}....`);
});
//export app to import it in testing file to test the endpoint.
exports.default = app;
