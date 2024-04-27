package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.BookModel;
import com.app.repository.BookRepository;

//defining the business logic  
@Service
public class BookService {
	@Autowired
	BookRepository bookRepository;

	// getting all books record by using the method findaAll() of CrudRepository
	public List<BookModel> getAllBooks() {
		List<BookModel> books = new ArrayList<BookModel>();
		bookRepository.findAll().forEach(books1 -> books.add(books1));
		return books;
	}

	// getting a specific record by using the method findById() of CrudRepository
	public BookModel getBooksById(int id) {
		return bookRepository.findById(id).get();
	}

	// saving a specific record by using the method save() of CrudRepository
	public void saveOrUpdate(BookModel books) {
		bookRepository.save(books);
	}

	// deleting a specific record by using the method deleteById() of CrudRepository
	public void delete(int id) {
		bookRepository.deleteById(id);
	}

	// updating a record
	public void update(BookModel books, int bookid) {
		bookRepository.save(books);
	}
}

