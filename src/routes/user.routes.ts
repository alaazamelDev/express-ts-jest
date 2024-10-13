import {Router} from "express";
import {addUser, getAllUsers} from "../controllers/user.controller";

const userRoutes: Router = Router();

userRoutes
    .get('/', getAllUsers)
    .post('/', addUser);

export default userRoutes;