import { Routes } from '@angular/router'
import { TopicsListComponent } from "./topics/topics-list.component";
import { TopicDetailsComponent } from "./topics/topic-details/topic-details.component";
import { TopicCreateComponent } from './topics/topic-create.component';
import { Error404Component } from './errors/404.components';
import { TopicRouteActivator } from './topics/topic-details/topic-route-activator.service';

export const appRoutes:Routes = [
  {
    path: 'topics', component: TopicsListComponent
  },
  {
    path: 'topics/new', component: TopicCreateComponent
  },
  {
    path: 'topics/:topicname',
    component: TopicDetailsComponent,
    canActivate: [TopicRouteActivator]
  },
  {
    path: '404', component: Error404Component
  },
  {
    path: '', redirectTo: '/topics', pathMatch: 'full'
  },
  {
    path: 'user', loadChildren: './user/user.module#UserModule'
  }
]
