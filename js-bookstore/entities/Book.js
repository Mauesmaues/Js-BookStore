const Product = require("./Product");

module.exports = class Book extends Product{
    constructor(title, synopsis, genre, pages, author, descripition, price, inStock = 0){
        super(`Livro: ${title}`, descripition, price, inStock)
            this.title = title
            this.synopsis = synopsis
            this.genre = genre
            this.pages = pages
            this.author = author
        
    }
}