import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function deleteCategory(req: Request, res: Response){
  try {
    const { categoryId } = req.params;
    await Category.findByIdAndDelete(categoryId);

    res.sendStatus(200);

  } catch (error) {
    res.sendStatus(500);
  }
}
