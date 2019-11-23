import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AdvertsPage } from '../adverts/adverts';
import { ContactProvider } from './../../providers/contact/contact';
import { ProfilePage } from '../profile/profile';
import { ContactEditPage } from '../contact-edit/contact-edit';

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

  @ViewChild('map') mapElement: ElementRef;
  
  map: any;
  markers: any;

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public provider: ContactProvider) { }

  ionViewDidEnter() {
    this.initMap();
  }

  initMap() {
    
    const options = {
      center: {lat: 41.85, lng: -87.65},
      zoom: 7,
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

    this.map = new google.maps.Map(this.mapElement.nativeElement, options);

    console.log("Carregando anuncios ...");

    this.data = this.provider.getAll();
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
      }
      console.log("Anuncios encontrados: " + this.anuncios.length);
      console.log(this.anuncios);

      for (let i = 0; i < this.anuncios.length; i++) {
        console.log("Adicionando anuncio " + i + " de " + this.anuncios.length)
        var marcador = this.anuncios[i].categoria + '.png';
        this.addMarker(this.map, this.anuncios[i].latitude, this.anuncios[i].longitude, this.anuncios[i].name, marcador, this.anuncios[i].categoria);
      }
    });
  }

  addMarker(map, latitude, longitude, titulo, marcador, categoria) {
    var position = new google.maps.LatLng(latitude,longitude);
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
    var infoWindowContent = 
    '<div id="content"'+
      '<ion-item>'+
          '<ion-row>'+
            '<h6>'+marker.title+'</h6>'+
            categoria+'<br>'+
            '<a>Verificar anuncio</a>'+
          '</ion-row>'+       
        '</ion-item>'
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
    this.navCtrl.setRoot(AdvertsPage,{},{animate:false});  
  }

  NavProfile(){
    this.navCtrl.setRoot(ProfilePage,{},{animate:false}); 
  }

  newContact() {
    this.navCtrl.push(ContactEditPage);
  }
}
