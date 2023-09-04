import { Request, Response } from 'express';

import { History } from '../../models/History';

export async function deleteHistory(req: Request, res: Response){
  try {
    const { id } = req.params;

    await History.findByIdAndDelete(id);

    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500);
  }
}
