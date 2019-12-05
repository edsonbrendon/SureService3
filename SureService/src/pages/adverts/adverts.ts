import { Component, ComponentFactoryResolver } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { ContactProvider } from './../../providers/contact/contact';
import { NavController, ToastController } from 'ionic-angular';
import { ContactEditPage } from '../contact-edit/contact-edit';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-adverts',
  templateUrl: 'adverts.html',
})
export class AdvertsPage {
 
  //contacts: Observable<any>;

  contacts;
  user_uid: string

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private provider: ContactProvider,
    private toast: ToastController,
    public firebaseauth: AngularFireAuth) {
      firebaseauth.user.subscribe((data => {
        this.user_uid = data.uid;
      })); 
       //this.contacts = this.provider.getAll();
       this.contacts = this.provider.getAll();
       console.log(this.contacts);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvertsPage');
  }

  editContact(contact: any) {
    this.navCtrl.push(ContactEditPage, { contact: contact });
  }

  removeContact(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
        });
    }
  }
}
