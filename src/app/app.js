import ProductsService from "./views/Products/products.service.js";

const app = document.getElementById("view-reviews");

export const products = new ProductsService(app);
