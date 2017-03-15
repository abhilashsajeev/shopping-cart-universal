// init data for books
import books from './books'

class BooksDB {
  constructor(){
    this.books = books
  }

  _getActiveBooks(){
    return this.books.books.filter((item)=>{
      return item.isActive
    })
  }

  _getAllBooks(){
    return this.books
  }

  getBooks(includeInactive){
    if(includeInactive){
      return _getAllBooks()
    } else {
      return _getActiveBooks()
    }
  }  
}

var bookDB = new BooksDB()

export default bookDB;