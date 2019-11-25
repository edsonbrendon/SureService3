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

  public data;
  public anuncios = [];
  public latitude;
  public longitude;

  @ViewChild('map') mapElement: ElementRef;

  map: any;
  markers: any;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public provider: ContactProvider,
    private geolocation: Geolocation) {
    console.log("Carregando local...");
    //let options = {timeout: 10000, enableHighAccuracy: true, maximumAge: 3600};
    this.geolocation.getCurrentPosition().then((position) => {
      console.log("Latitude: " + position.coords.latitude);
      console.log("Longitude: " + position.coords.longitude);
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.data = this.provider.getAll();
  }

  ionViewDidEnter() {
    this.initMap();
  }

  initMap() {
    var options = {
      center: { lat: -23.179264, lng: -45.8752 },
      zoom: 14,
      streetViewControl: false,
      disableDefaultUI: true,
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
        this.addMarker(this.map, anuncio.latitude, anuncio.longitude, anuncio.name, anuncio.categoria + '.png', anuncio.categoria);
      }
      console.log("Anuncios inseridos: " + this.anuncios.length);
      console.log(this.anuncios);
    });
  }

  addMarker(map, latitude, longitude, titulo, marcador, categoria) {
    var position = new google.maps.LatLng(latitude, longitude);
    var marker = new google.maps.Marker({
      position,
      title: titulo,
      map,
      animation: google.maps.Animation.DROP,
      icon: 'assets/imgs/' + marcador
    })
    this.addInfoWindowToMarker(marker, categoria);
    return marker;
  }

  addInfoWindowToMarker(marker, categoria) {
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
      this.navCtrl.push(AnuncioPage, { contact: marker });
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
}
