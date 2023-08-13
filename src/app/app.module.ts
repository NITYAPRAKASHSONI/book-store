import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import { BooksComponent } from './books/books.component';
import {FormsModule} from "@angular/forms";
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';

import { RegisterComponent } from './auth/register/register.component';
import {AuthModule} from "./auth/auth/auth.module";


@NgModule({
  declarations:[AppComponent, BooksComponent, BookComponent, CartComponent, LoginComponent,  RegisterComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule,AuthModule],
  bootstrap:[AppComponent]
})
export class AppModule{}
