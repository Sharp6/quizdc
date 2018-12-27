import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  TopicsListComponent,
  TopicService,
  TopicThumbnailComponent,
  TopicCreateComponent,
  TopicRouteActivator
} from './topics/index'

import { AppComponent } from './app.component';
import { TopicDetailsComponent } from './topics/topic-details/topic-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.components';

@NgModule({
  declarations: [
    AppComponent,
    TopicsListComponent,
    TopicThumbnailComponent,
    TopicDetailsComponent,
    TopicCreateComponent,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TopicService,
    TopicRouteActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
