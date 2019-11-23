import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
    public firebaseauth: AngularFireAuth) {
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

  private exibirToast(mensagem: string): void {
    let toast = this.toastCtrl.create({
      duration: 3000, 
      position: 'top',});
    toast.setMessage(mensagem);
    toast.present();
  }

}


