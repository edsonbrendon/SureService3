import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class ContactProvider {

  public PATH = 'anuncios/';
  public anuncios;

  constructor(public http: HttpClient, private db: AngularFireDatabase) {
    console.log('Hello ContactProvider Provider');
  }

  getAllUserArray(){
    let prdn = this.getAll();
    prdn.subscribe(data =>{
      for (let item of data) {
        item.map(anuncios => ({
          name: anuncios.name,
          telefone: anuncios.telefone
        }));
      }
    });
    return anuncios;
  }

  queryProd(as:string){
    return this.db.list(`/Produto/${as}`);
  }

  getAll() {
    return this.db.list(this.PATH).valueChanges();
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
            descricao: contact.descricao })
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
            descricao: contact.descricao})
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}
