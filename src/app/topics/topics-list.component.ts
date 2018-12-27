import { Component, OnInit } from "@angular/core";
import { TopicService } from "./shared/topic.service";
import { ITopic } from "./shared/topic.model";

@Component({
  selector: 'topics-list',
  templateUrl: './topics-list.component.html'
})
export class TopicsListComponent implements OnInit {
  topics: ITopic[];

  constructor(private topicService:TopicService) {
  }

  ngOnInit() {
    this.topics = this.topicService.getTopics();
  }
}
