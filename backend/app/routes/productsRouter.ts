import express, { Router } from "express";
import { ProductController } from "../controllers/productController";

export const ProductsRouter: Router = Router();

ProductsRouter.get("/", ProductController.getAllProducts);

ProductsRouter.get("/categories", ProductController.getAllCategories);

ProductsRouter.post("/", ProductController.createProducts);

ProductsRouter.post("/categories", ProductController.createCategories);
