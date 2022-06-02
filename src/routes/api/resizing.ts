import sharp from 'sharp';
async function resize(imgLoc: string, x: number, y: number, file: string) {
  //sharp package resizes the entered image and put it in the created file.
  await sharp(imgLoc).resize(x, y).toFile(file);
}
export default resize;
