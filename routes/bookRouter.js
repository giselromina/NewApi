const express = require('express');

function routes(Book){
  const bookRouter = express.Router();
  bookRouter.route('/books')
.post((req,res)=>{
  const book = new Book(req.body);

  book.save();
  return res.status(201).json(book);
})
.get((req,res)=>{
  const query = {};
  if(req.query.genre){
  query.genre = req.query.genre ;
}
//Esta linea implica que si meto cualquier verdura dentro de la url
// automaticamente va a ignorar lo que ponga y mostrar los datos originales
   Book.find(query,(err,books)=>{
     if(err){return res.send(err);}
     return res.json(books);
   });
});

//Ahora generamos una route para que se consulten los id de los libros
// individuales.

bookRouter.route('/Books/:bookId').get((req,res)=>{

   Book.findById(req.params.bookId,(err,book)=>{
     if(err){return res.send(err);}
     return res.json(book);
   });
});
 return bookRouter;
}

module.exports = routes;
