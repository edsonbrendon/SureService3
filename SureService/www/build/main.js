webpackJsonp([13],{

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_edit_contact_edit__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(43);
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






var AdvertsPage = /** @class */ (function () {
    function AdvertsPage(navCtrl, navParams, provider, firebaseauth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.firebaseauth = firebaseauth;
        firebaseauth.user.subscribe((function (data) {
            _this.contacts = _this.provider.getAllKeyUser(data.uid);
        }));
    }
    AdvertsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdvertsPage');
    };
    AdvertsPage.prototype.editContact = function (contact) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_edit_contact_edit__["a" /* ContactEditPage */], { contact: contact });
    };
    AdvertsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adverts',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\adverts\adverts.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu" style="zoom: 1.4;color: #222;"></ion-icon>\n\n      </button>\n\n    <ion-title>Meus Anuncios</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list  style="padding: 15px;">\n\n    <ion-item-sliding *ngFor="let contact of contacts | async">\n\n      <ion-item (click)="editContact(contact)">\n\n        <h1>{{ contact.name }}</h1>\n\n        <p>{{ contact.descricao }}</p>\n\n        <p>Telefone: {{ contact.tel }}</p>\n\n        <p>Categoria: {{ contact.categoria }}</p>\n\n      </ion-item>\n\n    </ion-item-sliding>\n\n  </ion-list> \n\n  </ion-content>\n\n\n\n  <page-tabs></page-tabs>\n\n  \n\n'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\adverts\adverts.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__["a" /* ContactProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__["a" /* ContactProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"]) === "function" && _d || Object])
    ], AdvertsPage);
    return AdvertsPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=adverts.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterPerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AlterPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlterPerfilPage = /** @class */ (function () {
    function AlterPerfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlterPerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlterPerfilPage');
    };
    AlterPerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alter-perfil',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\alter-perfil\alter-perfil.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Atualizar Perfil</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\alter-perfil\alter-perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AlterPerfilPage);
    return AlterPerfilPage;
}());

//# sourceMappingURL=alter-perfil.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConversationsPage = /** @class */ (function () {
    function ConversationsPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rooms = [];
        this.ref = __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref('chatrooms/');
        this.ref.on('value', function (resp) {
            _this.rooms = [];
            //this.rooms = snapshotToArray(resp);
        });
    }
    ConversationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conversations',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\conversations\conversations.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu" style="zoom: 1.4;color: #222;"></ion-icon>\n\n      </button>\n\n    <ion-title>Conversas</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n\n\n<page-tabs></page-tabs>'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\conversations\conversations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ConversationsPage);
    return ConversationsPage;
}());

