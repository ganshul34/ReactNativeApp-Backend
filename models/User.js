// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// // collection and schema for Registration
// let Registration = new Schema({
// 	name: {
// 		type: String
// 	},
// 	email: {
// 		type: String,
// 		unique: true,
// 		required: true,
// 		trim: true
// 	},
// },{
// 		collection: 'Registration'
// });

// module.exports = mongoose.model('Registration', Registration);


const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
		type: String
	},
	email: {
		type: String,
		unique: true,
		trim: true
    },
    ph_no: {
        type: Number,
        maxlength: 10
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
},{
    collection: 'userSchema'
    
})


mongoose.model('users', userSchema);