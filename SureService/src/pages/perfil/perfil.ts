import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlterPerfilPage } from '../alter-perfil/alter-perfil';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  
  public user: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public firebaseauth: AngularFireAuth) {
    firebaseauth.user.subscribe((data => {
      this.user = data;
      console.log(this.user);
    })); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  AlterPerfil(){
    this.navCtrl.push(AlterPerfilPage);
  }

}
