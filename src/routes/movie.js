import { Router } from 'express';
import * as movieController from '../controller/movie';

const router = Router();

router.get('/', movieController.fetchAll);

router.get('/:year', movieController.fetchByYear);

router.get('/:year/:title', movieController.fetchByYearAndTitle);

router.post('/', movieController.create);

router.put('/:year/:title', movieController.update);

router.delete('/:year/:title', movieController.remove);

export default router;
