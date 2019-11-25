import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-anuncio',
  templateUrl: 'anuncio.html',
})
export class AnuncioPage {

  anuncio: any;
  title: string;
  form: FormGroup;
  contact: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder) {
      this.anuncio = navParams.get('anuncio');
      this.contact = this.navParams.data.contact || { };
      this.createForm();
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
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnuncioPage');
  }

}
