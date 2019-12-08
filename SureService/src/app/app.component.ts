import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { InitialPage } from '../pages/initial/initial';
import { ProfilePage } from '../pages/profile/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AdvertsPage } from '../pages/adverts/adverts';
import { PerfilPage } from '../pages/perfil/perfil';
import { RoomPage } from '../pages/room/room';
//import * as firebase from 'firebase/app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  public user;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public afAuth: AngularFireAuth,
    public firebaseauth: AngularFireAuth) {
      //afAuth.authState.subscribe(user => {
        //this.user = user;
     // });

      this.initializeApp();

      this.pages = [
        { title: 'Home', component: HomePage, icon: 'home' },
        { title: 'Meus Anuncios', component: AdvertsPage, icon: 'list-box' },
        { title: 'Perfil', component: PerfilPage, icon: 'contact' },
        { title: 'Conversas', component: RoomPage, icon: 'chatbubbles' },
        { title: 'Configurações da Conta', component: ProfilePage, icon: 'construct'  },
        { title: 'Sair', component: InitialPage, icon: 'exit' }
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
