import {Request, Response, Router} from "express";
import {add} from "../controllers/math.controller";

const router: Router = Router()

// GET /greet ::=> health check
router.get('/greet', (req: Request, res: Response) => {
    res.send('Hello World!')
})

router
    .post('/add', add);

export default router;