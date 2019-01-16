import { Component, OnInit } from "@angular/core";
import { TopicService } from "../shared/topic.service";
import { ActivatedRoute } from "@angular/router";
import { ITopic } from "../shared/topic.model";

@Component({
  templateUrl: 'topic-details.component.html'
})
export class TopicDetailsComponent implements OnInit {

  topic:ITopic

  constructor(private topicService:TopicService, private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.topic = this.topicService.getTopic(this.route.snapshot.params['topicname']);
  }
}
