import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./user.routes";
import { UserProfileComponent } from "./profile.component";
import { SignUpComponent } from "./signup.component";
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthActivator } from "./../auth-activator.service";

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from './../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  declarations: [
    UserProfileComponent,
    LoginComponent,
    SignUpComponent
  ],
  providers: [
    AuthActivator
  ]
})
export class UserModule {}
