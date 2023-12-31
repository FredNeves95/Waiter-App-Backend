import { Router } from 'express';
import { listCategories } from './useCases/Categories/listCategories';
import { createCategory } from './useCases/Categories/createCategory';
import { deleteCategory } from './useCases/Categories/deleteCategory';
import { listProducts } from './useCases/Products/listProducts';
import { createProduct } from './useCases/Products/createProduct';

import path from 'node:path';
import multer from 'multer';
import { listProductByCategory } from './useCases/Categories/listProductsByCategory';
import { listOrders } from './useCases/Orders/listOrders';
import { createOrder } from './useCases/Orders/createOrder';
import { changeOrderStatus } from './useCases/Orders/changeOrderStatus';
import { deleteOrder } from './useCases/Orders/deleteOrder';
import { listHistory } from './useCases/History/listHistory';
import { deleteHistory } from './useCases/History/deleteHistory';
import { createHistory } from './useCases/History/createHistory';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// Delete a category
router.delete('/categories/:categoryId', deleteCategory);

// List products
router.get('/products', listProducts);

// Create product
router.post('/products', upload.single('image'),createProduct);

// Get products by category
router.get('/categories/:categoryId/products', listProductByCategory);

// List orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete order
router.delete('/orders/:orderId', deleteOrder);

// List history
router.get('/history', listHistory);

// Create history
router.post('/history', createHistory);

// Delete history
router.delete('/history/:id', deleteHistory);

// Confirm server is running

router.get('/', (req, res) => {
  return res.send('Hello World');
});
