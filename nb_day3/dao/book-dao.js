const mongoose=require('../models/common-model');
let Book=mongoose.model('book');
function findAllBooks(callback) {
    Book.find({},(err,books)=>{
        callback(books);
    })
}
function addBook(book,callback) {
    Book.create(book,(err,bk)=>{
        callback(bk);
    })
}
function updateBook(_id,book,cb) {
    Book.findByIdAndUpdate(_id,book,(err,old)=>{
        Book.findById(_id,(err,nb)=>{
            cb(nb);
        })
    })
}
function deleteBook(_id,cb) {
    Book.deleteOne({_id:_id},(err,rs)=>{
        cb({});
    })
}
exports.findAllBooks=findAllBooks;
exports.addBook=addBook;
exports.updateBook=updateBook;
exports.deleteBook=deleteBook;