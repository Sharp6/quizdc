import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
    <div>
      --- Start of the menu ---
      <br/>
      <span [routerLink]="['/topics']" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Topics</span>
      <br/>
      <span [routerLink]="['/topics/new']" routerLinkActive="active">New Topic</span>
      <br/>
      <hr />
      <a [routerLink]="['/user/profile']">Hi Olivia</a>
      <br />
      --- End of the menu ---
    </div>
    `,
  styles: [`
    span.active { color: red }
  `]
})
export class NavBarComponent {
}
