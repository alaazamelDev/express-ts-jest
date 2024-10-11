import {Request, Response} from "express";
import {AddResponse} from "../responses/add.response";

export function add(
    req: Request,
    res: Response<AddResponse | string>,
): void {

    const {a, b} = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        res.status(400).send('Invalid Input');
    }

    const sum: number = a + b;

    res
        .status(200)
        .json({result: sum})
}
