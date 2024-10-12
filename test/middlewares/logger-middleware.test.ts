import {Request, Response} from "express";
import {LoggerMiddleware} from "../../src/middlewares/logger.middleware";

describe('Logger Middleware', () => {

    // Arrange: create mocks
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let mockNextFunction: jest.Mock;

    beforeEach(() => {

        // prepare mocks
        mockRequest = {
            method: 'GET',
            url: '/test-route'
        }

        // empty (or) I don't care
        mockResponse = {};

        mockNextFunction = jest.fn(); // Mock the next function to test it
        console.log = jest.fn(); // Mock the next function to test it
    })

    it('should log the request method & url when request is sent', () => {

        // Act: call the logger middleware with mocked objects
        LoggerMiddleware(
            mockRequest as Request,
            mockResponse as Response,
            mockNextFunction
        )

        // Assert: check that request has been logged
        expect(console.log).toHaveBeenCalledWith("GET /test-route")

        // Assert: check that the next method has been called (once)
        expect(mockNextFunction).toHaveBeenCalled();
    });

});