import { Router } from "express";
import userController from "../controllers/userController"
const router = Router();


router.route('/allusers').get(userController.getAllUsers)
router.route('/oneuser').get(userController.getOneUser)


export default router;
