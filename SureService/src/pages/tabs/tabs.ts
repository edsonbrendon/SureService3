import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AdvertsPage } from '../adverts/adverts';
import { ConversationsPage } from '../conversations/conversations';
import { PerfilPage } from '../perfil/perfil';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
  
  NavMapa(){this.navCtrl.setRoot(HomePage,{},{animate:false});}
  NavAdverts(){this.navCtrl.setRoot(AdvertsPage,{},{animate:false});}
  NavConversations(){this.navCtrl.setRoot(ConversationsPage,{},{animate:false});}
  NavPerfil(){this.navCtrl.setRoot(PerfilPage,{},{animate:false});}
}
