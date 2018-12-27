import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { TopicService } from "../shared/topic.service";

@Injectable()
export class TopicRouteActivator implements CanActivate {
  constructor(private topicService:TopicService, private router:Router) {

  }

  canActivate(route:ActivatedRouteSnapshot) {
    const topicExists = !!this.topicService.getTopic(route.params['topicname']);

    if(!topicExists) {
      this.router.navigate(['/404']);
    }
    return topicExists;
  }
}
