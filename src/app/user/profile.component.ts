import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  selector: 'userProfile',
  templateUrl: './profile.component.html'
})
export class UserProfileComponent implements OnInit {

  profileForm:FormGroup

  constructor(private router:Router, private authService:AuthService) {
  }

  ngOnInit() {
    let displayName = new FormControl(this.authService.currentUser.displayName, Validators.required);
    this.profileForm = new FormGroup({
      displayName: displayName
    });
  }

  saveProfile(formValues) {
    if(this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.displayName);
      this.router.navigate(['/topics']);
    }
  }

  cancel() {
    this.router.navigate(['/topics']);
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigate(["/user/login"]);
  }

}
