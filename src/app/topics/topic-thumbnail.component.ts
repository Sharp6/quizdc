import { Component, Input } from "@angular/core";
import { ITopic } from './shared/topic.model'

@Component({
  selector: 'topic-thumb',
  template: `
    <div [routerLink]="['/topics', topic.name]">Ik ben een topic {{topic.name}}</div>
  `
})
export class TopicThumbnailComponent {
  @Input() topic:ITopic
}