/*
  addRoom() {
    this.navCtrl.push(AddRoomPage);
  }

  joinRoom(key) {
    this.navCtrl.setRoot(HomePage, {
      key:key,
      nickname:this.navParams.get("nickname")
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConversationsPage');
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
};*/
//# sourceMappingURL=conversations.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnuncioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnuncioPage = /** @class */ (function () {
    function AnuncioPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.contact = this.navParams.data.contact || {};
        console.log(this.contact);
        this.createForm();
    }
    AnuncioPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.contact.key],
            name: [this.contact.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            tel: [this.contact.tel, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            latitude: [this.contact.latitude, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            longitude: [this.contact.longitude, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            categoria: [this.contact.categoria, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            descricao: [this.contact.descricao, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    AnuncioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnuncioPage');
    };
    AnuncioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-anuncio',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\anuncio\anuncio.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>anuncio</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div style="padding: 30px;">\n\n    <h1>{{ contact.name }}</h1>\n\n    <p>{{ contact.descricao }}</p>\n\n    <p>{{ contact.tel }}</p>\n\n    <p>{{ contact.categoria }}</p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\anuncio\anuncio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], AnuncioPage);
    return AnuncioPage;
}());

//# sourceMappingURL=anuncio.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alter_perfil_alter_perfil__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams, firebaseauth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseauth = firebaseauth;
        firebaseauth.user.subscribe((function (data) {
            _this.user = data;
            console.log(_this.user);
        }));
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage.prototype.AlterPerfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__alter_perfil_alter_perfil__["a" /* AlterPerfilPage */]);
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\perfil\perfil.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu" style="zoom: 1.4;color: #222;"></ion-icon>\n\n      </button>\n\n    <ion-title>Perfil</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div *ngIf="user != null" style="padding: 20px; text-align: center;">\n\n      <ion-icon name=\'contact\' style="zoom: 5.5;"></ion-icon>\n\n      <p style="color: #DEDEDC;">ID: {{ user.uid }}</p>\n\n      <p><b>{{ user.displayName }}</b></p>\n\n      <p>{{ user.email }}</p>\n\n      <p>{{ user.tel }}</p>\n\n      <p>Email verificado: <b>{{ user.emailVerified }}</b></p>\n\n    </div>\n\n    <button id="btn_Iniciar" block outline expand="block" (click)="AlterPerfil()" ion-button>Atualizar Informações</button> <BR>\n\n</ion-content>\n\n\n\n<page-tabs></page-tabs>'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__initial_initial__ = __webpack_require__(96);
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
    function ProfilePage(navCtrl, toastCtrl, firebaseauth, navParams, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.firebaseauth = firebaseauth;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        firebaseauth.user.subscribe((function (data) {
            _this.user = data;
            console.log(_this.user);
        }));
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.Sair = function () {
        var _this = this;
        this.firebaseauth.auth.signOut()
            .then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__initial_initial__["a" /* InitialPage */]);
        })
            .catch(function (erro) {
            _this.exibirToast(erro);
        });
    };
    ProfilePage.prototype.deletarConta = function () {
        var _this = this;
        this.user.delete().then(function () {
            console.log('Usuário ' + _this.user.email + ' deletado!');
            _this.exibirToast('Conta Deletada com Sucesso!');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__initial_initial__["a" /* InitialPage */]);
        }).catch(function (error) {
            this.exibirToast(error);
        });
    };
    ProfilePage.prototype.exibirToast = function (mensagem) {
        var toast = this.toastCtrl.create({ duration: 3000, position: 'top' });
        toast.setMessage(mensagem);
        toast.present();
    };
    ProfilePage.prototype.deleteConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Tem certeza que deseja deletar esta conta?',
            message: 'Está ação não poderá ser desfeita.',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Operação Cancelada');
                    }
                },
                {
                    text: 'Deletar',
                    handler: function () {
                        console.log('Operação Cancelada');
                        _this.deletarConta();
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.alterPassAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Insira um senha nova',
            inputs: [
                {
                    name: 'senha',
                    type: 'password',
                    placeholder: 'Nova Senha'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Operação Cancelada');
                    }
                },
                {
                    text: 'Atualizar',
                    handler: function (data) {
                        if (data.senha) {
                            _this.alterPass(data.senha);
                        }
                        else {
                            _this.exibirToast('Erro ao alterar Senha!');
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.alterPass = function (senha) {
        this.user.updatePassword(senha).then(function () {
            this.exibirToast('Senha alterada com sucesso!');
        }).catch(function (error) {
            console.log(error);
        });
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
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu" style="zoom: 1.4;color: #222;"></ion-icon>\n\n    </button>\n\n    <ion-title>Configurações da Conta</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div *ngIf="user != null">\n\n      <ion-list>\n\n        <button ion-item (click)="alterPassAlert()">\n\n          <div style="color: #0052EB; padding: 20px;">Alterar Senha</div>\n\n        </button>\n\n        <button ion-item (click)="deleteConfirm()">\n\n          <div style="color: #0052EB; padding: 25px;">Deletar Conta</div>\n\n        </button>\n\n      </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 201:
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
webpackEmptyAsyncContext.id = 201;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adverts/adverts.module": [
		506,
		12
	],
	"../pages/alter-perfil/alter-perfil.module": [
		507,
		11
	],
	"../pages/anuncio/anuncio.module": [
		512,
		10
	],
	"../pages/chat/chat.module": [
		508,
		9
	],
	"../pages/contact-edit/contact-edit.module": [
		510,
		8
	],
	"../pages/conversations/conversations.module": [
		509,
		7
	],
	"../pages/home/home.module": [
		511,
		6
	],
	"../pages/initial/initial.module": [
		515,
		5
	],
	"../pages/login/login.module": [
		513,
		4
	],
	"../pages/perfil/perfil.module": [
		514,
		3
	],
	"../pages/profile/profile.module": [
		516,
		2
	],
	"../pages/signup/signup.module": [
		517,
		1
	],
	"../pages/tabs/tabs.module": [
		518,
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
webpackAsyncContext.id = 244;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { type: '', nickname: '', message: '' };
        this.chats = [];
        this.offStatus = false;
        this.roomkey = this.navParams.get("key");
        this.nickname = this.navParams.get("nickname");
        this.data.type = 'message';
        this.data.nickname = this.nickname;
        var joinData = __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref('chatrooms/' + this.roomkey + '/chats').push();
        joinData.set({
            type: 'join',
            user: this.nickname,
            message: this.nickname + ' has joined this room.',
            sendDate: Date()
        });
        this.data.message = '';
        __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref('chatrooms/' + this.roomkey + '/chats').on('value', function (resp) {
            _this.chats = [];
            _this.chats = snapshotToArray(resp);
            setTimeout(function () {
                if (_this.offStatus === false) {
                    _this.content.scrollToBottom(300);
                }
            }, 1000);
        });
    }
    ChatPage.prototype.sendMessage = function () {
        var newData = __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref('chatrooms/' + this.roomkey + '/chats').push();
        newData.set({
            type: this.data.type,
            user: this.data.nickname,
            message: this.data.message,
            sendDate: Date()
        });
        this.data.message = '';
    };
    ChatPage.prototype.exitChat = function () {
        var exitData = __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref('chatrooms/' + this.roomkey + '/chats').push();
        exitData.set({
            type: 'exit',
            user: this.nickname,
            message: this.nickname + ' has exited this room.',
            sendDate: Date()
        });
        this.offStatus = true;
        this.navCtrl.setRoot(RoomPage, {
            nickname: this.nickname
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\chat\chat.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n          Ionic Firebase Chat\n\n        </ion-title>\n\n        <ion-buttons end>\n\n          <button ion-button icon-only (click)="exitChat()">\n\n            <ion-icon name="exit"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item *ngFor="let chat of chats" no-lines>\n\n          <div class="chat-status" text-center *ngIf="chat.type===\'join\'||chat.type===\'exit\';else message">\n\n            <span class="chat-date">{{chat.sendDate | date:\'short\'}}</span>\n\n            <span class="chat-content-center">{{chat.message}}</span>\n\n          </div>\n\n          <ng-template #message>\n\n            <div class="chat-message" text-right *ngIf="chat.user === nickname">\n\n              <div class="right-bubble">\n\n                <span class="msg-name">Me</span>\n\n                <span class="msg-date">{{chat.sendDate | date:\'short\'}}</span>\n\n                <p text-wrap>{{chat.message}}</p>\n\n              </div>\n\n            </div>\n\n            <div class="chat-message" text-left *ngIf="chat.user !== nickname">\n\n              <div class="left-bubble">\n\n                <span class="msg-name">{{chat.user}}</span>\n\n                <span class="msg-date">{{chat.sendDate | date:\'short\'}}</span>\n\n                <p text-wrap>{{chat.message}}</p>\n\n              </div>\n\n            </div>\n\n          </ng-template>\n\n        </ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-10>\n\n          <ion-input type="text" placeholder="Type a message" [(ngModel)]="data.message" name="message"></ion-input>\n\n        </ion-col>\n\n        <ion-col col-2 (click)="sendMessage()">\n\n          <ion-icon name="paper-plane"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-footer>\n\n'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adverts_adverts__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conversations_conversations__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__perfil_perfil__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage.prototype.NavMapa = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {}, { animate: false }); };
    TabsPage.prototype.NavAdverts = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__adverts_adverts__["a" /* AdvertsPage */], {}, { animate: false }); };
    TabsPage.prototype.NavConversations = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__conversations_conversations__["a" /* ConversationsPage */], {}, { animate: false }); };
    TabsPage.prototype.NavPerfil = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__perfil_perfil__["a" /* PerfilPage */], {}, { animate: false }); };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\tabs\tabs.html"*/'<ion-footer style="background: #F2F2F2;border: 1px solid #ccc;">\n\n    <ion-grid>  \n\n      <ion-row text-center>\n\n        <ion-col>   \n\n          <button (click)="NavMapa()" ion-button clear>\n\n            <ion-icon name=\'home\' style="zoom: 1.8;color:#657280"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n\n\n        <ion-col>  \n\n            <button (click)="NavAdverts()" style="color: #657280;" ion-button clear>\n\n              <ion-icon name=\'list-box\' style="zoom: 1.8;"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n\n\n            <ion-col>  \n\n              <button (click)="NavPerfil()" style="color: #657280;" ion-button clear>\n\n                <ion-icon name=\'contact\' style="zoom: 1.8;"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n\n\n        <ion-col>  \n\n          <button (click)="NavConversations()" style="color: #657280;" ion-button clear>\n\n            <ion-icon name=\'chatbubbles\' style="zoom: 1.8;"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n\n\n      </ion-row>  \n\n    </ion-grid>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(423);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_initial_initial__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_contact_contact__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_adverts_adverts__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_contact_edit_contact_edit__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_anuncio_anuncio__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_conversations_conversations__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_chat_chat__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_perfil_perfil__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_alter_perfil_alter_perfil__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__ = __webpack_require__(257);
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
                __WEBPACK_IMPORTED_MODULE_17__pages_contact_edit_contact_edit__["a" /* ContactEditPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_anuncio_anuncio__["a" /* AnuncioPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_conversations_conversations__["a" /* ConversationsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_alter_perfil_alter_perfil__["a" /* AlterPerfilPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adverts/adverts.module#AdvertsPageModule', name: 'AdvertsPage', segment: 'adverts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alter-perfil/alter-perfil.module#AlterPerfilPageModule', name: 'AlterPerfilPage', segment: 'alter-perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conversations/conversations.module#ConversationsPageModule', name: 'ConversationsPage', segment: 'conversations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-edit/contact-edit.module#ContactEditPageModule', name: 'ContactEditPage', segment: 'contact-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/anuncio/anuncio.module#AnuncioPageModule', name: 'AnuncioPage', segment: 'anuncio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/initial/initial.module#InitialPageModule', name: 'InitialPage', segment: 'initial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_initial_initial__["a" /* InitialPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_adverts_adverts__["a" /* AdvertsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_contact_edit_contact_edit__["a" /* ContactEditPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_anuncio_anuncio__["a" /* AnuncioPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_conversations_conversations__["a" /* ConversationsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_alter_perfil_alter_perfil__["a" /* AlterPerfilPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_contact_contact__["a" /* ContactProvider */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["AngularFireDatabase"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_initial_initial__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth, firebaseauth) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afAuth = afAuth;
        this.firebaseauth = firebaseauth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Configurações da Conta', component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */], icon: 'construct' },
            { title: 'Sair', component: __WEBPACK_IMPORTED_MODULE_5__pages_initial_initial__["a" /* InitialPage */], icon: 'exit' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.afAuth.authState
            .subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_initial_initial__["a" /* InitialPage */];
            }
        }, function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_initial_initial__["a" /* InitialPage */];
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        if (page.title == 'Sair') {
            this.firebaseauth.auth.signOut()
                .then(function () {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_initial_initial__["a" /* InitialPage */]);
            });
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\app\app.html"*/'<ion-menu id="MyMenu" [content]="content" type="overlay">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button  menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_edit_contact_edit__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__anuncio_anuncio__ = __webpack_require__(165);
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
    function HomePage(navCtrl, alertCtrl, provider, geolocation, menuCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.provider = provider;
        this.geolocation = geolocation;
        this.menuCtrl = menuCtrl;
        this.PATH = 'anuncios/';
        this.data = null;
        this.anuncios = [];
        this.latitude = null;
        this.longitude = null;
        this.menuCtrl.enable(true, 'MyMenu');
        this.data = this.provider.getAllKey();
        console.log(this.data);
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.initMap();
    };
    HomePage.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            console.log("Latitude: " + position.coords.latitude);
            console.log("Longitude: " + position.coords.longitude);
            _this.latitude = position.coords.latitude;
            _this.longitude = position.coords.longitude;
            var options = {
                center: { lat: _this.latitude, lng: _this.longitude },
                zoom: 15,
                streetViewControl: false,
                disableDefaultUI: true,
                animation: google.maps.Animation.DROP,
                styles: [
                    {
                        "featureType": "all",
                        "stylers": [{ "saturation": 0 }, { "hue": "#e7ecf0" }]
                    },
                    {
                        "featureType": "road",
                        "stylers": [{ "saturation": -70 }]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [{ "visibility": "off" }]
                    },
                    {
                        "featureType": "poi",
                        "stylers": [{ "visibility": "off" }]
                    },
                    {
                        "featureType": "water",
                        "stylers": [{ "visibility": "simplified" }, { "saturation": -60 }]
                    }
                ]
            };
            console.log("Criando mapa...");
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, options);
            _this.MyMarker(_this.map, position.coords.latitude, position.coords.longitude);
            console.log("Carregando anuncios...");
            _this.data.subscribe(function (anuncios) {
                for (var _i = 0, anuncios_1 = anuncios; _i < anuncios_1.length; _i++) {
                    var anuncio = anuncios_1[_i];
                    _this.anuncios.push({
                        key: anuncio.key,
                        name: anuncio.name,
                        tel: anuncio.tel,
                        latitude: anuncio.latitude,
                        longitude: anuncio.longitude,
                        categoria: anuncio.categoria,
                        descricao: anuncio.descricao,
                    });
                    _this.addMarker(_this.map, anuncio.latitude, anuncio.longitude, anuncio.name, anuncio.categoria + '.png', anuncio.categoria, anuncio);
                }
                console.log("Anuncios inseridos: " + _this.anuncios.length);
                console.log(_this.anuncios);
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    HomePage.prototype.addMarker = function (map, latitude, longitude, titulo, marcador, categoria, anuncio) {
        var position = new google.maps.LatLng(latitude, longitude);
        var marker = new google.maps.Marker({ position: position, title: titulo, map: map, icon: 'assets/imgs/' + marcador });
        this.addInfoWindowToMarker(marker, categoria, anuncio);
        return marker;
    };
    HomePage.prototype.MyMarker = function (map, latitude, longitude) {
        var position = new google.maps.LatLng(latitude, longitude);
        var marker = new google.maps.Marker({ position: position, animation: google.maps.Animation.DROP, map: map, });
        return marker;
    };
    HomePage.prototype.addInfoWindowToMarker = function (marker, categoria, anuncio) {
        var _this = this;
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
        marker.addListener('click', function () {
            //infoWindow.open(this.map, marker);
            //this.navCtrl.push(AnuncioPage, { contact: anuncio });
            _this.presentAlert(anuncio);
        });
    };
    HomePage.prototype.newContact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_edit_contact_edit__["a" /* ContactEditPage */]);
    };
    HomePage.prototype.getAnuncio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__anuncio_anuncio__["a" /* AnuncioPage */]);
    };
    HomePage.prototype.presentAlert = function (anuncio) {
        var alert = this.alertCtrl.create({
            title: anuncio.name,
            subTitle: anuncio.categoria,
            message: 'Descrição: ' + anuncio.descricao +
                '<br>Telefone: ' + anuncio.tel,
            buttons: [
                {
                    text: 'Enviar mensagem',
                    handler: function () {
                        console.log('');
                    }
                },
                {
                    text: 'Perfil do Anunciante',
                    handler: function () {
                        console.log('');
                    }
                },
                {
                    text: 'Voltar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\home\home.html"*/'\n\n<ion-header>\n\n  <ion-navbar transparent>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu" style="zoom: 1.4;color: #222;"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div #map id="map"></div>\n\n\n\n  <ion-fab top right>\n\n    <button ion-fab color="dark" (click)="newContact()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  \n\n</ion-content>\n\n\n\n<page-tabs></page-tabs>\n\n'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__["a" /* ContactProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__["a" /* ContactProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]) === "function" && _f || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
        console.log('Hello ContactProvider Provider');
    }
    ContactProvider.prototype.getAll = function () {
        return this.db.list(this.PATH).valueChanges();
    };
    ContactProvider.prototype.getAllKey = function () {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild('name'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    ContactProvider.prototype.getAllKeyUser = function (anuncianteID) {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild('anuncianteID').equalTo(anuncianteID); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
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
                    descricao: contact.descricao,
                    anuncianteID: contact.anuncianteID
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
                    descricao: contact.descricao,
                    anuncianteID: contact.anuncianteID
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]) === "function" && _b || Object])
    ], ContactProvider);
    return ContactProvider;
    var _a, _b;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_contact_contact__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(43);
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





var ContactEditPage = /** @class */ (function () {
    function ContactEditPage(navCtrl, navParams, formBuilder, provider, toast, firebaseauth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        this.firebaseauth = firebaseauth;
        this.title = '';
        firebaseauth.user.subscribe((function (data) {
            _this.user = data;
            _this.user_uid = data.uid;
            console.log(_this.user);
        }));
        this.contact = this.navParams.data.contact || {};
        this.createForm();
        this.setupPageTitle();
    }
    ContactEditPage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.contact ? 'Alterar Anuncio' : 'Novo Anuncio';
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
            anuncianteID: [this.user_uid],
        });
    };
    ContactEditPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.form.controls['anuncianteID'].setValue(this.user_uid);
            console.log('Anuncio:');
            console.log(this.form.value);
            this.provider.save(this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Anuncio salvo com sucesso.', duration: 3000, position: 'top' }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar o Anuncio.', duration: 3000, position: 'top' }).present();
                console.error(e);
            });
        }
    };
    ContactEditPage.prototype.removeContact = function (key) {
        var _this = this;
        if (key) {
            this.provider.remove(key)
                .then(function () {
                _this.toast.create({ message: 'Anuncio removido sucesso.', duration: 3000, position: 'top' }).present();
            })
                .catch(function () {
                _this.toast.create({ message: 'Erro ao remover o Anuncio.', duration: 3000, position: 'top' }).present();
            });
        }
        this.navCtrl.pop();
    };
    ContactEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-contact-edit',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\contact-edit\contact-edit.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{title}}</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n  <div style="padding: 25px;">\n\n\n\n    <form [formGroup]="form">\n\n      <ion-item>\n\n        <ion-label floating>Nome</ion-label>\n\n        <ion-input type="text" formControlName="name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label floating>Descrição</ion-label>\n\n          <ion-input type="text" formControlName="descricao"></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Telefone</ion-label>\n\n        <ion-input type="tel" formControlName="tel"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label floating>Latitute</ion-label>\n\n          <ion-input type="text" formControlName="latitude"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label floating>Longitude</ion-label>\n\n          <ion-input type="text" formControlName="longitude"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label floating>Categoria</ion-label>\n\n          <ion-select formControlName="categoria">\n\n            <ion-option value="Limpeza">Limpeza</ion-option>\n\n            <ion-option value="Manutenção">Manutenção</ion-option>\n\n            <ion-option value="Pintura">Pintura</ion-option>\n\n            <ion-option value="Educação">Educação</ion-option>\n\n            <ion-option value="Transporte">Transporte</ion-option>\n\n            <ion-option value="Babá">Babá</ion-option>\n\n            <ion-option value="Jardinagem">Jardinagem</ion-option>\n\n            <ion-option value="Outros">Outros</ion-option>\n\n          </ion-select>\n\n      </ion-item>\n\n      <br>\n\n      <div>\n\n        <button ion-button style="height: 50px" block type="submit" [disabled]="!form.valid" (click)="onSubmit()">SALVAR</button>\n\n      </div>\n\n      <br>\n\n      <div *ngIf="title == \'Alterar Anuncio\'" >\n\n        <button block outline expand="block" (click)="removeContact(contact.key)" style="color: #222; border-color: #222;" ion-button>\n\n          <ion-icon name="trash" style="zoom: 1.5;"></ion-icon> \n\n          <p padding>Excluir Anuncio</p>\n\n        </button>\n\n      </div>\n\n\n\n    </form>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\contact-edit\contact-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__providers_contact_contact__["a" /* ContactProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"]])
    ], ContactEditPage);
    return ContactEditPage;
}());

