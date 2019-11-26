import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { InitialPage } from '../pages/initial/initial';
import { ProfilePage } from '../pages/profile/profile';
import { AdvertsPage } from '../pages/adverts/adverts';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InitialPage;
  public user: firebase.User;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public afAuth: AngularFireAuth) {
      afAuth.authState.subscribe(user => {
        this.user = user;
      });
      this.initializeApp();

      this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Meus Anuncios', component: AdvertsPage },
        { title: 'Perfil', component: ProfilePage }
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
    this.nav.setRoot(page.component);
  }
}
