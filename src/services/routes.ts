import { Router } from "express";
import { CreateUserController  } from "../controllers/createUserController";
import { CreateTagController } from "../controllers/createTagController";
import { ensureAdmin } from "../middleware/ensureAdmin";
const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();


router.post("/users",  createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);

export { router };