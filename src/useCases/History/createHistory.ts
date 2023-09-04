import { Request, Response } from 'express';

import { Order } from '../../models/Order';
import { History } from '../../models/History';

export async function createHistory(req: Request, res: Response){
  try {
    const { ids } = req.body;
    if(!ids || !ids.length){
      throw new Error('IDs list is required!');
    }

    const allHistory = await Promise.all(
      ids.map(async (id: string) => {
        const order = await Order.findById(id);
        await Order.findByIdAndDelete(id);

        const history = await History.create({
          table: order?.table,
          products: order?.products,
          createdAt: order?.createdAt
        });

        return history;
      })
    );

    res.status(201).json(allHistory);
  } catch (error) {
    res.send(500).json(error);
  }
}
