import { Router } from "express";
import { CreateUserController  } from "../controllers/createUserController";
import { CreateTagController } from "../controllers/createTagController";
import { ensureAdmin } from "../middleware/ensureAdmin";
import { AuthenticateUserController } from "../controllers/authenticateUserController";
import { CreateComplimentController } from "../controllers/createComplimentControler";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { ListUserSendComplimentsController } from "../controllers/listUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "../controllers/listUserReceiveComplimentsController";
import { ListTagsController } from "../controllers/listTagsController";
import { ListUsersController } from "../controllers/listUsersController";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/users",  createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentController.handle)
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle)
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle);

export { router };