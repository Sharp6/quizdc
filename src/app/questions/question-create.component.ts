import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IQuestion } from "./shared/question.model";
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  templateUrl: 'question-create.component.html'
})
export class QuestionCreateComponent implements OnInit {

  question:FormControl
  newQuestionForm:FormGroup

  constructor(private router:Router) {}

  ngOnInit() {
    this.question = new FormControl('', Validators.required);

    this.newQuestionForm = new FormGroup({
      question: this.question
    })
  }

  saveQuestion(values) {
    let question:IQuestion = {
      value: values.question,
      id: undefined,
      answers: []
    }

    console.log(question)
  }

  cancel() {

  }
}
