import {Request, Response} from 'express';
import {AuthenticateMiddleware} from "../../src/middlewares/authenticate.middleware";

describe('Authenticate Middleware', () => {
    describe('No Authorization Header is Passed', () => {

        // Arrange: mock req, res & next function
        let mockRequest: Partial<Request>;
        let mockResponse: Partial<Response>;
        let mockNextFunction: jest.Mock;

        beforeEach(() => {
            // mock empty response
            mockResponse = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };

            // mock the next function to test it
            mockNextFunction = jest.fn();
        })

        it('should return Unauthorized with 401', () => {

            // Arrange: mock the request
            mockRequest = {headers: {}}

            // Act: Trigger the authenticate middleware with mocked data
            AuthenticateMiddleware(
                mockRequest as Request,
                mockResponse as Response,
                mockNextFunction
            )

            // Assert: 401 status is returned
            expect(mockResponse.status).toHaveBeenCalledWith(401);

            // Assert: Unauthorized to be returned
            expect(mockResponse.send).toHaveBeenCalledWith("Unauthorized");

            // Assert: next function should not be called at all
            expect(mockNextFunction).toHaveBeenCalledTimes(0);
        });

        it('should call next() if the authorization header is valid', () => {

            // Arrange: mock the request
            mockRequest = {headers: {authorization: "Bearer validToken"}}

            // Act: Trigger the authenticate middleware with mocked data
            AuthenticateMiddleware(
                mockRequest as Request,
                mockResponse as Response,
                mockNextFunction
            )

            // Assert: next function must be called
            expect(mockNextFunction).toHaveBeenCalled()
        });

    });
});