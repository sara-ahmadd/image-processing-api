// import required modules.
import express from 'express';

import imageRoute from './api/images';
//create new router from Router object in express.
const routes = express.Router();
//add (imageRoute) middleware to (routes) so it can use it with all request methods.
routes.use('/resize', imageRoute);
//exporting routes to test the end point in testing file.
export default routes;
