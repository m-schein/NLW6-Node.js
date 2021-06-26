import { Router } from "express";
import { CreateUserController  } from "../controllers/createUserController";
import { CreateTagController } from "../controllers/createTagController";
import { ensureAdmin } from "../middleware/ensureAdmin";
import { AuthenticateUserController } from "../controllers/authenticateUserController";
import { CreateComplimentController } from "../controllers/createComplimentControler";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users",  createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliment", createComplimentController.handle);

export { router };