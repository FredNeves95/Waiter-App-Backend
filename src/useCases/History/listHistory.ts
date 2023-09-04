import { Request, Response } from 'express';

import { History } from '../../models/History';

export async function listHistory(req: Request, res: Response){
  try {
    const history = await History.find()
      .sort({ archivedAt: 1 })
      .populate('products.product');

    res.json(history);
  } catch (error) {
    res.sendStatus(500);
  }
}
