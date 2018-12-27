import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  template: `
    <h1>Voeg een nieuw onderwerp toe</h1>
    <button type="submit">Submit</button>
    <button type="button" (click)="cancel()">Cancel</button>
  `
})
export class TopicCreateComponent {
  constructor(private router:Router) {

  }

  cancel() {
    this.router.navigate(['/topics'])

  }

}
