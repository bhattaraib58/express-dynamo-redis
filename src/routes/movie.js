import { Router } from 'express';
import * as movieController from '../controller/movie';

const router = Router();

router.get('/', movieController.fetchAll);

router.get('/:year/:title', movieController.fetchByYearAndTitle);

export default router;
