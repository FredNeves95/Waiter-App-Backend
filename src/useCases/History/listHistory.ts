import { Request, Response } from 'express';

import { History } from '../../models/History';

export async function listHistory(req: Request, res: Response){
  const { page = 1, limit = 10 } = req.query;
  try {
    const history = await History.find()
      .sort({ archivedAt: -1 })
      .populate('products.product')
      .limit(Number(limit) * 1)
      .skip((Number(page) - 1) * Number(limit));

    const totalItems = await History.count();

    res.json({ items: history, total: totalItems, totalPages: Math.ceil(totalItems / Number(limit)),
      currentPage: page });
  } catch (error) {
    res.sendStatus(500);
  }
}
