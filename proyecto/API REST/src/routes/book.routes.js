const express = require('express');
const router = express.Router();
const Book = require('../models/book.model')

//MIDDLEWARE:
const getBook = async(req, res, next) => {
    let book;
    const { id } = req.params;

    //caracteristicas mongo
    if(!id.match(/^[0-9a-fA-F]{24}$/)){
        return res.status(400).json({ message: 'ID inválido' })
    }

    try {
        book = await Book.findById(id)
        if(!book){
            return res.status(404).json(
                {
                    message: 'Libro no encontrado'
                }
            )
        }
    } catch (error) {
        return res.status(500).json({ 
            message: error.message
        })
    }

    res.book = book;
    next()
}

// Obtener todos los libros

router.get('/', async (req, res) => {
    try {
        const books = await Book.find()
        console.log('GET ALL', books)
        if(books.length === 0) {
            return res.status(204).json([])
        }
        res.json(books)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Crear nuevo libro

router.post('/', async(req, res) => {
    const { title, author, genre, publication_date} = req?.body
    if(!title || !author || !genre || !publication_date) {
        return res.status(400).json({
            message: 'Todos los campos son obligatorios'
        })
    }

    const book = new Book(
        {
            title,
            author,
            genre,
            publication_date
        }
    )

    try {
        const newBook = await book.save()
        res.status(201).json(newBook)
        console.log(newBook)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

// Obtener un libro por id

router.get('/:id', getBook, async(req, res) => {
    res.json(res.book)
})

// Actualizar un libro por id

router.put('/:id', getBook, async (req, res) => {

    try {
        const book = res.book
        book.title = req.body.title || book.title;
        book.author = req.body.author || book.author;
        book.genre = req.body.genre || book.genre;
        book.publication_date = req.body.publication_date || book.publication_date;

        const updatedBook = await book.save()
        res.json(updatedBook)
    } catch (error) {
        res.status(400).json({ 
            message: error.message
        })
    }
})

router.patch('/:id', getBook, async (req, res) => {

    if(!req.body.title && !req.body.author && !req.body.genre && !req.body.publication_date){
        res.status(404).json({
            message: 'Ningun campo esta siendo enviado'
        })
    }

    try {
        const book = res.book
        book.title = req.body.title || book.title;
        book.author = req.body.author || book.author;
        book.genre = req.body.genre || book.genre;
        book.publication_date = req.body.publication_date || book.publication_date;

        const updatedBook = await book.save()
        res.json(updatedBook)
    } catch (error) {
        res.status(400).json({ 
            message: error.message
        })
    }
})

// Eliminar un libro por id

router.delete('/:id', getBook, async (req, res) => {
    try {
        const book = res.book
        await book.deleteOne({ _id: book._id })
        res.json({ message: 'Libro eliminado'})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


module.exports = router