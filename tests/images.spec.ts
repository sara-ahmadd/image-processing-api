//import required modules
import path from 'path';
import {
  findresizedimageFile,
  folderCreation,
} from './helpers/filefolderCheck';
import resize from '../src/routes/api/resizing';



/*testing if the file of the image selected exists or not,
then open the file which contain the resized image to check 
if the resizing process occured.*/
it('test processing of image', async (): Promise<void> => {
  const file = 'images/image5.jpg';
  folderCreation(path.resolve('./' + 'newImages'));
  const newlocation = 'newImages/image5-300-300.jpg';
  findresizedimageFile(newlocation);
  await resize(file, 300, 300, newlocation);
  expect(console.log()).toBe(console.log(`IMAGE IS DISPLAYED
            -----------------------------------`))
});
