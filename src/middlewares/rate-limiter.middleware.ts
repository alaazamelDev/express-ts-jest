import {NextFunction, Request, Response} from 'express';

interface RateLimitStore {
    [key: string]: { requests: number, lastRequestTime: number };
}

const rateLimitStore: RateLimitStore = {};
const RATE_LIMIT: number = 10;
const TIME_FRAME: number = 1000 * 60; // 1 minute
export const RateLimiterMiddleware = (req: Request, res: Response, next: NextFunction) => {

    // get the ip of the client
    const clientIp: string | undefined = req.ip;
    const currentTime: number = Date.now();

    if (!rateLimitStore[clientIp]) {
        // first time
        rateLimitStore[clientIp] = {requests: 1, lastRequestTime: currentTime};
    }

    const {requests, lastRequestTime} = rateLimitStore[clientIp];
    if (currentTime - lastRequestTime > TIME_FRAME) {
        // reset the counter
        rateLimitStore[clientIp] = {requests: 1, lastRequestTime: currentTime}
    } else if (requests < RATE_LIMIT) {
        // increase the number of requests
        rateLimitStore[clientIp].requests += 1;
    } else {
        // block the request for exceeding the rate limit
        res.status(429).send("Too many requests, please try again later.");
    }

    next(); // Proceed
}