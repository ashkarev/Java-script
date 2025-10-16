class Library {
  // property
  bookDetails = {
    101: {
      bookId: 101,
      title: "JavaScript Basics",
      author: "John Doe",
      availableCopies: 3,
    },
    102: {
      bookId: 102,
      title: "Learn React",
      author: "Jane Smith",
      availableCopies: 5,
    },
    103: {
      bookId: 103,
      title: "Mastering Node.js",
      author: "David Wilson",
      availableCopies: 2,
    },
    104: {
      bookId: 104,
      title: "Angular for Beginners",
      author: "Sophia Lee",
      availableCopies: 4,
    },
  };

  // methods to implement:
  // 1. validateBook(bookId)  → check if book exists
bookIdVal(bId){
    if(bId in this.bookDetails){
        return true
    }else{
        false
    }
}


  // 2. borrowBook(bookId) → decrease availableCopies by 1 (if available)
     borrowBook(Id){
        if(this.bookIdVal(Id)){
            let storeBook=this.bookDetails[Id]
        
            console.log(storeBook.availableCopies-1)
        }else{
            return false
        }
     }

  // 3. returnBook(bookId) → increase availableCopies by 1

  // 4. checkAvailability(bookId) → display available copies

  checkAvailable(idBOOk){
    if(this.bookIdVal(idBOOk)){
        let str=this.bookDetails[idBOOk]
        console.log(str.availableCopies)

    }else{
        console.log('invalid')
    }
  }
}

let obj= new Library()
result1=obj.bookIdVal(101)
result1?console.log("you are eligible"):console.log('you are not eligible')

let result2=obj.borrowBook(102)


let result4=obj.checkAvailable(103)