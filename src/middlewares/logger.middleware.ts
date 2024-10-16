import {NextFunction, Request, Response} from "express";

export const LoggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url}`)
    next();
}