"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const listCategories_1 = require("./useCases/Categories/listCategories");
const createCategory_1 = require("./useCases/Categories/createCategory");
const deleteCategory_1 = require("./useCases/Categories/deleteCategory");
const listProducts_1 = require("./useCases/Products/listProducts");
const createProduct_1 = require("./useCases/Products/createProduct");
const node_path_1 = __importDefault(require("node:path"));
const multer_1 = __importDefault(require("multer"));
const listProductsByCategory_1 = require("./useCases/Categories/listProductsByCategory");
const listOrders_1 = require("./useCases/Orders/listOrders");
const createOrder_1 = require("./useCases/Orders/createOrder");
const changeOrderStatus_1 = require("./useCases/Orders/changeOrderStatus");
const deleteOrder_1 = require("./useCases/Orders/deleteOrder");
exports.router = (0, express_1.Router)();
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination(req, file, callback) {
            callback(null, node_path_1.default.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        }
    })
});
// List categories
exports.router.get('/categories', listCategories_1.listCategories);
// Create category
exports.router.post('/categories', createCategory_1.createCategory);
// Delete a category
exports.router.delete('/categories/:categoryId', deleteCategory_1.deleteCategory);
// List products
exports.router.get('/products', listProducts_1.listProducts);
// Create product
exports.router.post('/products', upload.single('image'), createProduct_1.createProduct);
// Get products by category
exports.router.get('/categories/:categoryId/products', listProductsByCategory_1.listProductByCategory);
// List orders
exports.router.get('/orders', listOrders_1.listOrders);
// Create order
exports.router.post('/orders', createOrder_1.createOrder);
// Change order status
exports.router.patch('/orders/:orderId', changeOrderStatus_1.changeOrderStatus);
// Delete order
exports.router.delete('/orders/:orderId', deleteOrder_1.deleteOrder);
