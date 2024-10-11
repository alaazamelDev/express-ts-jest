import app from "../src/app";
import {SuperTestStatic} from "supertest";

// Arrange
const request: SuperTestStatic = require('supertest')

describe('App Entrypoint', () => {
    describe('GET /greet', () => {
        it("should return 200 status code & Hello World!", async () => {

            // Act
            const res = await request(app).get('/greet');

            // Assert
            expect(res.status).toBe(200);
            expect(res.text).toBe('Hello World!');
        });
    });
})