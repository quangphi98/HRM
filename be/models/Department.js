import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Department Schema
const DepartmentSchema = new Schema({
    department_name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    manager_id: {
        type: Schema.Types.ObjectId, 
        ref: 'Employee'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Tạo model cho Department
const Department = mongoose.model('Department', DepartmentSchema);

export default Department;
