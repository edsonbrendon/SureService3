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
 
  public contacts;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private provider: ContactProvider,
    public firebaseauth: AngularFireAuth) {
      firebaseauth.user.subscribe((data => {
        this.contacts = this.provider.getAllKeyUser(data.uid);
      })); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvertsPage');
  }

  editContact(contact: any) {
    this.navCtrl.push(ContactEditPage, { contact: contact });
  }
}
