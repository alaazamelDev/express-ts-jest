import {Request, Response} from "express";
import {RateLimiterMiddleware} from "../../src/middlewares/rate-limiter.middleware";

describe('Rate Limiter Middleware', () => {

    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let mockNextFunction: jest.Mock;

    beforeEach(() => {
        // Arrange
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };
        mockNextFunction = jest.fn();

    })

    afterAll(() => {
        jest.clearAllMocks();
    })

    it('should allow the requests under the rate limit', () => {

        mockRequest = {ip: '127.0.0.1'}

        // Act: call the middleware with mocked data
        RateLimiterMiddleware(
            mockRequest as Request,
            mockResponse as Response,
            mockNextFunction
        )

        // Assert
        expect(mockNextFunction).toHaveBeenCalled()
    });

    it('should return 429 with Too many requests when exceeding 10 reqs/min', () => {

        mockRequest = {ip: '127.0.0.1'}

        // Act: call the middleware with mocked data 10 times
        for (let i: number = 0; i < 10; i++) {
            RateLimiterMiddleware(
                mockRequest as Request,
                mockResponse as Response,
                mockNextFunction
            )
        }

        // Act: send the 11th within the minute
        RateLimiterMiddleware(
            mockRequest as Request,
            mockResponse as Response,
            mockNextFunction
        )

        // Assert: 429 error must be returned with Too many requests message
        expect(mockResponse.status).toHaveBeenCalledWith(429);
        expect(mockResponse.send).toHaveBeenCalledWith("Too many requests, please try again later.");
    });
});