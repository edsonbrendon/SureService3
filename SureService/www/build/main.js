webpackJsonp([7],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_signup_signup__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InitialPage = /** @class */ (function () {
    function InitialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InitialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InitialPage');
    };
    InitialPage.prototype.Login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    InitialPage.prototype.SignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_signup_signup__["a" /* SignupPage */]);
    };
    InitialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-initial',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\initial\initial.html"*/'<ion-content class="background">\n\n  <div class="Grupo">\n\n    <h3 class="Subtitulo">Bem-vindo!</h3>\n\n    <p class="Descricao">Encontre o que você precisa, onde estiver.</p><BR>\n\n    <div>\n\n        <ion-col>\n\n          <button id="btn_Iniciar" block outline expand="block" (click)="SignUp()" ion-button>Começar</button> <BR>\n\n          <button (click)="Login()" ion-button full>Entrar</button>\n\n        </ion-col>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n    \n\n'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\initial\initial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InitialPage);
    return InitialPage;
}());

//# sourceMappingURL=initial.js.map

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adverts/adverts.module": [
		489,
		6
	],
	"../pages/contact-edit/contact-edit.module": [
		487,
		5
	],
	"../pages/home/home.module": [
		490,
		4
	],
	"../pages/initial/initial.module": [
		488,
		3
	],
	"../pages/login/login.module": [
		491,
		2
	],
	"../pages/profile/profile.module": [
		493,
		1
	],
	"../pages/signup/signup.module": [
		492,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(411);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_initial_initial__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_contact_contact__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_adverts_adverts__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_contact_edit_contact_edit__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var firebaseConfig = {
    apiKey: "AIzaSyBsx4wa6S9Hp04gd-UQN9ZXcckEuxSrilE",
    authDomain: "sureservice-2eabb.firebaseapp.com",
    databaseURL: "https://sureservice-2eabb.firebaseio.com",
    projectId: "sureservice-2eabb",
    storageBucket: "sureservice-2eabb.appspot.com",
    messagingSenderId: "320199985769",
    appId: "1:320199985769:web:feb905ddfc50083522f0f8",
    measurementId: "G-3J3NED9QKW"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_initial_initial__["a" /* InitialPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_adverts_adverts__["a" /* AdvertsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_contact_edit_contact_edit__["a" /* ContactEditPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contact-edit/contact-edit.module#ContactEditPageModule', name: 'ContactEditPage', segment: 'contact-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/initial/initial.module#InitialPageModule', name: 'InitialPage', segment: 'initial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adverts/adverts.module#AdvertsPageModule', name: 'AdvertsPage', segment: 'adverts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_initial_initial__["a" /* InitialPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_adverts_adverts__["a" /* AdvertsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_contact_edit_contact_edit__["a" /* ContactEditPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_contact_contact__["a" /* ContactProvider */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["AngularFireDatabase"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adverts_adverts__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_contact_contact__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_edit_contact_edit__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, provider, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.provider = provider;
        this.geolocation = geolocation;
        this.PATH = 'anuncios/';
        this.anuncios = [];
        console.log("Carregando local...");
        //let options = {timeout: 10000, enableHighAccuracy: true, maximumAge: 3600};
        this.geolocation.getCurrentPosition().then(function (position) {
            console.log("Latitude: " + position.coords.latitude);
            console.log("Longitude: " + position.coords.longitude);
            _this.latitude = position.coords.latitude;
            _this.longitude = position.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        this.data = this.provider.getAll();
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.initMap();
    };
    HomePage.prototype.initMap = function () {
        var _this = this;
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
        };
        console.log("Criando mapa...");
        this.map = new google.maps.Map(this.mapElement.nativeElement, options);
        console.log("Carregando anuncios...");
        this.data.subscribe(function (anuncios) {
            for (var _i = 0, anuncios_1 = anuncios; _i < anuncios_1.length; _i++) {
                var anuncio = anuncios_1[_i];
                _this.anuncios.push({
                    name: anuncio.name,
                    tel: anuncio.tel,
                    latitude: anuncio.latitude,
                    longitude: anuncio.longitude,
                    categoria: anuncio.categoria,
                    descricao: anuncio.descricao,
                });
                _this.addMarker(_this.map, anuncio.latitude, anuncio.longitude, anuncio.name, anuncio.categoria + '.png', anuncio.categoria);
            }
            console.log("Anuncios inseridos: " + _this.anuncios.length);
            console.log(_this.anuncios);
        });
    };
    HomePage.prototype.addMarker = function (map, latitude, longitude, titulo, marcador, categoria) {
        var position = new google.maps.LatLng(latitude, longitude);
        var marker = new google.maps.Marker({
            position: position,
            title: titulo,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: 'assets/imgs/' + marcador
        });
        this.addInfoWindowToMarker(marker, categoria);
        return marker;
    };
    HomePage.prototype.addInfoWindowToMarker = function (marker, categoria) {
        var _this = this;
        var infoWindowContent = '<div id="content"' +
            '<ion-item>' +
            '<ion-row>' +
            '<h6>' + marker.title + '</h6>' +
            categoria + '<br><br>' +
            '<a>Verificar anuncio</a>' +
            '</ion-row>' +
            '</ion-item>';
        var infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });
        marker.addListener('click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    HomePage.prototype.NavMapa = function () {
    };
    HomePage.prototype.NavAdverts = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__adverts_adverts__["a" /* AdvertsPage */], {}, { animate: false });
    };
    HomePage.prototype.NavProfile = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */], {}, { animate: false });
    };
    HomePage.prototype.newContact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__contact_edit_contact_edit__["a" /* ContactEditPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div #map id="map"></div>\n\n\n\n  <ion-fab bottom right>\n\n    <button ion-fab color="primary" (click)="newContact()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-grid>  \n\n      <ion-row text-center>\n\n\n\n        <ion-col>   \n\n          <button (click)="NavMapa()" ion-button clear>\n\n            <ion-icon name=\'home\' style="zoom: 1.8;color:#0052EB"></ion-icon>\n\n            <p style="color:#0052EB; padding: 5px;">Home</p>\n\n          </button>\n\n        </ion-col>\n\n\n\n        <ion-col>  \n\n            <button (click)="NavAdverts()" style="color: #657280;" ion-button clear>\n\n              <ion-icon name=\'list-box\' style="zoom: 1.5;"></ion-icon>\n\n              <p style="padding: 5px;">Anuncios</p>\n\n            </button>\n\n          </ion-col>\n\n\n\n        <ion-col>  \n\n          <button (click)="NavProfile()" style="color: #657280;" ion-button clear>\n\n            <ion-icon name=\'person\' style="zoom: 1.5;"></ion-icon>\n\n            <p style="padding: 5px;">Conta</p>\n\n          </button>\n\n        </ion-col>\n\n<!--\n\n        <ion-col>  \n\n          <button ion-button clear>\n\n            <ion-icon name=\'settings\' style="zoom: 1.5;"></ion-icon>\n\n          </button>\n\n          Configurações\n\n        </ion-col>-->\n\n\n\n      </ion-row>  \n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_contact_contact__["a" /* ContactProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_contact_contact__["a" /* ContactProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_adverts_adverts__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { InitialPage } from '../pages/initial/initial';


var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Meus Anuncios', component: __WEBPACK_IMPORTED_MODULE_6__pages_adverts_adverts__["a" /* AdvertsPage */] },
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_contact_contact__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_edit_contact_edit__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdvertsPage = /** @class */ (function () {
    function AdvertsPage(navCtrl, navParams, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.toast = toast;
        this.contacts = this.provider.getAll();
    }
    AdvertsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdvertsPage');
    };
    AdvertsPage.prototype.NavMapa = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {}, { animate: false });
    };
    AdvertsPage.prototype.NavAdverts = function () {
    };
    AdvertsPage.prototype.NavProfile = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */], {}, { animate: false });
    };
    AdvertsPage.prototype.editContact = function (contact) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contact_edit_contact_edit__["a" /* ContactEditPage */], { contact: contact });
    };
    AdvertsPage.prototype.removeContact = function (key) {
        var _this = this;
        if (key) {
            this.provider.remove(key)
                .then(function () {
                _this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
            })
                .catch(function () {
                _this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
            });
        }
    };
    AdvertsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adverts',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\adverts\adverts.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Meus Anuncios</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list  style="padding: 15px;">\n\n    <ion-item-sliding *ngFor="let contact of contacts | async">\n\n      <ion-item>\n\n        <h1>{{ contact.name }}</h1>\n\n        <p>{{ contact.descricao }}</p>\n\n        <p>Telefone: {{ contact.tel }}</p>\n\n        <p>Categoria: {{ contact.categoria }}</p>\n\n      </ion-item>\n\n        <ion-item-options side="left">\n\n        <button ion-button clear (click)="editContact(contact)">\n\n          <ion-icon name="create" style="zoom: 1.5;"></ion-icon>\n\n        </button>\n\n        <button ion-button clear (click)="removeContact(contact.key)">\n\n          <ion-icon name="trash" style="zoom: 1.5;"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list> \n\n  </ion-content>\n\n  \n\n  <ion-footer>\n\n      <ion-toolbar>\n\n        <ion-grid>  \n\n          <ion-row text-center>\n\n\n\n            <ion-col>   \n\n              <button (click)="NavMapa()" style="color: #657280;" ion-button clear>\n\n                <ion-icon name=\'home\' style="zoom: 1.5;"></ion-icon>\n\n                <p style="padding: 5px;">Home</p>\n\n              </button>\n\n            </ion-col>\n\n\n\n            <ion-col>  \n\n                <button (click)="NavAdverts()" ion-button clear>\n\n                  <ion-icon name=\'list-box\' style="zoom: 1.8;color:#0052EB"></ion-icon>\n\n                  <p style="color:#0052EB;padding: 5px;">Anuncios</p>\n\n                </button>\n\n              </ion-col>\n\n                  \n\n            <ion-col>  \n\n              <button (click)="NavProfile()" style="color: #657280;" ion-button clear>\n\n                <ion-icon name=\'person\' style="zoom: 1.5;"></ion-icon>\n\n                <p style="padding: 5px;">Conta</p>\n\n              </button>\n\n            </ion-col>\n\n    <!--\n\n            <ion-col>  \n\n              <button ion-button clear>\n\n                <ion-icon name=\'settings\' style="zoom: 1.5;"></ion-icon>\n\n              </button>\n\n              Configurações\n\n            </ion-col>-->\n\n    \n\n          </ion-row>  \n\n        </ion-grid>\n\n      </ion-toolbar>\n\n    </ion-footer>'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\adverts\adverts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_contact_contact__["a" /* ContactProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], AdvertsPage);
    return AdvertsPage;
}());

//# sourceMappingURL=adverts.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adverts_adverts__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__initial_initial__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, toastCtrl, firebaseauth, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.firebaseauth = firebaseauth;
        this.navParams = navParams;
        firebaseauth.user.subscribe((function (data) {
            _this.user = data;
        }));
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.NavMapa = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {}, { animate: false });
    };
    ProfilePage.prototype.NavAdverts = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__adverts_adverts__["a" /* AdvertsPage */], {}, { animate: false });
    };
    ProfilePage.prototype.NavProfile = function () {
    };
    ProfilePage.prototype.Sair = function () {
        var _this = this;
        this.firebaseauth.auth.signOut()
            .then(function () {
            _this.exibirToast('Você saiu');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__initial_initial__["a" /* InitialPage */]);
        })
            .catch(function (erro) {
            _this.exibirToast(erro);
        });
    };
    ProfilePage.prototype.exibirToast = function (mensagem) {
        var toast = this.toastCtrl.create({ duration: 3000,
            position: 'top' });
        toast.setMessage(mensagem);
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('usuario'),
        __metadata("design:type", Object)
    ], ProfilePage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('senha'),
        __metadata("design:type", Object)
    ], ProfilePage.prototype, "password", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Minha Conta</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div *ngIf="user != null" style="padding: 20px;">\n\n        <h3>Bem vindo: </h3>\n\n        <p>{{ user.email }}</p>\n\n        <br>\n\n        <button ion-button block outline (click)="Sair()">Sair</button>\n\n      </div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n      <ion-grid>  \n\n        <ion-row text-center>\n\n\n\n          <ion-col>   \n\n            <button (click)="NavMapa()" style="color: #657280;" ion-button clear>\n\n              <ion-icon name=\'home\' style="zoom: 1.5;"></ion-icon>\n\n              <p style="padding: 5px;">Home</p>\n\n            </button>\n\n          </ion-col>\n\n\n\n          <ion-col>  \n\n              <button (click)="NavAdverts()" style="color: #657280;" ion-button clear>\n\n                <ion-icon name=\'list-box\' style="zoom: 1.5;"></ion-icon>\n\n                <p style="padding: 5px;">Anuncios</p>\n\n              </button>\n\n            </ion-col>\n\n  \n\n          <ion-col>  \n\n            <button (click)="NavProfile()" ion-button clear>\n\n              <ion-icon name=\'person\' style="zoom: 1.8;color:#0052EB"></ion-icon>\n\n              <p style="color:#0052EB; padding: 5px;">Conta</p>\n\n            </button>\n\n          </ion-col>\n\n  <!--\n\n          <ion-col>  \n\n            <button ion-button clear>\n\n              <ion-icon name=\'settings\' style="zoom: 1.5;"></ion-icon>\n\n            </button>\n\n            Configurações\n\n          </ion-col>-->\n\n  \n\n        </ion-row>  \n\n      </ion-grid>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactProvider = /** @class */ (function () {
    function ContactProvider(http, db) {
        this.http = http;
        this.db = db;
        this.PATH = 'anuncios/';
        this.anuncios = [];
        console.log('Hello ContactProvider Provider');
    }
    ContactProvider.prototype.getAllArray = function () {
        /*var data = [];
        this.db.list(this.PATH).snapshotChanges()
        .subscribe(
        changes => {
          changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          })).forEach(items => {
            data.push(items);
          });
          console.log(data);
          this.anuncios = data;
        });
        return this.anuncios;*/
    };
    ContactProvider.prototype.getAll = function () {
        return this.db.list(this.PATH).valueChanges();
    };
    ContactProvider.prototype.get = function (key) {
        return this.db.object(this.PATH + key).valueChanges();
    };
    ContactProvider.prototype.save = function (contact) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (contact.key) {
                _this.db.list(_this.PATH)
                    .update(contact.key, {
                    name: contact.name,
                    tel: contact.tel,
                    latitude: contact.latitude,
                    longitude: contact.longitude,
                    categoria: contact.categoria,
                    descricao: contact.descricao
                })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push({
                    name: contact.name,
                    tel: contact.tel,
                    latitude: contact.latitude,
                    longitude: contact.longitude,
                    categoria: contact.categoria,
                    descricao: contact.descricao
                })
                    .then(function () { return resolve(); });
            }
        });
    };
    ContactProvider.prototype.remove = function (key) {
        return this.db.list(this.PATH).remove(key);
    };
    ContactProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], ContactProvider);
    return ContactProvider;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_contact_contact__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactEditPage = /** @class */ (function () {
    function ContactEditPage(navCtrl, navParams, formBuilder, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        this.contact = this.navParams.data.contact || {};
        this.createForm();
        this.setupPageTitle();
    }
    ContactEditPage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.contact ? 'Alterando contato' : 'Novo contato';
    };
    ContactEditPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.contact.key],
            name: [this.contact.name, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            tel: [this.contact.tel, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            latitude: [this.contact.latitude, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            longitude: [this.contact.longitude, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            categoria: [this.contact.categoria, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            descricao: [this.contact.descricao, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    ContactEditPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.provider.save(this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Contato salvo com sucesso.', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000 }).present();
                console.error(e);
            });
        }
    };
    ContactEditPage.prototype.Back = function () {
        this.navCtrl.pop();
    };
    ContactEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-contact-edit',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\contact-edit\contact-edit.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Inserir anuncio</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n    <form [formGroup]="form">\n\n      <ion-item>\n\n        <ion-label floating>Nome</ion-label>\n\n        <ion-input type="text" formControlName="name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label floating>Descrição</ion-label>\n\n          <ion-input type="text" formControlName="descricao"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Telefone</ion-label>\n\n        <ion-input type="tel" formControlName="tel"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label floating>Latitute</ion-label>\n\n          <ion-input type="text" formControlName="latitude"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label floating>Longitude</ion-label>\n\n          <ion-input type="text" formControlName="longitude"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label floating>Categoria</ion-label>\n\n          <ion-select formControlName="categoria">\n\n            <ion-option value="Limpeza">Limpeza</ion-option>\n\n            <ion-option value="Manutenção">Manutenção</ion-option>\n\n            <ion-option value="Pintura">Pintura</ion-option>\n\n            <ion-option value="Educação">Educação</ion-option>\n\n            <ion-option value="Transporte">Transporte</ion-option>\n\n            <ion-option value="Babá">Babá</ion-option>\n\n            <ion-option value="Jardinagem">Jardinagem</ion-option>\n\n            <ion-option value="Outros">Outros</ion-option>\n\n          </ion-select>\n\n      </ion-item>\n\n  \n\n      <div padding>\n\n        <button ion-button style="height: 50px" block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Salvar</button>\n\n      </div>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\contact-edit\contact-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_0__providers_contact_contact__["a" /* ContactProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], ContactEditPage);
    return ContactEditPage;
}());

//# sourceMappingURL=contact-edit.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_signup_signup__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, toastCtrl, firebaseauth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.firebaseauth = firebaseauth;
        firebaseauth.user.subscribe((function (data) {
            _this.user = data;
        }));
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.SignUp = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.Login = function () {
        var _this = this;
        this.firebaseauth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
            .then(function () {
            _this.exibirToast('Login efetuado com sucesso');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
        })
            .catch(function (erro) {
            _this.exibirToast(erro);
        });
    };
    LoginPage.prototype.exibirToast = function (mensagem) {
        var toast = this.toastCtrl.create({
            duration: 3000,
            position: 'top',
        });
        toast.setMessage(mensagem);
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('usuario'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('senha'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div style="padding: 30px;">\n\n      <h3 class="titulo">Bem-vindo de volta!</h3>\n\n      <p>Entre com sua conta existente.</p><BR><BR>\n\n\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>E-mail</ion-label>\n\n          <ion-input required type="text" #usuario></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Senha</ion-label>\n\n          <ion-input required type="password" #senha></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <div style="text-align: right">\n\n        <a (click)="forgotpassword()">Esqueceu a senha?</a>\n\n      </div>\n\n      <BR>\n\n      <div>\n\n        <ion-col>\n\n            <button (click)="Login()" style="height: 50px" ion-button full>Entrar</button>\n\n        </ion-col>\n\n      </div>\n\n\n\n      <div class="subtitulo">\n\n        <ion-label>Não tem uma conta? <a (click)="SignUp()"> Criar uma conta</a></ion-label>\n\n      </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, toastCtrl, firebaseauth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.firebaseauth = firebaseauth;
        firebaseauth.user.subscribe((function (data) {
            _this.user = data;
        }));
    }
    SignupPage.prototype.createAccount = function () {
        var _this = this;
        this.firebaseauth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
            .then(function () {
            _this.exibirToast('Usuário criado com sucesso');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
        })
            .catch(function (erro) {
            _this.exibirToast(erro);
        });
    };
    SignupPage.prototype.exibirToast = function (mensagem) {
        var toast = this.toastCtrl.create({ duration: 3000,
            position: 'top' });
        toast.setMessage(mensagem);
        toast.present();
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.Login = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('usuario'),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('senha'),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "password", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div style="padding: 30px;">\n\n      <h3 class="titulo">Vamos começar!</h3>\n\n      <p>Crie uma conta na SURE SERVICES.</p><BR><BR>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>E-mail</ion-label>\n\n          <ion-input type="email" required #usuario></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Senha</ion-label>\n\n          <ion-input type="password" required #senha></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <BR>\n\n      <div>\n\n        <ion-col>\n\n            <button (click)="createAccount()" style="height: 50px" ion-button full>Criar conta</button>\n\n        </ion-col>\n\n      </div>\n\n\n\n      <div class="subtitulo">\n\n        <ion-label>Já possui uma conta?<a (click)="Login()"> Entrar</a></ion-label>\n\n      </div>\n\n\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[290]);
//# sourceMappingURL=main.js.map