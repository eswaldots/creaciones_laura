import express, { Router } from "express";
import { ProductController } from "../controllers/productController";

export const ProductsRouter: Router = Router();

ProductsRouter.get("/categories", ProductController.getAllCategories);

ProductsRouter.post("/categories", ProductController.createCategories);

ProductsRouter.patch("/categories/:id", ProductController.updateCategory);

ProductsRouter.delete("/categories/:id", ProductController.deleteCategory);

ProductsRouter.get("/", ProductController.getAllProducts);

ProductsRouter.get("/:id", ProductController.getProductsById);

ProductsRouter.patch("/:id", ProductController.updateProduct);

ProductsRouter.delete("/:id", ProductController.deleteProduct);

ProductsRouter.post("/", ProductController.createProducts);

