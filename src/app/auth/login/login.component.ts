import { Component } from '@angular/core';
import {LoginForm} from "../../Auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
form:LoginForm={
  email:'',
  password:''
}

submit(){
  alert("Form Submitted");
}
}
