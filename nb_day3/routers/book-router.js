const express=require('express');

const bookDao=require('../dao/book-dao');
let router=express.Router();

router.route("/")
.get((req,res)=>{
    bookDao.findAllBooks((books)=>{
        res.json(books);
    })
})
    .post((req,res)=>{
        let book=req.body;
        bookDao.addBook(book,(bk)=>{
            res.json(bk);
        })
    });

router.route("/:id")
    .put((req,res)=>{
        let id=req.params.id;
        let book=req.body;
        bookDao.updateBook(id,book,(bk)=>{
            res.json(bk);
        })
    })
    .delete((req,res)=>{
        let id=req.params.id;
        bookDao.deleteBook(id,(r)=>{
            res.json(r);
        })
    })

module.exports=router;