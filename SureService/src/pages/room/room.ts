import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddRoomPage } from '../add-room/add-room';
import * as firebase from 'Firebase';
import { ChatPage } from '../chat/chat';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {

  rooms = [];
  ref = firebase.database().ref('chatrooms/');
  public user: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public firebaseauth: AngularFireAuth) {
    this.ref.on('value', resp => {
      this.rooms = [];
      this.rooms = snapshotToArray(resp);
    });
    firebaseauth.user.subscribe((data => {
      this.user = data;
      console.log(this.user);
    })); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomPage');
  }

  addRoom() {
    this.navCtrl.push(AddRoomPage);
  }

  joinRoom(key, roomname) {
    this.navCtrl.setRoot(ChatPage, {
      key:key,
      nickname: this.user.email,
      roomname: roomname
    });
  }

}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};
