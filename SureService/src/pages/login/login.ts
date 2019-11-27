import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { SignupPage } from '../../pages/signup/signup';
import { HomePage } from '../../pages/home/home';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user: any;
  @ViewChild('usuario') email;
  @ViewChild('senha') password;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,      
    public toastCtrl: ToastController,
    public firebaseauth: AngularFireAuth,
    private alertCtrl: AlertController) {
      firebaseauth.user.subscribe((data => {
        this.user = data;
      }));     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  SignUp(){
    this.navCtrl.pop();
    this.navCtrl.push(SignupPage);
  }

  Login(){
    this.firebaseauth.auth.signInWithEmailAndPassword(this.email.value , this.password.value)
      .then(() => {
        this.exibirToast('Login efetuado com sucesso');
        this.navCtrl.setRoot(HomePage);
      })
      .catch((erro: any) => {
        this.exibirToast(erro);
      });
  }

  public exibirToast(mensagem: string): void {
    let toast = this.toastCtrl.create({
      duration: 3000, 
      position: 'top',});
    toast.setMessage(mensagem);
    toast.present();
  }

  forgotpassword(email){
    var auth = this.firebaseauth.auth;
    auth.sendPasswordResetEmail(email).then(function() {
        this.exibirToast('Email enviado com sucesso!');
      }).catch(function(error: any) {
        this.exibirToast(error);
    });
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Enviar e-mail para redefinição da senha',
      inputs: [
        {
          name: 'username',
          placeholder: 'E-mail'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            if (data.username) {
              this.forgotpassword(data.username);
            } else {
              this.exibirToast('Erro ao enviar E-mail!');
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }
}


