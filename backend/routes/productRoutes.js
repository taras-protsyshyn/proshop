import Express from "express";

import { getAllProducts, getProductById } from "../controller/productController.js";

const router = Express.Router();

router.route("/").get(getAllProducts);

router.route("/:id").get(getProductById);

export default router;
