import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AdvertsPage } from '../adverts/adverts';
import { ContactProvider } from './../../providers/contact/contact';
import { Observable } from 'rxjs/Observable';
import { ProfilePage } from '../profile/profile';
import { ContactEditPage } from '../contact-edit/contact-edit';

declare var google;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  anuncios: any;

  @ViewChild('map') mapElement: ElementRef;
  
  map: any;
  markers: any;

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public provider: ContactProvider,) {
      this.anuncios = this.provider.getAllUserArray();
  }

  ionViewDidEnter() {
    console.log(this.anuncios);
    this.initMap();
  }

  initMap() {
    
    const options = {
      center: {lat: 41.85, lng: -87.65},
      zoom: 7,
      streetViewControl: false,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, options);
    /*
    for (let i = 0; i < this.anuncios.length; i++) {

      var ctga;

      if(this.anuncios[i].categoria == "Manutenção") 
        ctga = 'limpeza.png';
      else 
        ctga = 'manutencao.png';

      this.addMarker(
        this.map, 
        this.anuncios[i].latitude,
        this.anuncios[i].longitude, 
        this.anuncios[i].name, 
        ctga);
    }*/
    
  }

  addMarker(map, latitude, longitude, titulo, ctga) {
    var position = new google.maps.LatLng(latitude,longitude);
    var marcador = new google.maps.Marker({
      position,
      title: titulo,
      map,
      animation: google.maps.Animation.DROP,
      icon: 'assets/imgs/' + ctga
    })
        //Exibe a janela para cada marcador
    this.addInfoWindowToMarker(marcador);
    return marcador;
  }

    //Cria a estrutura da janela de cada marcador
  addInfoWindowToMarker(marker) {
    //var infoWindowContent = '<div id="content"><h1 id="firstHeading" class="firstHeading">' + marker.title + '</h1></div>';
    var infoWindowContent = '<div id="content" class="item item-thumbnail-left item-text-wrap" ' +
      ' <ion-item>  <ion-row> ' +
      ' <h6> ' + marker.title + ' </h6>' +
      '</ion-row>        </ion-item>'
      ;
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  NavMapa(){
  }

  NavAdverts(){
    //this.navCtrl.push(AdvertsPage);
    this.navCtrl.push(AdvertsPage,{},{animate:false});  
  }

  NavProfile(){
    //this.navCtrl.push(ProfilePage);
    this.navCtrl.push(ProfilePage,{},{animate:false}); 
  }

  newContact() {
    this.navCtrl.push(ContactEditPage);
  }

   AddMap() {
    const prompt = this.alertCtrl.create({
      title: 'Inserir anuncio',
      message: "Adicione seu serviço ao Sure Service!",
      inputs: [
        {
          name: 'titulo',
          placeholder: 'Titulo do anuncio'
        },
        {
          name: 'descricao',
          placeholder: 'Descrição'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
