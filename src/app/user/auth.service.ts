import { Injectable } from "@angular/core";
import { IUser } from './user.model';

import { AngularFireDatabase } from "@angular/fire/database"
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";
import { IUserInfo } from "./userinfo.model";

@Injectable()
export class AuthService {

  currentUser: IUser;
  authState: Observable<IUser|null> = null;

  constructor(public afAuth: AngularFireAuth, private db:AngularFireDatabase) {
    afAuth.user.subscribe((user) => {
      console.log(user);
      this.currentUser = user;
    });
  }

  loginUser(email:string, password:string) {

    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        console.log(error);
      });
    /*this.currentUser = {
      firstName: "Felix",
      lastName: "Huysmans",
      userName: userName
    }
    */
  }

  logoutUser() {
    this.afAuth.auth.signOut();
  }

  signupUser(email:string, password:string, displayName:string) {
    const profileData = {
      displayName: displayName || "Anoniempje",
      photoURL: null
    };
    let assignedUid = null;

    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        assignedUid = userCredential.user.uid;
        return userCredential.user.updateProfile(profileData)
      })
      .then(() => {
        this.db.list("/users").push({
          uid: assignedUid,
          displayName: profileData.displayName
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  findUserInDb(uid:string):Observable<IUserInfo> {
    console.log("hello?", uid);
    return this.db.list("/users", ref => ref.orderByChild('uid').equalTo(uid)).snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(
            change => ({$key: change.payload.key, ...change.payload.val() })
          );
        }),
        map(changes => changes[0]),
        map(val => {
          let userInfo:IUserInfo = {
            $key: val.$key,
            displayName: val['displayName'],
            uid: val['uid']
          }
          console.log("AuthService returning userInfo", userInfo);
          return userInfo;
        })
      );
  }

  updateCurrentUser(displayName:string) {
    this.afAuth.auth.currentUser.updateProfile({
      displayName: displayName,
      photoURL: ''
    })
    .then(() => {
      this.findUserInDb(this.currentUser.uid).subscribe(userInDb => {
        return this.db.list("/users").update(userInDb.$key, { displayName: displayName })
      });
    });
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
