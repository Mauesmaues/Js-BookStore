const Product = require("./Product");

module.exports = class Poster extends Product{
    constructor(name, descripition, height, width, price, inStock = 0){
        super(name, descripition, price, inStock)
        this.height = height;
        this.width = width;
    }
}