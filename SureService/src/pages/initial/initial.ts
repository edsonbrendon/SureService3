import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { SignupPage } from '../../pages/signup/signup';

@IonicPage()
@Component({
  selector: 'page-initial',
  templateUrl: 'initial.html',
})
export class InitialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitialPage');
  }

  Login(){
    this.navCtrl.push(LoginPage);
  }

  SignUp(){
    this.navCtrl.push(SignupPage);
  }

}
