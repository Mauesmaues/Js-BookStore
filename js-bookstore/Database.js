module.exports = class Database{
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key){
        return this.#storage[key]
    }

    saveAuthor(){
        this.#storage.authors.push(author)
    }

    findBookByName(bookName){
        return this.#storage.books.find(b => b.name === bookName)
    }

    saveBook(book){
        const bookExists = this.#storage.books.findBookByName(book.name)
        if(!bookExists){
            this.#storage.books.push(book)
        }
    }

    addBooksToStock(bookName, quantity){
        const book = this.#storage.books.findBookByName(bookName)
        book?.addToStock(quantity);
    }

    removeBooksFromStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity)
    }

    findPosterByName(posterName){
        return this.#storage.posters.find(b => b.name === posterName)
    }

    savePoster(poster){
        const posterExists = this.#storage.books.findPosterByName(poster.name)
        if(!posterExists){
            this.#storage.posters.push(poster)
        }
    }

    addPostersToStock(posterName, quantity){
        const poster = this.#storage.books.findBookByName(posterName)
        poster?.addToStock(quantity);
    }

    removeBooksFromStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity)
    }
}