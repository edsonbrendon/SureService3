import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
        console.log(this.user);
      })); 
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  public Sair(): void {
    this.firebaseauth.auth.signOut()
    .then(() => {
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
      title: 'Tem certeza que deseja deletar esta conta?',
      message: 'Está ação não poderá ser desfeita.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Operação Cancelada');
          }
        },
        {
          text: 'Deletar',
          handler: () => {
            this.deletarConta();
          }
        }
      ]
    });
    alert.present();
  }
  
  alterPassAlert() {
    let alert = this.alertCtrl.create({
      title: 'Insira um senha nova',
      inputs: [
        {
          name: 'senha',
          type: 'password',
          placeholder: 'Nova Senha'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Operação Cancelada');
          }
        },
        {
          text: 'Atualizar',
          handler: data => {
            if (data.senha) {
              this.alterPass(data.senha);
            } else {
              this.exibirToast('Erro ao alterar Senha!');
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

  alterPass(senha){
    this.user.updatePassword(senha).then(function() {
      this.exibirToast('Senha alterada com sucesso!');
    }).catch(function(error) {
      console.log(error);
    });
  }
}
