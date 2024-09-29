import express from 'express';
import{
    createLeaveReq,
    updateLeaveReq,
    deleteLeaveReq,
    getById,
    getByIdEmployee,
    getAll
} from '../controllers/LeaveReq.js'

const router = express.Router();

router.post('/', createLeaveReq);

router.put('/:id', updateLeaveReq);

router.delete('/:id', deleteLeaveReq);

router.get('/:id', getById);

router.get('/employee/:id', getByIdEmployee);

router.get('/', getAll);

export default router;