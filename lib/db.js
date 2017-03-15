import books from './bookdb'
import orders from './orderdb'


class LocalDB{
    constructor(){
        this.books = books
        this.orders = orders
    }

    addNewBooks(){

    }
}

export default LocalDB()