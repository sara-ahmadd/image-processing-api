// import required modules.
import express from 'express';
import path from 'path';
import routes from './routes/index2';
//create app from express object in express.
const app = express();
//add the path of statics folder (that contain the html file) so app can access its content.
app.use(express.static(path.join(__dirname, 'statics')));
//get request to '/' end point to show available images to the user to choose from them.
app.get('/', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, 'statics/index.html'));
});
//get request to '/images' end point to ensure that the user entered complete endpoint to resize the image.
app.get('/images', (req: express.Request, res: express.Response) => {
  res.send('COMPLETE THE END POINT TO REACH THE RESIZED IMAGE :)');
  return 'COMPLETE THE END POINT TO REACH THE RESIZED IMAGE :)';
});
//add the routes custom middleware.
app.use('/images', routes);
const port = 3000;
//create the server.
app.listen(port, () => {
  console.log(`server is running on port : ${port}....`);
});
//export app to import it in testing file to test the endpoint.
export default app;
