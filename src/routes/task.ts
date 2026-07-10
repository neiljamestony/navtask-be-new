import express from 'express';
import { create, update, get, getAll, remove } from '../controller/TaskController'
import { upload } from '../middleware/multer';

const router = express.Router();

router.post('/create', upload.array("attachments", 5), create);
router.post('/update', upload.array("attachments", 5), update);
router.post('/getOne', get);
router.post('/getAll', getAll);
router.post('/remove', remove);

export default router;