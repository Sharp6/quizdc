import { Injectable } from "@angular/core";
import { ITopic } from "./topic.model";

@Injectable()
export class TopicService {
  getTopics():ITopic[] {
    return topics;
  }

  getTopic(name:string):ITopic {
    return topics.find(topic => topic.name.toLowerCase() == name.toLowerCase());
  }
}

const topics:ITopic[] = [
  {
    name: "Sport"
  },
  {
    name: "Boekskes"
  }
]
