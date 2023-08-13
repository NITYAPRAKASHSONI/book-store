import {Component, OnInit} from '@angular/core';
import {Book} from "../type/book";
import {BooksService} from "./books.service";


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent implements OnInit{
  books:Book[] =[];
  constructor(private bookService:BooksService) {


  }

  isShowingBook:boolean=true;

  toggleBooks(){
    this.isShowingBook =!this.isShowingBook;
  }


  ngOnInit(): void {
    this.books=this.bookService.getBooks();
  }

}
