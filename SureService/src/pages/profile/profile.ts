import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AdvertsPage } from '../adverts/adverts';
import { AngularFireAuth } from 'angularfire2/auth';
import { InitialPage } from '../initial/initial';
import { AlertController } from 'ionic-angular';

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
      public navParams: NavParams,
      private alertCtrl: AlertController) {
      firebaseauth.user.subscribe((data => {
        this.user = data;
      }));     
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  NavMapa(){    
    this.navCtrl.setRoot(HomePage,{},{animate:false}); 
  }

  NavAdverts(){
    this.navCtrl.setRoot(AdvertsPage,{},{animate:false}); 
  }

  NavProfile(){
  }

  public Sair(): void {
    this.firebaseauth.auth.signOut()
    .then(() => {
      this.exibirToast('Você saiu');
      this.navCtrl.setRoot(InitialPage);
    })
    .catch((erro: any) => {
      this.exibirToast(erro);
    });
  }

  deletarConta(){
    this.user.delete().then(() => {
      console.log('Usuário '+this.user.email+' deletado!');
      this.exibirToast('Conta Deletada com Sucesso!');
      this.navCtrl.setRoot(InitialPage);
    }).catch(function(error) {
      this.exibirToast(error);
    });
  }

  public exibirToast(mensagem: string): void {
    let toast = this.toastCtrl.create({duration: 3000,position: 'top'});
    toast.setMessage(mensagem);
    toast.present();
  }

  deleteConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Tem certeza?',
      message: 'Está ação não poderá ser desfeita.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Deletar',
          handler: () => {
            console.log('Delete clicked');
            this.deletarConta();
          }
        }
      ]
    });
    alert.present();
  }
}
