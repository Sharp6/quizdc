import { Component } from "@angular/core";

@Component({
  selector: 'userProfile',
  template: `
    <h1>Edit your profile</h1>
    <button type="submit">Submit</button>
    <button type="button">Cancel</button>
  `
})
export class UserProfileComponent {

  constructor() {
  }

}
