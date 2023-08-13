import { Component } from '@angular/core';
import {LoginForm, RegisterForm} from "../../Auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

   form:RegisterForm={
     email:'',
  password:'',
     confirmPassword :''
}

passwordMatched:boolean=true;
  submit(){
    if(this.form.password !==this.form.confirmPassword){
      this.passwordMatched=false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential)
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });


  }
}
