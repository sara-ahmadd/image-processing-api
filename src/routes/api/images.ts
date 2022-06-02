/* eslint-disable no-inner-declarations */
/* eslint-disable use-isnan */
// import required modules.
import express from 'express';
import path from 'path';
import fs, { existsSync, readdir } from 'fs';
import images from '../../../names-of-imgs/data';
import { parse } from 'url';
import resize from '../api/resizing';
import { readFile } from 'fs/promises';
//create new router from Router object in express.
const imageRoute = express.Router();
//add the path of images folder (that contain the images) so imageRoute can access its content.
imageRoute.use(express.static(__dirname + '/images'));

/*make GET request to '/resize/' endpoint where, if the user entered

name of an available image and a width value and a height value

it will be displayed in browser. */

imageRoute.get('/', (req: express.Request, res: express.Response): void => {
  //declare required variables.

  //parse the request url to access the query parameters.
  const urlObj = parse(req.url, true);
  const queryData = urlObj.query;
  const name: string = queryData.name as string;
  const width = parseInt(queryData.width as string);
  const height = parseInt(queryData.height as string);
  const imagesNames = images.includes(name);
  const imagelocation = path.resolve('./' + `./images/${name}.jpg`) as string;
  /*an ASYNCHRONOUS FUNCTION that takes parameters : (name & width & height ) entered by the
user ...
first : check if they are valid.
second : create new folder if not exists.
third : check if that image entered already exists ==> so, display it in browser.
fourth : if image not exists create it with (name & w & h) entered and display it. */
  resizingImage(name, width, height);
  async function resizingImage(a: string, b: number, c: number): Promise<void> {
    try {
      //first : check if they are valid.
      if (imagesNames === true && width !== NaN && height !== NaN) {
        const folder = path.resolve('./' + 'newImages');
        //second : create new folder if not already exists.
        function folderCreation(path: string) {
          if (existsSync(path)) {
            readdir(path, () => {
              console.log(`FOLDER ALREADY EXISTS
            -----------`);
            });
          } else {
            fs.mkdir(path, () => {
              console.log();
            });
          }
        }
        folderCreation(folder);

        const newloc = path.resolve(
          './' + `newImages/${name}_${width}_${height}.jpg`
        );
        // third : check if that image entered already exists ==> SO, DISPLAY IT DIRECTLY..
        // fourth : OR  if image not exists CREATE IT with w & h entered AND DISPLAY IT. */
        function findimageFile(path: string) {
          if (existsSync(path)) {
            console.log(`FILE ALREADY EXISTS
        -----------`);
            readFile(path);
          } else {
            const request = {
              headers: {
                'Content-Type': 'image/jpeg',
                Authorization: 'your token',
                host: 'localhost:3000',
              },
              encoding: 'binary',
            };
            fs.writeFile(path, request.encoding, 'binary', () => {
              console.log();
            });
          }
        }
        findimageFile(newloc);
        /*waiting for sharp method (from sharp package) to resize
        the selected image then put it in the created file.*/
        await resize(imagelocation, b, c, newloc).then(() => {
          //use fs.readfile  to display the new created image with sharp .
          fs.readFile(newloc, (err, data) => {
            res.write(data);
            res.end();
            console.log(`IMAGE IS DISPLAYED
            -----------------------------------`);
          });
        });
      } else {
        /*IF any of : name or width or height is not of the specified types in the resizingImages function
            this messege is displayed in the browser.*/
        res.send(
          ' (NAME OR WIDTH OR HEIGHT) QUERY IS UNVALID.... OR ..IMAGE DOESNOT EXIST'
        );
        console.log(
          ' (NAME OR WIDTH OR HEIGHT) QUERY IS UNVALID....OR ..IMAGE DOESNOT EXIST '
        );
      }

      /*if any error occured during executing the resizing
    function this messege will be displayed.*/
    } catch (err) {
      res.send('USER ERROR OCCURED');
      console.log(
        `USER ERROR OCCURED
    `
      );
    }
  }
});
//exporting the (imageRoute) Router to can test its endpoint.
export default imageRoute;
