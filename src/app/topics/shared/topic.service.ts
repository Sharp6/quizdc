import { Injectable, OnInit } from "@angular/core";
import { AngularFireDatabase, AngularFireList  } from "@angular/fire/database"

import { ITopic } from "./topic.model";
import { Observable } from "rxjs";
import { AuthService } from "src/app/user/auth.service";

import { map, tap } from 'rxjs/operators';

@Injectable()
export class TopicService implements OnInit {

  topics: Observable<ITopic[]>;
  private basePath:string = '/topics';

  constructor(private db:AngularFireDatabase, private authService:AuthService) {

  }

  ngOnInit() {}

  getTopics(query = {}):Observable<ITopic[]> {
    this.topics = this.db.list<ITopic>(this.basePath).snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(
            change => ({$key: change.payload.key, ...change.payload.val()})
          );
        })
      );
    return this.topics;
  }

  getTopic(name:string):any {
    //return topics.find(topic => topic.name.toLowerCase() == name.toLowerCase());
  }

  createTopic(newTopic:ITopic) {
    this.db.list<ITopic>(this.basePath).push(newTopic);
  }

  claimTopic(topic:ITopic) {
    this.db.list(this.basePath).update(topic.$key, {
      claimedBy: this.authService.currentUser.uid
    });
  }

  releaseTopic(topic:ITopic) {
    this.db.list(this.basePath).update(topic.$key, {
      claimedBy: ''
    });
  }
}
