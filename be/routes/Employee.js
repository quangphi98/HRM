import express from 'express'
import {
    updateInfor,
    deleteInfor,
    getAllInfor,
    getInfor
} from '../controllers/Employee.js'

const router = express.Router()

router.put('/:id', updateInfor);

router.delete('/:id', deleteInfor);

router.get('/', getAllInfor);

router.get('/:id' , getInfor);

export default router;