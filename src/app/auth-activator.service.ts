import { Router, CanActivate } from "@angular/router"
import { Injectable } from "@angular/core"
import { AuthService } from "./user/auth.service"

@Injectable()
export class AuthActivator implements CanActivate {
  constructor(private authService:AuthService, private router:Router) {

  }

  canActivate() {
    const isAuthenticated = this.authService.isAuthenticated();
    if(!isAuthenticated) {
      this.router.navigate(['/user/login'])
    }

    return isAuthenticated;
  }
}
