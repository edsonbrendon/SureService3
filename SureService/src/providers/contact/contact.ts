import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';

@Injectable()
export class ContactProvider {

  public PATH = 'anuncios/';
  public anuncios;


  ParkingSpotList$: Observable<any[]>; // write this as global variable before constructor 

  itemsRef;
  profileData;
x;

  constructor(public http: HttpClient, public db: AngularFireDatabase) {
    console.log('Hello ContactProvider Provider');
  }

  getAll() {
    //return this.db.list(this.PATH).valueChanges(); 
    this.itemsRef = this.db.list(this.PATH);
    this.itemsRef.snapshotChanges().subscribe(data => { 
      this.profileData = data;  
      this.anuncios = this.profileData.map(c => ({
        key: c.payload.key, ...c.payload.val()
        }))
      });
    console.log(this.anuncios);
    return this.anuncios;
  }

  getAllKey() {
    return this.db.list(this.PATH).snapshotChanges(); 
  }

  get(key: string) {
    return this.db.object(this.PATH + key).valueChanges();
  }

  save(contact: any) {
    return new Promise((resolve, reject) => {
      if (contact.key) {
        this.db.list(this.PATH)
          .update(contact.key, { 
            name: contact.name, 
            tel: contact.tel, 
            latitude: contact.latitude,
            longitude: contact.longitude,
            categoria: contact.categoria,
            descricao: contact.descricao,
            anuncianteID: contact.anuncianteID })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ 
            name: contact.name, 
            tel: contact.tel, 
            latitude: contact.latitude,
            longitude: contact.longitude,
            categoria: contact.categoria,
            descricao: contact.descricao,
            anuncianteID: contact.anuncianteID })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}
