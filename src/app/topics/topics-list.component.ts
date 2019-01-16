import { Component, OnInit } from "@angular/core";
import { TopicService } from "./shared/topic.service";
import { ITopic } from "./shared/topic.model";

import { Observable } from "rxjs";

@Component({
  selector: 'topics-list',
  templateUrl: './topics-list.component.html'
})
export class TopicsListComponent implements OnInit {
  topics: Observable<ITopic[]>;

  constructor(private topicService:TopicService) {
  }

  ngOnInit() {
    this.topics = this.topicService.getTopics();
  }
}
