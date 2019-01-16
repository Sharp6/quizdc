import { Routes } from '@angular/router'
import { TopicsListComponent } from "./topics/topics-list.component";
import { TopicDetailsComponent } from "./topics/topic-details/topic-details.component";
import { TopicCreateComponent } from './topics/topic-create.component';
import { Error404Component } from './errors/404.components';
import { TopicRouteActivator } from './topics/topic-details/topic-route-activator.service';
import { QuestionCreateComponent } from './questions/index';
import { AuthActivator } from './auth-activator.service';

export const appRoutes:Routes = [
  {
    path: 'topics', component: TopicsListComponent,
    canActivate: [AuthActivator]
  },
  {
    path: 'topics/new', component: TopicCreateComponent,
    canActivate: [AuthActivator]
  },
  {
    path: 'topics/:topicname',
    component: TopicDetailsComponent,
    canActivate: [TopicRouteActivator,AuthActivator]
  },
  {
    path: 'topics/questions/new',
    component: QuestionCreateComponent,
    canActivate: [AuthActivator]
  },
  {
    path: '404',
    component: Error404Component,
    canActivate: [AuthActivator]
  },
  {
    path: '',
    redirectTo: '/topics',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  }
]
