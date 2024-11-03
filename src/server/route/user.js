import express, { raw } from 'express';
import user from '../controller/user.js';

const router = express.Router();

router.get('/', user.getMethod.bind(user));

router.get('/getAll', user.getAll.bind(user));

router.get('/getById', user.getById.bind(user));

router.post('/insert', user.insert.bind(user));

router.delete('/delete', user.deleteId.bind(user));

export default router;
