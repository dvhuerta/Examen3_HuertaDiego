import {Router} from 'express';
import {categoriaController} from '../controllers/categoriaControlers';


class CategoriaRouter {
    public router: Router=Router();

    constructor(){
        this.config();

    }
    
    config(): void {
        this.router.get('/', categoriaController.getAll);
        this.router.get('/:id', categoriaController.getOne);
        this.router.post('/', categoriaController.create);
        this.router.put('/:id', categoriaController.update);
        this.router.delete('/:id', categoriaController.delete);
    }
}

const categoriaRouter= new CategoriaRouter();
export default categoriaRouter.router;
