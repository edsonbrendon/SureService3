import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { InitialPage } from '../pages/initial/initial';
import { ProfilePage } from '../pages/profile/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  public user: firebase.User;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public afAuth: AngularFireAuth,
    public firebaseauth: AngularFireAuth) {
      afAuth.authState.subscribe(user => {
        this.user = user;
      });
      this.initializeApp();

      this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Perfil', component: ProfilePage },
        { title: 'Sair', component: InitialPage }
      ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.afAuth.authState
    .subscribe(
      user => {
        if (user) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = InitialPage;
        }
      },
      () => {
        this.rootPage = InitialPage;
      }
    );
  }

  openPage(page) {
    if(page.title == 'Sair'){
      this.firebaseauth.auth.signOut()
      .then(() => {
        this.nav.setRoot(InitialPage);
      });
    }
    else{
      this.nav.setRoot(page.component);
    }
  }
}
