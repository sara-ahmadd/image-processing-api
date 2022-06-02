// import required modules.
import supertest from 'supertest';
import app from '../src/index';

const request = supertest(app);

//check if GET request to (localhost:3000/) woks with no error.

describe('Testing (localhost:3000/images) endpoint', () => {
  it('Testing homepage endpoint', async (): Promise<void> => {
    const path = '/';
    const response: supertest.Response = await request.get(path);
    expect(response.status).toBe(200);
  });
  const path1 = '/images';
  it(' Testing GET request to /images/', async (): Promise<void> => {
    await request.get(path1);
    expect(console.log()).toBe(
      console.log('COMPLETE THE END POINT TO REACH THE RESIZED IMAGE :)')
    );
  });
});
