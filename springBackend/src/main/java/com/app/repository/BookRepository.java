package com.app.repository;

import org.springframework.data.repository.CrudRepository;

import com.app.model.BookModel;

//repository that extends CrudRepository  
public interface BookRepository extends CrudRepository<BookModel, Integer> {
}
