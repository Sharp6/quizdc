import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { ITopic } from "./shared/topic.model";
import { TopicService } from './shared/topic.service';

@Component({
  template: `
    <h1>Voeg een nieuw onderwerp toe</h1>
    <form [formGroup]="topicForm" (ngSubmit)="saveTopic(topicForm.value)">
      <input id="topic" formControlName="topic" type="text" placeholder="Nieuw onderwerp"/>
      <button type="submit">Submit</button>
      <button type="button" (click)="cancel()">Cancel</button>
    </form>
  `
})
export class TopicCreateComponent implements OnInit {
  constructor(private router:Router, private topicService:TopicService) { }

  topicForm:FormGroup;

  ngOnInit() {
    let topic = new FormControl();

    this.topicForm = new FormGroup({
      topic: topic
    });
  }

  cancel() {
    this.router.navigate(['/topics'])
  }

  saveTopic(formValues) {
    let newTopic:ITopic = {
      name: formValues['topic']
    }
    this.topicService.createTopic(newTopic);
  }

}
