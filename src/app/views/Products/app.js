import ProductsService from "./products.service.js";

const app = document.getElementById("view-reviews");

export const products = new ProductsService(app);
