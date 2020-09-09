import { Request, Response } from 'express';
import pool from '../database';
class CategoriaController {


    public async getAll(req: Request, res: Response): Promise<void> {
        const workers = await pool.query('SELECT * FROM categoria');
        res.json(workers);
    }
    
    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const categoria = await pool.query('SELECT * FROM subcategoria WHERE cod_categoria = ?', [id]);
        if (categoria.length > 0) {
            return res.json(categoria[0]);
        }
        res.status(404).json({ text: "Categoria no registrada" });
    }
    public async create(req: Request, res: Response): Promise<any> {
        const result = await pool.query('INSERT INTO subcategoria set ?', [req.body]);
        res.json(result);

    }
    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const categoria = req.body;
        const result =await pool.query('UPDATE subcategoria set ? WHERE cod_sub_categoria = ?', [categoria, id]);
        res.json(result);
    }

    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const result =await pool.query('DELETE FROM subcategoria  WHERE cod_sub_categoria = ?', [id]);
        res.json(result);
    }
}

export const categoriaController = new CategoriaController;