import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AdvertsPage } from '../adverts/adverts';
import { AngularFireAuth } from 'angularfire2/auth';
import { InitialPage } from '../initial/initial';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public user: any;
  @ViewChild('usuario') email;
  @ViewChild('senha') password;

    constructor(
      public navCtrl: NavController,
      public toastCtrl: ToastController,
      public firebaseauth: AngularFireAuth,
      public navParams: NavParams) {
      firebaseauth.user.subscribe((data => {
        this.user = data;
      }));     
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  NavMapa(){
      this.navCtrl.push(HomePage);
  }

  NavAdverts(){
    this.navCtrl.push(AdvertsPage);
  }

  NavProfile(){
  }

  public Sair(): void {
    this.firebaseauth.auth.signOut()
    .then(() => {
      this.exibirToast('Você saiu');
      this.navCtrl.push(InitialPage);
    })
    .catch((erro: any) => {
      this.exibirToast(erro);
    });
  }

private exibirToast(mensagem: string): void {
    let toast = this.toastCtrl.create({duration: 3000, 
                                      position: 'top'});
    toast.setMessage(mensagem);
    toast.present();
  }

}
