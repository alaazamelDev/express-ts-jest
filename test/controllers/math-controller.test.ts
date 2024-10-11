import app from "../../src/app";

const request = require('supertest')
describe('Math Controller', () => {
    describe('Add Endpoint', () => {
        it('should return 200 status with result=5 with {a:2,b:3} in request body', async () => {

            // Arrange
            const a: number = 2;
            const b: number = 3;

            // Act
            const res = await request(app)
                .post('/add')
                .send({a, b})

            // Assert
            expect(res.status).toBe(200);
            expect(res.headers['content-type']).toMatch(/json/)
            expect(res.body.result).toBe(5)
        });

        it('should return 400 when we send string payload', async () => {

            // Arrange
            const a: string = 'alaa';
            const b: string = 'zamel';

            // Act
            const res = await request(app)
                .post('/add')
                .send({a, b});

            // Assert
            expect(res.status).toBe(400);
            expect(res.text).toBe('Invalid Input');
        });
    });
});