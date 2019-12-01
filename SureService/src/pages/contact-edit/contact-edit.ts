import { ContactProvider } from './../../providers/contact/contact';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-contact-edit',
  templateUrl: 'contact-edit.html',
})
export class ContactEditPage {
  
  title: string;
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
    public firebaseauth: AngularFireAuth,) {
      firebaseauth.user.subscribe((data => {
        this.user = data;
        this.user_uid = data.uid;
        console.log(this.user);
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
      anunciante: [this.user_uid],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Contato salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }
}