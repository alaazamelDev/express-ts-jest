import * as userService from '../../src/services/user.service';
import app from "../../src/app";

const request = require('supertest');
// Mock the module
jest.mock('../../src/services/user.service');

describe('User Controller', () => {

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('GET /users - should return all users', async () => {

        // Arrange
        const mockUsers = [{id: 1, name: "Alaa"}];
        (userService.getUsers as jest.Mock).mockResolvedValue(mockUsers);

        // Act
        const response = await request(app).get('/users');

        // Assert
        expect(response.status).toBe(200)
        expect(response.body).toEqual(mockUsers)
    });

    test('POST /users - should create a new user', async () => {

        // Arrange
        const mockUser = {id: 1, name: "alaazamel"};
        (userService.createUser as jest.Mock).mockResolvedValue(mockUser);

        // Act
        const response = await request(app)
            .post('/users')
            .send({name: 'Alice'});

        // Assert
        expect(response.status).toBe(201);
        expect(response.body).toEqual(mockUser);
        expect(response.headers['content-type']).toMatch(/json/);
    });
});