//# sourceMappingURL=contact-edit.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_signup_signup__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(43);
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
    function LoginPage(navCtrl, navParams, toastCtrl, firebaseauth, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.firebaseauth = firebaseauth;
        this.alertCtrl = alertCtrl;
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
            _this.exibirToast('Login efetuado com sucesso!');
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
    LoginPage.prototype.forgotpassword = function (email) {
        this.firebaseauth.auth.sendPasswordResetEmail(email)
            .then(function () {
            // this.exibirToast('Email enviado com sucesso!');
        }).catch(function (error) {
            this.exibirToast(error);
            //this.exibirToast(error);
        });
    };
    LoginPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Enviar e-mail para redefinição da senha',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'E-mail'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Enviar',
                    handler: function (data) {
                        _this.firebaseauth.auth.sendPasswordResetEmail(data.email)
                            .then(function () {
                            this.exibirToast('Email enviado com sucesso!');
                        }).catch(function (error) {
                            this.exibirToast(error);
                        });
                    }
                }
            ]
        });
        alert.present();
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div style="padding: 30px;">\n\n      <h3 class="titulo">Bem-vindo de volta!</h3>\n\n      <p>Entre com sua conta existente.</p><BR><BR>\n\n\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>E-mail</ion-label>\n\n          <ion-input required type="text" #usuario></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Senha</ion-label>\n\n          <ion-input required type="password" #senha></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <div style="text-align: right">\n\n        <a (click)="presentPrompt()">Esqueceu a senha?</a>\n\n      </div>\n\n      <BR>\n\n      <div>\n\n        <ion-col>\n\n            <button id="btn_login" (click)="Login()" block outline ion-button>ENTRAR</button>\n\n        </ion-col>\n\n      </div>\n\n\n\n      <div class="subtitulo">\n\n        <ion-label>Não tem uma conta? <a (click)="SignUp()"> Criar uma conta.</a></ion-label>\n\n      </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
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
    function SignupPage(navCtrl, navParams, toastCtrl, firebaseauth, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.firebaseauth = firebaseauth;
        this.db = db;
        firebaseauth.user.subscribe((function (data) {
            _this.user = data;
        }));
    }
    SignupPage.prototype.createAccount = function () {
        var _this = this;
        this.firebaseauth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
            .then(function () {
            //Envia e-mail de verificação
            var user = _this.firebaseauth.auth.currentUser;
            user.sendEmailVerification().then(function () {
                console.log('Enviado e-mail de verificação para ' + user.email);
            }).catch(function (error) {
                console.log(error);
            });
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
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div style="padding: 30px;">\n\n      <h3 class="titulo">Vamos começar!</h3>\n\n      <p>Crie uma conta na SURE SERVICES.</p><BR><BR>\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>E-mail</ion-label>\n\n          <ion-input type="email" required #usuario></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Senha</ion-label>\n\n          <ion-input type="password" required #senha></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <BR>\n\n      <div>\n\n        <ion-col>\n\n            <button id="btn_Iniciar" (click)="createAccount()" block outline ion-button>CRIAR CONTA</button>\n\n        </ion-col>\n\n      </div>\n\n\n\n      <div class="subtitulo">\n\n        <ion-label>Já possui uma conta?<a (click)="Login()"> Entrar.</a></ion-label>\n\n      </div>\n\n\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_signup_signup__ = __webpack_require__(95);
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
    function InitialPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(false, 'MyMenu');
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
            selector: 'page-initial',template:/*ion-inline-start:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\initial\initial.html"*/'<ion-content class="background">\n\n  <div class="Grupo">\n\n    <h3 class="Subtitulo">Bem-vindo!</h3>\n\n    <p class="Descricao">Encontre o que você precisa, onde estiver.</p><BR>\n\n    <div>\n\n        <ion-col>\n\n          <button id="btn_Iniciar" block outline expand="block" (click)="SignUp()" ion-button>COMEÇAR</button> <BR>\n\n          <button (click)="Login()" block outline expand="block" style="height: 50px; font-weight: bold;color: white;background: #222;border: none" ion-button>ENTRAR</button>\n\n        </ion-col>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n    \n\n'/*ion-inline-end:"C:\Users\edson\Documents\GitHub\SureService3\SureService\src\pages\initial\initial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], InitialPage);
    return InitialPage;
}());

//# sourceMappingURL=initial.js.map

/***/ })

},[302]);
//# sourceMappingURL=main.js.map