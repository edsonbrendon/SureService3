import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { ContactProvider } from './../../providers/contact/contact';
import { NavController } from 'ionic-angular';
import { ContactEditPage } from '../contact-edit/contact-edit';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-adverts',
  templateUrl: 'adverts.html',
})
export class AdvertsPage {
 
  contacts;
  user_uid: string

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private provider: ContactProvider,
    public firebaseauth: AngularFireAuth) {
      firebaseauth.user.subscribe((data => {
        this.user_uid = data.uid;
      })); 
      this.contacts = this.provider.getAllKeyUser(this.user_uid);
      console.log(this.contacts);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvertsPage');
  }

  editContact(contact: any) {
    this.navCtrl.push(ContactEditPage, { contact: contact });
  }
}
