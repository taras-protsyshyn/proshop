import Express from "express";

import Product from "../models/productModel.js";
import { getAllProducts, getProductById } from "../controller/productController.js";

const router = Express.Router();

router.route("/").get(getAllProducts);

router.route("/:id").get(getProductById);

export default router;
