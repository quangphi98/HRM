import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const PayrollSchema = new Schema({
    baseSalary: { 
        type: Number, 
        required: true 
    },
    bonuses: { 
        type: Number, 
        default: 0 
    },
    deductions: { 
        type: Number, 
        default: 0 
    },
    totalPay: { 
        type: Number 
    },
    employee_id: {
        type: Schema.Types.ObjectId, 
        ref: 'Employee'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: { 
        type: Date, 
        default: Date.now 
    }
})

//model cho Payroll
const Payroll = mongoose.model('Payroll', PayrollSchema);

export default Payroll ;