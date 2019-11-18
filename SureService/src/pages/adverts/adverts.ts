import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ContactProvider } from './../../providers/contact/contact';
import { NavController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ContactEditPage } from '../contact-edit/contact-edit';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-adverts',
  templateUrl: 'adverts.html',
})
export class AdvertsPage {
  contacts: Observable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private provider: ContactProvider,
    private toast: ToastController) {
       this.contacts = this.provider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvertsPage');
  }
  
  NavMapa(){
    //this.navCtrl.push(HomePage);
    this.navCtrl.push(HomePage,{},{animate:false});
  }

  NavAdverts(){
  }
  
  NavProfile(){
    //this.navCtrl.push(ProfilePage);
    this.navCtrl.push(ProfilePage,{},{animate:false});
  }

  newContact() {
    //this.navCtrl.push(ContactEditPage);
    this.navCtrl.push(ContactEditPage,{},{animate:false});   
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
