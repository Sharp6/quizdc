import { Component, OnInit } from "@angular/core";
import { TopicService } from "../shared/topic.service";
import { ActivatedRoute } from "@angular/router";
import { ITopic } from "../shared/topic.model";

@Component({
  template: `
    <h1>Details van een topic</h1>
    <div>Ik ben de details van een topic: {{topic?.name}}</div>
  `
})
export class TopicDetailsComponent implements OnInit {

  topic:ITopic

  constructor(private topicService:TopicService, private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.topic = this.topicService.getTopic(this.route.snapshot.params['topicname']);
  }
}
