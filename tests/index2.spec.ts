// import required modules.
import supertest from 'supertest';
import routes from '../src/routes/index2';
//using the supertest package for testing endpoint.
const request = supertest(routes);


/*test GET request to ( /images/resize/?(queryParameters)) endpoint 
status to be  200OK and the resized image displayed.*/
const path2 = '/resize/?name=image1&width=100&height=200';
it(' Testing GET request to /images/resize/?(queryParameters) endpoint.', async (): Promise<void> => {
  const response: supertest.Response = await request.get(path2);
  expect(response.status).toBe(200);
});
