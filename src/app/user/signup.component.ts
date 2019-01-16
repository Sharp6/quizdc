import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  templateUrl: 'signup.component.html'
})
export class SignUpComponent {

  email:string
  password:string
  displayName:string

  constructor(private router:Router, private authService:AuthService) {
  }

  signup(values) {
    this.authService.signupUser(values['email'], values['password'], values['displayName']);
    this.router.navigate(['topics']);
  }

  cancel() {
    this.router.navigate(['topics']);
  }

}
