const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter a product name'],
        trim:true,
        maxlength:[100,'Product name cannot exceed 100 characters']
    },
    price:{
        type:Number,
        required:[true,'Please enter a product price'],
        maxlength:[100,'Product price cannot exceed 10 characters'],
        default: 0.0
    },
    description:{
        type:String,
        required:[true,'Please enter a product description'],
    },
    ratings:{
        type: Number,
        default: 0
    },
    images:[
        {
            public_id:{
                type:String,
                required: true
            },
            url:{
                type:String,
                required:true
            },
        }
    ],
    category:{
        type: String,
        required:[true,'Please select category for this product'],
        enum:{
            values:[
                'Electronics',
                'Cameras',
                'Laptop',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'

            ],
            message:'Please select correct category for product'
        }
    },
    seller:{
        type:String,
        required:[true,'Please enter product seller']
    },
    stock:{
        type:Number,
        required:[true,'Please enter a product stock'],
        maxlength:[100,'Product stock cannot exceed 10 characters'],
        default: 0
    },
    numOfReview:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }

        }
    ],
    createAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('Product',productSchema);