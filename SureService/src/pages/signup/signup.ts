import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../../pages/home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  public user: any;
  @ViewChild('usuario') email;
  @ViewChild('senha') password;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public firebaseauth: AngularFireAuth,
    public db: AngularFireDatabase) {
      firebaseauth.user.subscribe((data => {
        this.user = data;
      }));     
  }

  createAccount(){
    this.firebaseauth.auth.createUserWithEmailAndPassword(this.email.value , this.password.value)
    .then(() => {
      
      //Envia e-mail de verificação
      var user = this.firebaseauth.auth.currentUser;
        user.sendEmailVerification().then(function() {
          console.log('Enviado e-mail de verificação para '+ user.email);
        }).catch(function(error) {
          console.log(error);
      });

      this.exibirToast('Usuário criado com sucesso');
      this.navCtrl.setRoot(HomePage);
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  Login(){
    this.navCtrl.pop();
    this.navCtrl.push(LoginPage);
  }
}
