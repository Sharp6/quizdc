import { UserProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";
import { SignUpComponent } from "./signup.component";
import { AuthActivator } from "./../auth-activator.service";

export const userRoutes = [
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthActivator]
  },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent}
]
