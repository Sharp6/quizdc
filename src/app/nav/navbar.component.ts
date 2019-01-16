import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    span.active { color: red }
  `]
})
export class NavBarComponent {
  constructor(private authService:AuthService) {}
}
