import { ContactProvider } from './../../providers/contact/contact';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-contact-edit',
  templateUrl: 'contact-edit.html',
})
export class ContactEditPage {
  
  title: string = '';
  form: FormGroup;
  contact: any;
  public user: any;
  user_uid: string

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder, 
    private provider: ContactProvider,
    private toast: ToastController,
    public firebaseauth: AngularFireAuth,
    private alertCtrl: AlertController) {
      firebaseauth.user.subscribe((data => {
        this.user = data;
        this.user_uid = data.uid;
      })); 
      this.contact = this.navParams.data.contact || { };
      this.createForm();
      this.setupPageTitle();
    }

  private setupPageTitle() {
    this.title = this.navParams.data.contact ? 'Alterar Anuncio' : 'Novo Anuncio';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.contact.key],
      name: [this.contact.name, Validators.required],
      tel: [this.contact.tel, Validators.required],
      latitude: [this.contact.latitude, Validators.required],
      longitude: [this.contact.longitude, Validators.required],
      categoria: [this.contact.categoria, Validators.required],
      descricao: [this.contact.descricao, Validators.required],
      anuncianteID: [this.user_uid],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.form.controls['anuncianteID'].setValue(this.user_uid);
      console.log('Anuncio:');
      console.log(this.form.value);
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Anuncio salvo com sucesso!', duration: 3000, position: 'top' }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o Anuncio!', duration: 3000, position: 'top' }).present();
          console.error(e);
        })
    }
  }

  removeContact(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Anuncio removido sucesso!', duration: 3000, position: 'top' }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o Anuncio!', duration: 3000, position: 'top' }).present();
        });
    }
    this.navCtrl.pop();
  }

  deleteConfirm(key: string) {
    let alert = this.alertCtrl.create({
      title: 'Tem certeza?',
      message: 'Seu anuncio será excluido.',
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
            this.removeContact(key);
          }
        }
      ]
    });
    alert.present();
  }
}