import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AdvertsPage } from '../adverts/adverts';
import { ContactProvider } from './../../providers/contact/contact';
import { ProfilePage } from '../profile/profile';
import { ContactEditPage } from '../contact-edit/contact-edit';
import { Geolocation } from '@ionic-native/geolocation';
import { AnuncioPage } from '../anuncio/anuncio';

declare var google;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public PATH = 'anuncios/';

  public data = null;
  public anuncios = [];
  public latitude = null;
  public longitude = null;

  @ViewChild('map') mapElement: ElementRef;

  map: any;
  markers: any;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public provider: ContactProvider,
    private geolocation: Geolocation) {
      this.data = null;
      this.data = this.provider.getAll();
  }

  ionViewDidEnter() {
    this.initMap();
  }

  initMap() {
    this.geolocation.getCurrentPosition().then((position) => {
      console.log("Latitude: " + position.coords.latitude);
      console.log("Longitude: " + position.coords.longitude);
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      var options = {
        center: { lat: this.latitude, lng: this.longitude },
        zoom: 15,
        streetViewControl: false,
        disableDefaultUI: true,
        animation: google.maps.Animation.DROP,
        styles: [
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
        ]
      }
      console.log("Criando mapa...");
      this.map = new google.maps.Map(this.mapElement.nativeElement, options);

      this.MyMarker(this.map, position.coords.latitude, position.coords.longitude); 

      console.log("Carregando anuncios...");
      this.data.subscribe(anuncios => {
        for (let anuncio of anuncios) {
          this.anuncios.push({
            name: anuncio.name,
            tel: anuncio.tel,
            latitude: anuncio.latitude,
            longitude: anuncio.longitude,
            categoria: anuncio.categoria,
            descricao: anuncio.descricao,
          });
          this.addMarker(this.map, anuncio.latitude, anuncio.longitude, anuncio.name, anuncio.categoria + '.png', anuncio.categoria, anuncio);
        }
        console.log("Anuncios inseridos: " + this.anuncios.length);
        console.log(this.anuncios);
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  addMarker(map, latitude, longitude, titulo, marcador, categoria, anuncio) {
    var position = new google.maps.LatLng(latitude, longitude);
    var marker = new google.maps.Marker({
      position,
      title: titulo,
      map,
      icon: 'assets/imgs/' + marcador
    })
    this.addInfoWindowToMarker(marker, categoria, anuncio);
    return marker;
  }

  MyMarker(map, latitude, longitude) {
    var position = new google.maps.LatLng(latitude, longitude);
    var marker = new google.maps.Marker({
      position,
      animation: google.maps.Animation.DROP,
      map,
    })
    return marker;
  }

  addInfoWindowToMarker(marker, categoria, anuncio) {
    /*var infoWindowContent =
      '<div id="content"' +
      '<ion-item>' +
      '<ion-row>' +
      '<h6>' + marker.title + '</h6>' +
      categoria + '<br><br>' +
      '<a>Verificar anuncio</a>' +
      '</ion-row>' +
      '</ion-item>'
      ;
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });*/
    marker.addListener('click', () => {
      //infoWindow.open(this.map, marker);
      //this.navCtrl.push(AnuncioPage, { contact: anuncio });
      this.presentAlert(anuncio);
    });
  }

  NavMapa() {
  }

  NavAdverts() {
    this.navCtrl.setRoot(AdvertsPage, {}, { animate: false });
  }

  NavProfile() {
    this.navCtrl.setRoot(ProfilePage, {}, { animate: false });
  }

  newContact() {
    this.navCtrl.push(ContactEditPage);
  }

  getAnuncio(){
    this.navCtrl.push(AnuncioPage);
  }

  presentAlert(anuncio) {
    let alert = this.alertCtrl.create({
      title: anuncio.name,
      subTitle: anuncio.categoria,
      message: 'Descrição: '+anuncio.descricao+
        '<br>Telefone: '+anuncio.tel,
      buttons: [
        {
          text: 'Enviar mensagem',
          handler: () => {
            console.log('');
          }
        },
        {
          text: 'Perfil do Anunciante',
          handler: () => {
            console.log('');
          }
        },
        {
          text: 'Voltar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    alert.present();
  }
  
}
