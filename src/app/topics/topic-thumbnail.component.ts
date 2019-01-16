import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { ITopic } from './shared/topic.model'
import { TopicService } from "./shared/topic.service";

import { AuthService } from "../user/auth.service";
import { IUserInfo } from "../user/userinfo.model";

@Component({
  selector: 'topic-thumb',
  templateUrl: './topic-thumbnail.component.html',
  styles: [`
    .topic-card {
      max-width: 400px;
    }
  `]
})
export class TopicThumbnailComponent implements OnInit {
  @Input() topic:ITopic
  claimedBy: Observable<IUserInfo>

  constructor(private topicService:TopicService, private authService:AuthService) {}

  ngOnInit() {
    if(this.isTopicClaimed()) {
      this.claimedBy = this.authService.findUserInDb(this.topic.claimedBy);
    }
  }

  claim() {
    this.topicService.claimTopic(this.topic);
  }

  release() {
    this.topicService.releaseTopic(this.topic);
  }

  isTopicClaimed():boolean {
    return !!this.topic.claimedBy;
  }

  isTopicClaimedByCurrentUser():boolean {
    return this.isTopicClaimed() && this.topic.claimedBy == this.authService.currentUser.uid;
  }
}
