import { Router } from "express";
import { CreateUserController  } from "../controllers/createUserController";
import { CreateTagController } from "../controllers/createTagController";
import { ensureAdmin } from "../middleware/ensureAdmin";
import { AuthenticateUserController } from "../controllers/authenticateUSerController";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController;


router.post("/users",  createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);

export { router };