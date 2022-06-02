import fs, { readdir } from 'fs';
import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
//function check if a folder with the desired name already exists.
function folderCreation(path: string): void {
  if (existsSync(path)) {
    return readdir(path, () => {
      console.log('FOLDER ALREADY EXISTS');
    });
  } else {
    fs.mkdir(path, () => {
      console.log('FOLDER CREATED SUCCESSFULLY!!');
    });
  }
}
folderCreation;

//check if that image entered already exists ==> so, display it.
// But if image not exists create it with w & h entered and display it. */
function findresizedimageFile(path: string): void {
  if (existsSync(path)) {
    console.log('FILE ALREADY EXISTS');
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
      console.log('FILE CREATED SUCCESSFULLY!!!');
    });
  }
}
findresizedimageFile;



export { findresizedimageFile, folderCreation };
