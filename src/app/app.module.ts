import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthActivator } from './auth-activator.service';

import {
  TopicsListComponent,
  TopicService,
  TopicThumbnailComponent,
  TopicCreateComponent,
  TopicRouteActivator,
} from './topics/index'

import {
  QuestionCreateComponent,
  QuestionListComponent
} from './questions/index'

import {

} from './answers/index'

import { AppComponent } from './app.component';
import { TopicDetailsComponent } from './topics/topic-details/topic-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.components';
import { AuthService } from './user/auth.service';
import { ReactiveFormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TopicsListComponent,
    TopicThumbnailComponent,
    TopicDetailsComponent,
    TopicCreateComponent,
    NavBarComponent,
    Error404Component,
    QuestionCreateComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    TopicService,
    TopicRouteActivator,
    AuthActivator,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
