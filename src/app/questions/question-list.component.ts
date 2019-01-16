import { Component, OnInit, Input } from "@angular/core";
import { TopicService } from "../topics/shared/topic.service";
import { ActivatedRoute, Router } from "@angular/router";
import { IQuestion } from "./shared/question.model";
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'question-list',
  templateUrl: 'question-list.component.html'
})
export class QuestionListComponent {
  @Input() questions:IQuestion[]

  constructor() {}
}
