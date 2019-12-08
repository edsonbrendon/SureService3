import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { HomePage } from '../pages/home/home';
import { InitialPage } from '../pages/initial/initial';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ContactProvider } from '../providers/contact/contact';
import { AdvertsPage } from '../pages/adverts/adverts';
import { ContactEditPage } from '../pages/contact-edit/contact-edit';
import { TabsPage } from '../pages/tabs/tabs';
import { PerfilPage } from '../pages/perfil/perfil';
import { AlterPerfilPage } from '../pages/alter-perfil/alter-perfil';

import { Geolocation } from '@ionic-native/geolocation';
import { RoomPage } from '../pages/room/room';
import { ChatPage } from '../pages/chat/chat';
import { AddRoomPage } from '../pages/add-room/add-room';
import { AnunciantePage } from '../pages/anunciante/anunciante';

export const firebaseConfig = {
    apiKey: "AIzaSyBsx4wa6S9Hp04gd-UQN9ZXcckEuxSrilE",
    authDomain: "sureservice-2eabb.firebaseapp.com",
    databaseURL: "https://sureservice-2eabb.firebaseio.com",
    projectId: "sureservice-2eabb",
    storageBucket: "sureservice-2eabb.appspot.com",
    messagingSenderId: "320199985769",
    appId: "1:320199985769:web:feb905ddfc50083522f0f8",
    measurementId: "G-3J3NED9QKW"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InitialPage,
    ProfilePage,
    LoginPage,
    SignupPage,
    AdvertsPage,
    ContactEditPage,
    TabsPage,
    PerfilPage,
    AlterPerfilPage,
    RoomPage,
    ChatPage,
    AddRoomPage,
    AnunciantePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InitialPage,
    ProfilePage,
    LoginPage,
    SignupPage,
    AdvertsPage,
    ContactEditPage,
    TabsPage,
    PerfilPage,
    AlterPerfilPage,
    RoomPage,
    ChatPage,
    AddRoomPage,
    AnunciantePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactProvider,
    AngularFireDatabase,
  ]
})
export class AppModule {}
