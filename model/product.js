'use strict';

const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name : String,
    product_color : String,
    product_status : Boolean,
    price : Number,
    created_at : Date
});

ProductSchema.statics = {

    get(query, callback) {
        this.findOne(query, callback);
    },

    getAll(query, callback) {
        this.find(query, callback);
    },

    insert(data, callback) {
        var company = new this(data);
        company.save(callback);
    },

    updates(id, updateData, callback) {
        this.update(id, {$set: updateData}, callback);
    },

    delete(deleteDate, callback) {
        this.remove(deleteDate, callback);
    }
}
const product = mongoose.model('Product', ProductSchema);
module.exports = product;