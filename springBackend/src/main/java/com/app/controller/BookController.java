package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.BookModel;
import com.app.service.BookService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BookController {
	@GetMapping
	public String test()
	{
		return "Setup Completed Successfully";
	}
	@Autowired
	BookService bookService;

	// creating a get mapping that retrieves all the books detail from the database
	@GetMapping("/book")
	private List<BookModel> getAllBooks() {
		return bookService.getAllBooks();
	}

	// creating a get mapping that retrieves the detail of a specific book
	@GetMapping("/book/{bookid}")
	private BookModel getBooks(@PathVariable("bookid") int bookid) {
		return bookService.getBooksById(bookid);
	}

	// creating a delete mapping that deletes a specified book
	@DeleteMapping("/book/{bookid}")
	private void deleteBook(@PathVariable("bookid") int bookid) {
		bookService.delete(bookid);
	}

	// creating post mapping that post the book detail in the database
	@PostMapping("/books")
	private int saveBook(@RequestBody BookModel books) {
		bookService.saveOrUpdate(books);
		return books.getBookid();
	}

	// creating put mapping that updates the book detail
	@PutMapping("/books")
	private BookModel update(@RequestBody BookModel books) {
		bookService.saveOrUpdate(books);
		return books;
	}
}
