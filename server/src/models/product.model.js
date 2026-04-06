const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    isNewArrival: {
        type: Boolean,
        default: false
    },

    isOnSale: {
        type: Boolean,
        default: false
    },

    sizes: [
        {
        size: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        salePrice: {
            type: Number
        },
        stock: {
            type: Number,
            default: 0
        }
        }
    ]
},
{ timestamps: true }
);

const productsModel = mongoose.model('products', productSchema);

module.exports = productsModel;