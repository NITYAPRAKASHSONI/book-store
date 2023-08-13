import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'clean code',
        authorName: 'robert c martin',
        imgSrc:
          'https://images-na.ssl-images-amazon.com/images/I/41zoxjP9lcL._SX323_BO1,204,203,200_.jpg',
        amount: 700,
      },
      {
        name: 'pragmatic programmer',
        authorName: 'david thomas',
        imgSrc: 'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg',
        amount: 800,
      },
      {
        name: 'Art of Computer Programming',
        authorName: 'Donald John Fuller',
        imgSrc:
          'https://images-na.ssl-images-amazon.com/images/I/41gCSRxxVeL._SY429_BO1,204,203,200_.jpg',
        amount: 18300,
      },
      {
        name: 'Introduction to Algorithms',
        authorName: 'T Cormen',
        imgSrc:
          'https://images-na.ssl-images-amazon.com/images/I/41VndKVtiXL._SX442_BO1,204,203,200_.jpg',
        amount: 1500,
      },
      {
        name: 'The Complete Guide to Angular',
        authorName: 'Ari Lerner',
        imgSrc: 'https://m.media-amazon.com/images/I/51rnkZJPVZL._SX384_BO1,204,203,200_.jpg',
        amount: 5282
      }
    ];
  }
}
