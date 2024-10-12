import {NextFunction, Request, Response} from "express";

export const AuthenticateMiddleware = (req: Request, res: Response, next: NextFunction) => {

    // get the "authorization header"
    const authHeader: string | undefined = req.headers['authorization'];
    const token: string = "validToken";

    if (!authHeader || authHeader !== `Bearer ${token}`) {
        return res.status(401).send('Unauthorized');
    }

    return next();
}