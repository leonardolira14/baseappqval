webpackJsonp([23],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsjsopportePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__principal_principal__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_servicio__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_websocket__ = __webpack_require__(134);
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
 * Generated class for the MsjsopportePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MsjsopportePage = /** @class */ (function () {
    function MsjsopportePage(wsServices, chatService, navCtrl, navParams) {
        var _this = this;
        this.wsServices = wsServices;
        this.chatService = chatService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mensajes = [];
        this.message = "";
        this.datosusuario = [];
        this.usuariosActivosObs = this.chatService.usuario_soporte();
        this.usuariosActivosObs.subscribe(function (respuesta) {
            console.log(respuesta["clientes"][0]["id"]);
            _this.idsporte = respuesta["clientes"][0]["id"];
        });
        this.datosusuario = JSON.parse(localStorage.getItem("datosuaurio"));
        this.wsServices.loginWS(this.datosusuario["datos"]["Nombre"] + " " + this.datosusuario["datos"]["Apellidos"], this.datosusuario["datos"]["IDEmpresa"]);
    }
    MsjsopportePage.prototype.ngOnDestroy = function () {
        this.usuariosActivosObs;
    };
    MsjsopportePage.prototype.ngOnInit = function () {
        //this.idsporte=this.usuariosActivosObs["clientes"][0]["id"]
        var _this = this;
        this.chatService.getmessageprivate().subscribe(function (msj) {
            _this.mensajes.push(msj);
            //this.scrollToBottom();
        });
    };
    MsjsopportePage.prototype.ionViewCanLeave = function () {
    };
    MsjsopportePage.prototype.scrollToBottom = function () {
        var contentEnd = document.getElementById("content").scrollHeight;
        this.content.scrollTo(0, contentEnd, 300);
    };
    MsjsopportePage.prototype.gottoHome = function () {
        if (localStorage.datosuaurio) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__principal_principal__["a" /* PrincipalPage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
    };
    MsjsopportePage.prototype.sendMessage = function () {
        if (this.message.trim().length === 0) {
            return;
        }
        //this.chatService.mensaje_soporte(this.message,this.)
        this.chatService.mensaje_soporte(this.wsServices.usuario.nombre, this.message, this.idsporte);
        this.message = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("content"),
        __metadata("design:type", Object)
    ], MsjsopportePage.prototype, "content", void 0);
    MsjsopportePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-msjsopporte',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\msjsopporte\msjsopporte.html"*/'\n<ion-header>\n\n    <ion-navbar color="primary">\n        \n      <ion-title>\n        Soporte Técnico\n      </ion-title>\n  \n      \n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content padding #content id="content">\n   <ion-card *ngFor="let cuerpo of mensajes">\n        <ion-card-header>\n                {{cuerpo.nombreemisor}} dice:\n        </ion-card-header>\n        <ion-card-content>\n                {{cuerpo.mensaje}}\n        </ion-card-content>\n   </ion-card>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n        <ion-input  [(ngModel)]="message" placeholder="Mensaje"></ion-input>\n        <ion-buttons end>\n                <button (click)="sendMessage()" ion-button icon-only color="secondary">\n                        Enviar\n                        <ion-icon name="send"></ion-icon>\n                </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\msjsopporte\msjsopporte.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_http_websocket__["a" /* WebsocketProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_http_servicio__["a" /* UtilsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MsjsopportePage);
    return MsjsopportePage;
}());

//# sourceMappingURL=msjsopporte.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ingpassword_ingpassword__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__politicas_politicas__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__msjsopporte_msjsopporte__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recuperacontra_recuperacontra__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__principal_principal__ = __webpack_require__(24);
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
    function LoginPage(alertCtrl, navCtrl, navParams, http, formBuilder) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.formBuilder = formBuilder;
        this.path = 'http://192.168.0.3/appqval/';
        this.datos = this.formBuilder.group({
            correo: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].email]],
            clave: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].required],
            noclose: ['']
        });
        this.formlogin = new FormData();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.alertinfo = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['Entiendo']
        });
        alert.present();
    };
    LoginPage.prototype.gototermirminos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ingpassword_ingpassword__["a" /* IngpasswordPage */]);
    };
    LoginPage.prototype.gotopoliticas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__politicas_politicas__["a" /* PoliticasPage */]);
    };
    LoginPage.prototype.gotosoport = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__msjsopporte_msjsopporte__["a" /* MsjsopportePage */]);
    };
    LoginPage.prototype.recuperar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__recuperacontra_recuperacontra__["a" /* RecuperacontraPage */]);
    };
    LoginPage.prototype.logueo = function () {
        var _this = this;
        this.http.iniciodesesion(this.datos.value)
            .subscribe(function (res) {
            console.log();
            if (res["pass"] !== 0) {
                localStorage.setItem("datosuaurio", JSON.stringify(res));
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__principal_principal__["a" /* PrincipalPage */]);
            }
            else {
                _this.alertinfo("", res["datos"]);
            }
        }, function (err) {
            _this.alertinfo("Alerta", err);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\login\login.html"*/'<ion-header >\n    <ion-navbar color="primary" >\n      <ion-title text-center >\n        Iniciar Sesión\n      </ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="gotosoport()">\n              <h5> <i class="fas fa-headset"></i></h5> \n          </button>\n        </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n    <ion-grid>\n        <ion-row>\n            <ion-col col-12>\n                <form [formGroup]="datos" >\n                  <ion-list >\n                    <ion-item>\n                        <ion-label color="primary" stacked>Correo Electrónico</ion-label>\n                        <ion-input formControlName="correo" type="email"></ion-input>\n                    </ion-item>\n                \n                    <ion-item>\n                        \n                        <ion-label color="primary" stacked>Contraseña</ion-label>\n                        <ion-input id="contra" formControlName="clave" type="password" ></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Recuerdame</ion-label>\n                        <ion-checkbox formControlName="noclose"></ion-checkbox>\n                    </ion-item>\n                </ion-list>\n            </form>\n                             \n            </ion-col>\n           <ion-col col-6 text-center>\n              <button (click)="logueo()" [disabled]="!datos.valid" round icon-start ion-button full color="primary"><ion-icon ios="ios-checkmark-circle-outline" md="md-checkmark-circle-outline"></ion-icon> Ingresar</button>\n          </ion-col>\n            <ion-col col-6 text-center>\n                <button round icon-start ion-button full color="primary"><ion-icon ios="ios-qr-scanner" md="md-qr-scanner"></ion-icon> Escanear Qr</button>\n            </ion-col>\n            <ion-col col-12 text-center class="m-t-30">\n                <button   ion-button full color="primary" (click)="recuperar()" outline> Recuperar Constraseña</button>\n            </ion-col>\n            <ion-col col-12 text-justify class="m-t-20">\n              <small color="light">Al hacer clic en ingresar acepta nuestros <span (click)="gototermirminos()" class="text-blue">terminos y codiciones</span>  a si como las <span class="text-blue" (click)="gotopoliticas()">politicas de privacidad</span> </small>\n            </ion-col>\n         \n          \n        </ion-row>\n    </ion-grid>\n    \n   \n  </ion-content>\n  '/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quees_quees__ = __webpack_require__(177);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.quees = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__quees_quees__["a" /* QueesPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\home\home.html"*/'<div class="fondo">\n<div class="filtro"></div>\n<div class="logo">\n  <img src="../../assets/imgs/Qval-logo_1024x500.png">\n</div>\n<div class="botones">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 text-center>\n          <button ion-button round color="primary" outline (click)="login()">Iniciar Sesión</button>\n      </ion-col>\n      <ion-col col-12 text-center>\n          <button ion-button round color="secondary" outline>Crear Cuenta</button>\n      </ion-col>\n      <ion-col col-12 text-center>\n          <button ion-button round color="maroon" (click)="quees()" outline>Saber más de Qval</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n</div>'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_socket_io__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_usuario__ = __webpack_require__(723);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the WebsocketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WebsocketProvider = /** @class */ (function () {
    function WebsocketProvider(http, socket) {
        this.http = http;
        this.socket = socket;
        this.socketstatus = false;
        this.usuario = null;
        this.datosusuario = [];
        this.datosusuario = JSON.parse(localStorage.getItem("datosuaurio"));
    }
    WebsocketProvider.prototype.checkStatus = function () {
        var _this = this;
        this.socket.on('connect', function () {
            console.log("conectado al servidor");
            _this.socketstatus = true;
            _this.loginWS(_this.datosusuario["datos"]["Nombre"] + " " + _this.datosusuario["datos"]["Apellidos"], _this.datosusuario["datos"]["IDEmpresa"]);
        });
        this.socket.on('disconnect', function () {
            console.log("desconecato del servidor");
            _this.socketstatus = false;
        });
    };
    WebsocketProvider.prototype.emit = function (evento, payload, callback) {
        this.socket.emit(evento, payload, callback);
    };
    WebsocketProvider.prototype.listen = function (evento) {
        return this.socket.fromEvent(evento);
    };
    WebsocketProvider.prototype.logout = function () {
        this.usuario = null;
        var payload = {
            nombre: "sin-nombre"
        };
        this.emit("configurar-usuario", payload, function () { });
    };
    WebsocketProvider.prototype.loginWS = function (nombre, empresa) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("configuarar usario");
            _this.emit('configurar-usuario', { nombre: nombre }, function (resp) {
                _this.usuario = new __WEBPACK_IMPORTED_MODULE_3__classes_usuario__["a" /* Usuario */](nombre, empresa);
                resolve();
            });
        });
    };
    WebsocketProvider.prototype.getUsuario = function () {
        return this.usuario;
    };
    WebsocketProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_socket_io__["a" /* Socket */]])
    ], WebsocketProvider);
    return WebsocketProvider;
}());

//# sourceMappingURL=websocket.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuconfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__msjsopporte_msjsopporte__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__micuenta_micuenta__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ayuda_ayuda__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__acercade_acercade__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_http_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__seguridad_seguridad__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
 * Generated class for the MenuconfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuconfigPage = /** @class */ (function () {
    function MenuconfigPage(alertCtrl, http, Load, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.Load = Load;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = this.Load.create({ content: 'Obtenenido datos', });
        this.loadingup = this.Load.create({ content: 'Guardando datos', });
        if (localStorage.offline) {
            this.offlinecheck = true;
        }
        else {
            this.offlinecheck = false;
        }
        this.pagesmsconfig = [
            { titulo: "Mi cuenta", component: __WEBPACK_IMPORTED_MODULE_4__micuenta_micuenta__["a" /* MicuentaPage */], icon: "person" },
            { titulo: "Seguridad", component: __WEBPACK_IMPORTED_MODULE_8__seguridad_seguridad__["a" /* SeguridadPage */], icon: "key" },
            { titulo: "Soporte Técnico", component: __WEBPACK_IMPORTED_MODULE_3__msjsopporte_msjsopporte__["a" /* MsjsopportePage */], icon: "headset" },
            { titulo: "Ayuda", component: __WEBPACK_IMPORTED_MODULE_5__ayuda_ayuda__["a" /* AyudaPage */], icon: "help" },
            { titulo: "Acerca de Qval", component: __WEBPACK_IMPORTED_MODULE_6__acercade_acercade__["a" /* AcercadePage */], icon: "ribbon" },
        ];
    }
    MenuconfigPage.prototype.ionViewDidLoad = function () {
    };
    MenuconfigPage.prototype.alertinfo = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['Entiendo']
        });
        alert.present();
    };
    MenuconfigPage.prototype.activar_offline = function () {
        var _this = this;
        if (this.offlinecheck == true) {
            localStorage.setItem("offline", "ok");
            this.loading.present();
            this.http.download_data(localStorage.datosuaurio)
                .subscribe(function (res) {
                localStorage.setItem("datosoffline", JSON.stringify(res));
                _this.loading.dismiss();
                _this.alertinfo("", "Se han descargado los datos correctamente.");
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.loadingup.present();
            this.http.updata(localStorage.calificaciones)
                .subscribe(function (res) {
                _this.loadingup.dismiss();
                _this.alertinfo("", "Calificaciones Guardadas.");
                localStorage.removeItem("offline");
                localStorage.removeItem("calificaciones");
                localStorage.removeItem("datosoffline");
            }, function (error) {
                _this.loadingup.dismiss();
                console.log(error);
            });
            // this.loadingup.present()
        }
    };
    MenuconfigPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    MenuconfigPage.prototype.gotopagemsg = function (page) {
        this.navCtrl.push(page);
    };
    MenuconfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menuconfig',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\menuconfig\menuconfig.html"*/'<!--\n  Generated template for the MenuconfigPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-navbar>\n        <ion-title text-center>\n          Configuraciones\n        </ion-title>\n    \n      <ion-buttons end>\n          <button ion-button icon-only (click)="home()">\n              <ion-icon name="home"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-navbar>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content padding>\n    <ion-list >\n        <ion-item >\n          <ion-icon color="alight-gray"  item-left name="wifi"></ion-icon>\n          <ion-label>  Modo offline</ion-label>\n          <ion-toggle color="secondary" [(ngModel)]="offlinecheck" (ionChange)="activar_offline()" item-right  checked="false"></ion-toggle>\n        </ion-item>\n        <button ion-item *ngFor="let pagina of pagesmsconfig" (click)="gotopagemsg(pagina.component)">\n            <ion-icon color="alight-gray"  item-left name="{{pagina.icon}}"></ion-icon>\n              {{pagina.titulo}}\n        </button> \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\menuconfig\menuconfig.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MenuconfigPage);
    return MenuconfigPage;
}());

//# sourceMappingURL=menuconfig.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the IngpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IngpasswordPage = /** @class */ (function () {
    function IngpasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IngpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IngpasswordPage');
    };
    IngpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ingpassword',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\ingpassword\ingpassword.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Términos y Condiciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h5 class="subtitle">A. CONDICIONES DE APLICACIÓN GENERAL</h5>\n  <p>Los presentes términos y condiciones rigen el uso del sitio web admyo.com por parte del USUARIO que accede al mismo y constituye un Contrato legalmente obligatorio para las partes. INFO ADMYO S.A. de C.V. es una sociedad legalmente constituida con capacidad legal para celebrar el presente contrato, con domicilio en: Newton 57 A, Col. Polanco, C.P. 11560, México D.F., México.</p>\n  <p>El USUARIO reconoce haber leído los términos y condiciones, políticas de privacidad y reglas de uso de este sitio y acepta quedar obligado conforme a sus disposiciones, marcando la casilla de “Acepto haber leído y me obligo a cumplir, los términos y condiciones, políticas de privacidad y reglas de uso” y haciendo click en Inscríbete.</p>\n  <p>INFO ADMYO, S.A. DE C.V. (de aquí en adelante designado como “ADMYO”) podrá realizar cambios al presente contrato a su entera discreción. Todo cambio sustancial será comunicado al USUARIO y la aceptación y/o uso continuo del servicio de ADMYO tras dicha notificación de cambios introducidos en el presente Contrato, constituirá la aceptación incondicional por parte del USUARIO de dichos cambios.</p>\n  <p>\n      El presente sitio web es un buscador de información responsable y veraz, sobre opiniones y valoraciones (de aquí en adelante designado como “Contenido”)del comportamiento empresarial de personas morales, comerciantes personas físicas con actividad empresarial, profesionistas y/o prestadores de servicios, con objeto de servir como informativo de la calificación que se otorgue como proveedor a sus productos y/o servicios o como cliente en su calidad de pago\n  </p>\n  \n  <h5 class="m-t-20 subtitle">B. CONDICIONES APLICABLES PARA EL USUARIO</h5>\n  <p>\n      El USUARIO es la persona que accede, se registra, utiliza y califica a través de su valoración y a su propio juicio y responsabilidad, los productos y servicios de las empresas y/o profesionistas (de aquí en adelante designado como el “USUARIO”).\n  </p>\n  <p>\n      El USUARIO deberá ser mayor de edad, tener la capacidad de contratar los servicios que ofrece este sitio web en nombre y representación de su empresa u organización y gozar del pleno ejercicio de sus derechos con arreglo a la Ley aplicable.\n  </p>\n  <p>\n      El USUARIO es responsable de mantener privados sus datos confidenciales.\n  </p>\n    <p>\n        Los comentarios, opiniones y valoraciones realizadas por el USUARIO, son de su única y exclusiva responsabilidad. El USUARIO asume todos los riesgos asociados con su Contenido, incluyendo, la confianza de alguien sobre su calidad, precisión o fiabilidad, o cualquier exposición de información en su Contenido que lo identifique personalmente. El USUARIO manifiesta autorizar el uso de su Contenido como se describe en el presente contrato.\n    </p>\n    <p>\n        El USUARIO es el único responsable del Contenido y valoraciones una vez publicado y no será posible retirarlo, salvo que lo exprese a ADMYO mediante un correo electrónico a support@admyo.com dando las razones explícitas del cambio. ADMYO se reserva el derecho al cambio de la valoración\n    </p>\n    <p>El acceso, introducción y uso de la información contenida en el sitio, es de la exclusiva responsabilidad del USUARIO que la realiza.</p>\n    <p>El USUARIO libera expresamente a ADMYO de toda responsabilidad legal por el contenido de los comentarios, opiniones y valoraciones vertidas en el presente sitio, incluyendo responsabilidad de carácter civil, mercantil, administrativo y penal o de cualquier legislación que pudiera resultar aplicable.</p>\n    <p>El USUARIO se obliga y asume la responsabilidad que toda la información que proporcione al portal de ADMYO es veraz, responsable y comprobable y que estará exenta de textos que induzcan o puedan inducir a error o confusión. El USUARIO asume la responsabilidad en el caso de que su Contenido tenga material que es falso, intencionadamente engañoso o difamatorio; si infringe derechos de terceros, incluyendo derechos de autor, marca registrada, patente, secreto comercial, derecho moral, derecho privado, derecho de publicidad o cualquier otra propiedad intelectual o derecho de propiedad; si contiene material ilícito, incluyendo insultos y amenazas discriminatorias.</p>\n    <p>ADMYO no se responsabiliza por errores tipográficos realizados en la web por parte de USUARIOS.</p>\n    <p>El USUARIO reconoce que toda acción de “competencia desleal” será sancionada conforme a la Ley, por la autoridad competente.</p>\n    <p> El USUARIO cede y transfiere sin limitación alguna a favor de ADMYO, la titularidad de las opiniones y valoraciones vertidas en este sitio. La excepción siendo el Contenido vertido en el apartado de Resolución de Conflicto, donde la información es de la propiedad del USUARIO que la ha introducido.</p>\n    <p>En el caso que usted acepte pagar la cuota mensual de acceso al correspondiente servicio Básico o Premium de ADMYO, dicha cuota se cobrará el mismo día de cada mes según el día que se haya inscrito a dicho servicio y de acuerdo con la forma de pago que usted haya elegido. En cualquier forma de pago, el USUARIO confirma que es titular de la cuenta o tarjeta.</p>\n    <p>* Consulta incondicionad de perfiles de otros USUARIOS. El número de consultas está en función del plan al cual se inscriba el USUARIO. Las consultas son accesibles en los planes Pago por Uso, Básico y Premium.</p>\n    <p>* Estadísticas de visitasa. El usuario recibirá quincenalmente las estadísticas de visitas a su perfil por otros usuarios. En ningún caso se darán nombres propios de los visitantes. Este reporte es accesible en el plan Básico y Premium.</p>\n    <p>* Envío de emailsa. Los usuarios suscritos al plan Premium podrán enviar emails de contacto directamente desde el portal de ADMYO. Generación de Contactosa. Los usuarios suscritos al plan Premium podrán publicar dentro de ADMYO, apartado de nicho de mercado, que le permita generar contactos de forma indirecta.</p>\n    <p>* Consultas internacionalesa. Los usuarios Premium podrán ver los perfiles de empresas internacionales.</p>\n    <p>En el caso de una inconformidad de pago, se le notificará al USUARIO y este tendrá una semana para corregir el problema antes de que le sean suspendidos los servicios prestados, según sea el caso. La fecha de cobro para subsiguientes pagos no cambiará.</p>\n    <p>ADMYO podrá modificar los precios de sus servicios. Dicha modificación en el precio le será comunicada vía correo electrónico y será efectiva una vez transcurrido el periodo de pago correspondiente. En caso de que no desee obligarse por dicho precio modificado, usted podrá dar de baja su suscripción a dicho servicio. El hecho de que usted continúe utilizando los servicios de pago de ADMYO una vez se le haya comunicado a usted dicha modificación de precios, constituirá una aceptación al nuevo precio.</p>\n    <p>Dentro de ADMYO los únicos medios de pago aceptados son Paypal (www.paypal.com) y DineroMail (www.dineromail.com). Para poder acceder a los servicios de pago de ADMYO es incondicional y obligatorio tener una cuenta en alguno de estos dos sitios web. ADMYO no acepta pagos en efectivo, cheque, tarjetas de crédito o transferencia bancaria.</p>\n    <p>A todos los precios indicados por ADMYO se les debe de agregar el I.V.A. correspondiente (cuando proceda) y además se incluirán cualesquiera impuestos y derechos aplicables.</p>\n    <p>Su suscripción a los servicios de pago se renovará automáticamente al final de cada periodo de vigencia, a menos que usted proceda a dar de baja su suscripción. Dicha renovación será siempre por el mismo periodo que el último que realizó.</p>\n    <h5 class="m-t-20 subtitle">C. DISPOSICIONES GENERALES</h5>\n    <p>ADMYO se reserva los derechos de autor y de propiedad intelectual sobre este sitio y sus contenidos.</p>\n    <p>ADMYO no puede hacer cambios en las valoraciones realizadas por los USUARIOS, salvo como se estipula en el presente Contrato.</p>\n    <p>Los derechos relativos a imágenes, logotipos o signos distintivos contenidos en este sitio, son de la exclusiva propiedad de ADMYO.</p>\n    <p>ADMYO se reserva el derecho de eliminar en cualquier momento y sin responsabilidad alguna, cualquier valoración, opinión o comentario que estime conveniente en acatamiento a mandato de autoridad competente.</p>\n    <p>ADMYO se reserva el derecho, sin responsabilidad legal de su parte a retirar, cancelar y/o inhabilitar, bajo comunicación de previo correo electrónico, del acceso a su cuenta en caso de que esté violando los principios de operación del portal, que incluyen entre otros: </p>\n    <ul>\n      <li>* Valorar de forma perniciosa y con objeto de difamar sin la correspondiente información comprobable</li>\n      <li>* Acosar o intimidar a otros usuarios</li>\n      <li>* Enviar "spam" ("correo basura") a otros usuarios o utilizar medios automatizadas para promocionar contenidos artificialmente.</li>\n    </ul>\n    <p> ADMYO tiene funcionalidades que permiten publicar sus acciones informativas y/o contenidos dentro de diferentes redes sociales, pero no está limitado a: Facebook y Twitter. Usted podrá decidir utilizar o no utilizar el potencial que le puede brindar esta publicación en redes sociales en la edición de su perfil.</p>}\n    <p>El USUARIO garantiza que tomará las medidas adecuadas para evitar un uso no autorizado del servicio de ADMYO y su contenido. Además, el USUARIO acepta que no podrá (entre otros aspectos):</p>\n    <ul>\n      <li>* Vender o tratar de vender los servicios de ADMYO, o revender cualquier código utilizado para acceder a los servicios de ADMYO</li>\n      <li>* Facilitar su contraseña a otra persona ni utilizar el nombre de usuario y contraseña de otra persona;</li>\n      <li>* Aplicar técnicas de ingeniería inversa, descompilar, desmontar, modificar o crear un servicio similar al de ADMYO;</li>\n      <li>* Burlar cualquier tecnología utilizada por ADMYO;</li>\n      <li>* Comercializar en cualquier forma los servicios de ADMYO;</li>\n      <li>* Utilizar ADMYO de forma que conlleve una violación a los términos del presente Contrato;</li>\n      <li>* Incrementar artificialmente las valoraciones propias o ajenas o manipular de otra forma el servicio y los datos prestados por ADMYO.</li>\n    </ul>\n    <p>ADMYO podrá publicar la información, opiniones y valoraciones vertidas en este sitio, sin que el USUARIO tenga derecho a ninguna compensación por dicha información.</p>\n    <p>La información, opiniones y valoraciones del USUARIO no reflejan necesariamente la opinión de ADMYO.</p>\n    <p>En ningún caso responderá ADMYO, sus accionistas, consejeros y empleados de posibles daños y perjuicios directos, indirectos, incidentales, especiales o consecuentes (incluidos entre otros, las pérdidas de datos, interrupciones del servicio, fallos informáticos o pérdidas pecuniarias) que surjan del uso o de la imposibilidad de utilizar los servicios de ADMYO (incluidos, entre otros, sus contenidos), incluso en el caso de que usted haya advertido a ADMYO de la posibilidad de que se produzcan dichas pérdidas, e incluidos los daños y perjuicios que ocasionen.</p>\n    <p>El USUARIO acuerda indemnizar y eximir de toda responsabilidad a ADMYO y a sus accionistas, consejeros y empleados de cualquier reclamación o demanda (incluidos entre otros, los honorarios legales razonables) presentada por un tercero debido a, o que surja de, o tenga relación con, la violación por parte del USUARIO, de los términos y condiciones del presente contrato o la violación de cualquiera ley, reglamento o la vulneración de derechos de terceros.</p>\n    <p>En caso de que llegare a interponerse cualquier litigio o controversia entre el USUARIO valorador y el USUARIO valorado, ambas partes convienen y se obligan a eximir a ADMYO de toda responsabilidad legal y por ende sacarán en paz y a salvo a ADMYO de todo tipo de litigios de cualquier naturaleza relacionados con cualquier disputa o litigio entre ellos existente, como consecuencia de las valoraciones correspondientes. En adición a lo anterior, tanto el USUARIO valorador como el valorado, aceptan y se obligan a no ejercitar acción legal de ninguna especie, conjunta o separadamente, directamente o a través de interpósita persona, en contra de ADMYO. En caso de surgir cualquier controversia o litigio entre el USUARIO valorador y el valorado, o si cualquiera de las dos partes o las dos presentan cualquier reclamación, queja, demanda o denuncia legal o judicial de cualquier especie en su contra, quedan obligadas y se comprometen a resarcir y/o rembolsar a ADMYO, los importes de cualquier sentencia condenatoria, gastos y costas, intereses moratorios o cualquier otro importe por daños o perjuicios, pérdidas económicas, pérdidas de negocios, de oportunidades comerciales, de crédito mercantil, de fama o prestigio, pérdidas de utilidades, daño moral, o cualquier otra suma de dinero por cualquier concepto y cualquiera que sea su naturaleza (incluyendo los honorarios razonables de abogados), que ADMYO hubiere tenido que erogar como consecuencia de lo anteriormente aquí estipulado.</p>\n    <p>Aún cuando usted cancele su cuenta, es y seguirá siendo responsable, según la ley vigente, de toda la información que ha publicado en el mismo.</p>\n    <p>El USUARIO acepta que:</p>\n    <ul>\n      <li>El sitio está disponible “tal cual” “con todos los defectos” y “cuando esté disponible”. El USUARIO utiliza este sitio bajo su propia responsabilidad. ADMYO no hace afirmaciones ni promesas sobre la calidad, fidelidad o fiabilidad del sitio, por consiguiente, ADMYO no es responsable de ninguna pérdida o daño que pudiere ocurrir en la calidad, fidelidad o fiabilidad de los listados de empresas, así como en las opiniones y valoraciones vertidas en este sitio.</li>\n      <li>ADMYO no hace reclamaciones ni promesas con respecto a un tercero. Consecuentemente ADMYO no es responsable por pérdidas o daños que puedan surgir de sus acciones, incluyendo, por ejemplo: si otro USUARIO abusa de su contenido o identidad, o si tiene una experiencia negativa con alguna de las empresas listadas en este sitio. La compra y el uso de productos o servicios ofrecidos en este sitio por terceras partes será bajo su exclusiva responsabilidad y riesgo.</li>\n      <li>ADMYO no otorga ninguna garantía expresa o implícita, incluyendo garantías en cuanto a los productos o servicios ofrecidos por las empresas listadas en ADMYO</li>\n      <li>En caso de insatisfacción o de cualquier otra queja con ADMYO, el único y exclusivo derecho del USUARIO y/o cualquier otro recurso o acción legal de su parte será el dar por terminado este contrato y cesar en el acceso y uso del mismo.</li>\n      <li>El USUARIO podrá enviar un correo electrónico a support@admyo.com con sus dudas relativas a ADMYO o al presente Contrato</li>\n    </ul>\n    <h5 class="m-t-20 subtitle">D. REGLAS DE USO</h5>\n    <p>El USUARIO acepta no utilizar, ni ayudar, ni animar o facilitar el uso del Sitio para:</p>\n    <ul>\n      <li>Infringir nuestras políticas de contenido proporcionando comentarios falsos o difamatorios;</li>\n      <li>Infringir algún derecho de terceros, incluyendo cualquier abuso de confianza, derechos de autor, marca comercial, patente, secreto comercial, derecho moral, derecho de privacidad, derecho de publicidad o cualquier otro derecho de propiedad intelectual;</li>\n      <li>Amenazar, acosar, dañar u hostigar a otros o fomentar el racismo o la discriminación;</li>\n      <li>Promocionar un negocio u operación o evento empresarial o usar el Sitio con propósitos comerciales, excepto cuando éste sea convenido con ADMYO;</li>\n      <li>Enviar correos electrónicos basura, encuestas y otra mensajería masiva, tanto si es de naturaleza comercial como si no; o intentar manipular los resultados de búsqueda del Sitio o de cualquier sitio web de terceros;</li>\n      <li> Solicitar información personal de menores o enviar o transmitir pornografía;</li>\n      <li>Infringir cualquier ley aplicable.</li>\n    </ul>\n    <p>Asimismo, el USUARIO acepta no utilizar ni ayudar, ni animar o facilitar a otros para:</p>\n    <ul>\n      <li>Infringir los términos y condiciones aquí estipulados;</li>\n      <li>Modificar, adaptar, apropiarse, reproducir, distribuir, traducir, crear trabajos derivados o adaptaciones de, mostrar públicamente, vender, comercial o explotar de cualquier manera el Sitio o el Contenido del mismo (distinto a su Contenido);</li>\n      <li>Utilizar cualquier robot, araña, aplicación de búsqueda/recuperación de sitio u otro dispositivo, proceso o medio automatizado para acceder, recuperar o indexar cualquier fragmento o contenido del Sitio;</li>\n      <li>Realizar ingeniería inversa al contenido del Sitio;</li>\n      <li>Eliminar o modificar cualquier aviso de derechos de autor, marca registrada u otros derechos de propiedad que aparezcan en cualquier fragmento del Sitio o en cualquier material impreso o copiado del Sitio;</li>\n      <li>Registrar, procesar o extraer información sobre otros USUARIOS;</li>\n      <li>Acceder, recuperar o indexar cualquier fragmento del Sitio con el objeto de construir o establecer bases de datos de negocios;</li>\n      <li>Reformatear o encuadrar cualquier fragmento del Sitio;</li>\n      <li>Emprender acciones que impongan o puedan imponer, de forma unilateral, una carga no razonable o desproporcionadamente grande en la infraestructura tecnológica de ADMYO, o provocar demandas excesivas de tráfico del Sitio;</li>\n      <li>Utilizar el Sitio o cualquier contenido del mismo para transmitir cualquier virus, gusano, defecto, troyanos u otros elementos informáticos de naturaleza destructiva;</li>\n      <li>Utilizar cualquier dispositivo, software o rutina que interfiera con el buen funcionamiento del Sitio;</li>\n      <li>Utilizar el Sitio para infringir la seguridad de cualquier red informática, crackear contraseñas o códigos de cifrado de seguridad, desestabilizar o interferir con la seguridad del Sitio o de dañar de cualquier otra forma el contenido del mismo;</li>\n      <li>Eliminar, evadir, inhabilitar, dañar o interferir con las funciones de seguridad del Sitio, funciones que evitan o restrinjan el uso o la copia del contenido del Sitio o funciones que impongan limitaciones en el uso del mismo.</li>\n    </ul>\n    <p>Dentro del apartado Como Funciona, se plantean respuesta a las preguntas de funcionamiento de ADMYO</p>\n    <h5 class="m-t-20 subtitle">E. SERVICIOS DE TERCEROS</h5>\n    <p>Este Sitio puede incluir enlaces a otros sitios web o aplicaciones (un Sitio de Terceros). En ADMYO no controlamos ni apoyamos ningún Sitio de Terceros. Asimismo, no somos responsables de la disponibilidad o de los contenidos de dichos Sitios de Terceros. La utilización de los Sitios de Terceros es bajo su propia responsabilidad.</p>\n    <p> ADMYO se reserva el derecho a celebrar contratos con terceras partes en relación a la disposición, uso y utilización de contenidos de este sitio.</p>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\ingpassword\ingpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], IngpasswordPage);
    return IngpasswordPage;
}());

//# sourceMappingURL=ingpassword.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoliticasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the PoliticasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PoliticasPage = /** @class */ (function () {
    function PoliticasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PoliticasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PoliticasPage');
    };
    PoliticasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-politicas',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\politicas\politicas.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>Políticas de privacidad</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content padding>\n<p>Eligibilidad. La información que puede ser almacenada, accesada, visualidada, comentada, valorizada en ADMYO, se refiere exclusivamente a personas morales, negocios mercantiles, incluyendo personas físicas con actividad empresarial, prestadores de servicios y/o profesionistas, por lo oque no aparecerá, ni se utilizará ningún dato de persona física identificada o identificable referente a sus datos personales, incluyendo los sensibles, ya que sólo se trata de realizar valorizaciones respecto a la calidad de los productos y servicios de tales entidades.</p>\n<p>Objeto. El USUARIO acepta que ADMYO almacene los comentarios y valorizaciones que usted envíe a nuestro Sitio o a través de él. También usaremos sus comentarios para mejorar la funcionalidad y calidad de ADMYO. Asimismo para hacer copias de seguridad para nuestros sistemas, permitir la recuperación de la información en casos de desastre y cumplir con cualesquiera obligaciones legales.</p>\n<p>Registro. Al ingresar en ADMYO usted se deberá registrar proporcionando los datos solicitados, para efectos de identificación y envío de correos electrónicos.</p>\n<p>Actividad. Es posible que recopilemos y almacenemos información relacionada con usted y su uso de ADMYO, como su tipo de navegador, dirección de IP, identificador único de dispositivo, números de teléfono y nombres de las empresas que usted llame a través de ADMYO, URL solicitados, URL remitente, idioma del navegador, las páginas que mira y la fecha y hora de su visita.</p>\n<p> Cookies. Es posible que usemos cookies, contadores de visitantes, objetos compartidos localmente y tecnología similar en relación con su uso de ADMYO. Las cookies pueden tener identificadores y residir entre otros lugares, en su equipo, en correos electrónicos que le enviemos y en nuestras páginas web. Las cookies puede que transmitan información sobre el USUARIO y su uso de ADMYO, como su tipo de navegador, preferencias de búsqueda, datos relativos a publicidad que le han mostrado o en la que usted ha hecho clic y la fecha y hora de su uso. Puede desactivar algunas cookies (pero no todas) en los ajustes de su navegador o dispositivo, pero el hacerlo puede afectar su capacidad para usar el Sitio. Para aprender cómo gestionar los ajustes de privacidad y almacenamiento para los objetos compartidos localmente en particular, haga clic aquí.</p>\n<p>Investigaciones. Puede que investiguemos y divulguemos su información o sobre el USUARIO si creemos de buena fe que dicha investigación o divulgación es (a) razonablemente necesaria para cumplir con un proceso legal y las instrucciones y resoluciones de aplicación de la Ley, como una orden de registro, citación, estatuto, procedimiento judicial u otro proceso legal que recibamos; (b) útil para prevenir, investigar, o identificar un posible delito en relación con ADMYO; o (c) proteger nuestros derechos, reputación, propiedad, o la de nuestros usuarios, afiliados o el público.</p>\n<p>Seguridad. ADMYO sigue estándares generalmente aceptados en el sector para proteger la información que nos envíen, tanto durante la transmisión como una vez recibida. Sin embargo, ningún método de transmisión por internet o por dispositivo móvil, o método de almacenamiento electrónico es seguro 100%. Por lo tanto, aunque nos esforzamos para usar medios aceptables comercialmente para proteger su información, ADMYO no puede garantizar su seguridad absoluta.</p>\n<p>Usted acepta que ADMYO tiene el derecho de recopilar y tratar información, de conformidad con lo previsto en los siguientes puntos:</p>\n<ul>\n  <li>ADMYO recopila información del uso de la plataforma por parte de los USUARIOS;</li>\n  <li>ADMYO recopila información de las valoraciones realizadas por parte de los USUARIOS;</li>\n  <li>ADMYO publica de forma agregada y desvinculante esta información para el uso de la misma por parte de terceros;</li>\n  <li>salvo ciertos campos obligatorios, el usuario tiene la opción de que sus datos de contacto no sean públicos;</li>\n  <li>la información recopilada para la resolución de conflictos será almacenada por ADMYO hasta el momento que ambas partes quieran remover este contenido del portal;</li>\n  <li>la información de los USUARIOS será privada y confidencial, salvo interés manifiesto por parte del USUARIO de dar acceso al mismo a socios de ADMYO;</li>\n  <li>se permitirá acceso a la información por parte de las autoridades pertinentes en caso de auditorias o juicios;</li>\n  <li>contamos con una serie de medidas para asegurar que su información está protegida frente al acceso no autorizado. Por ejemplo: le solicitamos a usted utilizar una contraseña sólida y única y que no comparta esta información con nadie. Además, utilizamos transmisiones encriptadas para limitar el acceso a los sistemas en los que se almacena su información personal. También respetamos y cumplimos la legislación Mexicana en materia de Protección de Datos;</li>\n  <li>también podremos almacenar información sobre usted empleando cookies que enviamos a su equipo informático u otro aparato o dispositivo de acceso, a las que podemos acceder cuando usted visite posteriormente los Sitios Web de ADMYO. Hacemos lo anterior para mejorar la experiencia del USUARIO en el sitio web. Si desea borrar las cookies que ya se encuentren en su equipo informático, le rogamos se remita a las instrucciones de su software o directorio en el que se almacenan las cookies. Rogamos tenga en cuenta que, al borrar nuestras cookies o al inutilizar futuras cookies es posible que no pueda usted acceder a determinadas áreas o prestaciones de nuestro sitio; </li>\n  <li>En caso de que tenga cualquier pregunta, duda o sugerencia sobre cómo podemos mejorar nuestra política de privacidad, le rogamos nos lo haga saber enviando un correo electrónico a la siguiente dirección: support@admyo.com.</li>\n</ul>\n<p>El presente contrato se regirá e interpretará con arreglo a la Legislación Mexicana. Toda controversia, disputa o reclamación que surja en relación con el presente contrato y de toda enmienda al mismo incluyendo, sin limitación, su formación, validez, obligatoriedad, interpretación, ejecución, incumplimiento o resolución, así como las reclamaciones extra-contractuales, se someterá a los juzgados o tribunales de la Ciudad de México, D. F., México</p>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\politicas\politicas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PoliticasPage);
    return PoliticasPage;
}());

//# sourceMappingURL=politicas.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperacontraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the RecuperacontraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecuperacontraPage = /** @class */ (function () {
    function RecuperacontraPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RecuperacontraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecuperacontraPage');
    };
    RecuperacontraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recuperacontra',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\recuperacontra\recuperacontra.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Recuperación de Contraseña</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <span class="text-p" text-justify>Para recuperar tu contraseña ingresa la dirección del correo electrónico con el que estas registrado, y automaticamente te llegará a tu búzon de entrada las instrcciones para recuperar la constraseña.</span>\n  <ion-list class="m-t-40">\n      <ion-item>\n          <ion-label color="primary" stacked>Correo Electrónico</ion-label>\n          <ion-input type="email" placeholder="correo@qval.com"></ion-input>\n      </ion-item>\n  </ion-list>\n  <button ion-button round  full color="primary">Enviar</button>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\recuperacontra\recuperacontra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RecuperacontraPage);
    return RecuperacontraPage;
}());

//# sourceMappingURL=recuperacontra.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(101);
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
 * Generated class for the QueesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QueesPage = /** @class */ (function () {
    function QueesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QueesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QueesPage');
    };
    QueesPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    QueesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quees',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\quees\quees.html"*/'<!--\n  Generated template for the QueesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Acerca de Qval</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n<ion-content padding>\n    <ion-slides>\n        <ion-slide>\n          <img src="../../assets/imgs/Qval-logo_1024x500.png">\n          <h5 class="text-uppercase m-t-40 subtitle">¿Que es Qval?</h5>\n          <p>\n            <strong>Qval </strong> es la herrramienta móvil que permite a las empresas medir y gestionar cualquier\n            indicador de negocio en tiempo real.\n          </p>\n        </ion-slide>\n        <ion-slide>\n          <img src="../../assets/imgs/beneficiosQV_01.png" alt="">\n          <p>¡Podrás medir cualquier KPI en tiempo real desde cualquier lugar!</p>\n          \n        </ion-slide>\n        <ion-slide>\n            <img src="../../assets/imgs/beneficiosQV_02.png" alt="">\n            <p>¡Incentiva el logor de objetivos integrando otros datos!</p> \n            \n        </ion-slide>\n        <ion-slide>\n            <img src="../../assets/imgs/beneficiosQV_03.png" alt="">\n            <p>GeQval enviará alertas a tus responsables de área si existen desviaciones o respuestas negativas.</p>\n            \n        </ion-slide>\n        <ion-slide>\n            <img src="../../assets/imgs/beneficiosQV_04.png" alt="">\n            <p>Qval se integra con el portal de reputación en indicadores de Admyo.</p>\n        </ion-slide>\n        <ion-slide>\n            <ion-grid>\n                <ion-row>\n                  <ion-col col-12 text-center>\n                      <button ion-button round color="primary" outline (click)="login()">Iniciar Sesión</button>\n                  </ion-col>\n                  <ion-col col-12 text-center>\n                      <button ion-button round color="secondary" outline>Crear Cuenta</button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n        </ion-slide>\n      </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\quees\quees.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], QueesPage);
    return QueesPage;
}());

//# sourceMappingURL=quees.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MicuentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(31);
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
 * Generated class for the MicuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MicuentaPage = /** @class */ (function () {
    function MicuentaPage(Load, http, alertCtrl, navCtrl, navParams) {
        this.Load = Load;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datosusuario = [];
        this.datos = [];
        this.loading = this.Load.create({ content: 'Cargado', });
        this.datos = JSON.parse(localStorage.datosuaurio);
        this.datosusuario = this.datos["datos"];
        this.numero_usuario = this.datosusuario["IDUsuario"];
        this.nombre = this.datosusuario["Nombre"];
        this.apellidos = this.datosusuario["Apellidos"];
        this.correo = this.datosusuario["Correo"];
        this.usuario = this.datosusuario["Usuario"];
        this.puesto = this.datosusuario["Puesto"];
    }
    MicuentaPage.prototype.alertinfo = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['Entiendo']
        });
        alert.present();
    };
    MicuentaPage.prototype.presentPrompt = function (title, place_holder, tipo) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            inputs: [
                {
                    name: "dato",
                    placeholder: place_holder
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Guardar',
                    handler: function (data) {
                        if (tipo == "p") {
                            _this.puesto = data.dato;
                        }
                        else if (tipo == "n") {
                            _this.nombre = data.dato;
                        }
                        else if (tipo == "a") {
                            _this.apellidos = data.dato;
                        }
                        else if (tipo == "ce") {
                            _this.correo = data.dato;
                        }
                        else if (tipo == "u") {
                            _this.usuario = data.dato;
                        }
                        _this.loading.present();
                        _this.http.update_dateuser({ "tipo": tipo, dato: data.dato, "idusuario": _this.numero_usuario })
                            .subscribe(function (resp) {
                            localStorage.removeItem("datosuaurio");
                            localStorage.setItem("datosuaurio", JSON.stringify(resp));
                            _this.loading.dismiss();
                            _this.alertinfo("", "Datos Actualizados...");
                        }, function (err) {
                            _this.loading.dismiss();
                            console.log(err);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MicuentaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MicuentaPage');
    };
    MicuentaPage.prototype.mod_puesto = function () {
        this.presentPrompt("Ingresa nuevo puesto.", "Puesto", "p");
    };
    MicuentaPage.prototype.mod_usuario = function () {
        this.presentPrompt("Ingresa nuevo usuario.", "Usuario", "u");
    };
    MicuentaPage.prototype.mod_correo = function () {
        this.presentPrompt("Ingresa nuevo Correo Electronico.", "Correo Electronico", "ce");
    };
    MicuentaPage.prototype.mod_apellido = function () {
        this.presentPrompt("Ingresa nuevo Apellidos.", "Apellidos", "a");
    };
    MicuentaPage.prototype.mod_nombre = function () {
        this.presentPrompt("Ingresa nuevo Nombre.", "Nombre", "n");
    };
    MicuentaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-micuenta',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\micuenta\micuenta.html"*/'<!--\n  Generated template for the MicuentaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Mi cuenta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n   <ion-list >\n      <ion-item-sliding >\n          <ion-item>\n            <h2>Nombre</h2>\n            <p>{{nombre}}</p>\n            <ion-icon color="alight-gray" item-right name="arrow-back"></ion-icon>\n          </ion-item>\n          <ion-item-options side="right">\n              <button ion-button (click)="mod_nombre()">\n                <ion-icon name="create"></ion-icon>\n                Modificar\n              </button>\n            </ion-item-options>\n        </ion-item-sliding>\n        <ion-item-sliding >\n            <ion-item>\n              <h2>Apellidos</h2>\n              <p>{{apellidos}}</p>\n              <ion-icon color="alight-gray" item-right name="arrow-back"></ion-icon>\n            </ion-item>\n            <ion-item-options side="right">\n                <button ion-button (click)="mod_apellido()">\n                  <ion-icon name="create"></ion-icon>\n                  Modificar\n                </button>\n              </ion-item-options>\n          </ion-item-sliding>\n        <ion-item-sliding >\n            <ion-item>\n              <h2>Correo Electrónico</h2>\n              <p>{{correo}}</p>\n              <ion-icon color="alight-gray" item-right name="arrow-back"></ion-icon>\n            </ion-item>\n            <ion-item-options side="right">\n                <button ion-button (click)="mod_correo()">\n                  <ion-icon name="create"></ion-icon>\n                  Modificar\n                </button>\n              </ion-item-options>\n          </ion-item-sliding>\n          <ion-item-sliding >\n              <ion-item>\n                <h2>Usuario</h2>\n                <p>{{usuario}}</p>\n                <ion-icon color="alight-gray" item-right name="arrow-back"></ion-icon>\n              </ion-item>\n              <ion-item-options side="right">\n                  <button ion-button (click)="mod_usuario()">\n                    <ion-icon name="create"></ion-icon>\n                    Modificar\n                  </button>\n                </ion-item-options>\n            </ion-item-sliding>\n            <ion-item-sliding >\n                <ion-item>\n                  <h2>Puesto</h2>\n                  <p>{{puesto}}</p>\n                  <ion-icon color="alight-gray" item-right name="arrow-back"></ion-icon>\n                </ion-item>\n                <ion-item-options side="right">\n                    <button ion-button (click)="mod_puesto()">\n                      <ion-icon name="create"></ion-icon>\n                      Modificar\n                    </button>\n                  </ion-item-options>\n              </ion-item-sliding>\n   </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\micuenta\micuenta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MicuentaPage);
    return MicuentaPage;
}());

//# sourceMappingURL=micuenta.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyudaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the AyudaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AyudaPage = /** @class */ (function () {
    function AyudaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searc = [
            { titulo: "Iniciar Sesion" }, { titulo: "Realizar Calificación" }, { titulo: "Realizar Calificación" }
        ];
        this.init_item();
    }
    AyudaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AyudaPage');
    };
    AyudaPage.prototype.init_item = function () {
        this.items = this.searc;
    };
    AyudaPage.prototype.getItems = function (ev) {
        this.init_item();
        var val = ev.target.value;
        console.log(val);
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item["titulo"].toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.init_item();
        }
    };
    AyudaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ayuda',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\ayuda\ayuda.html"*/'<!--\n  Generated template for the AyudaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Ayuda</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let item of items">\n        {{ item.titulo }}\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\ayuda\ayuda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AyudaPage);
    return AyudaPage;
}());

//# sourceMappingURL=ayuda.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcercadePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the AcercadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcercadePage = /** @class */ (function () {
    function AcercadePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AcercadePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcercadePage');
    };
    AcercadePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acercade',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\acercade\acercade.html"*/'<!--\n  Generated template for the AcercadePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Acerca de Qval</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n     Version\n      <h6 class="m-t-10 m-l-20 info">2.0.0</h6>\n    </ion-item>\n    <ion-item>\n        Desarrollado por\n         <h6 class="m-t-10 m-l-20 info">InfoAdmyo S.A. de C.V</h6>\n    </ion-item>\n    <ion-item>\n        Aviso de Privacidad\n    </ion-item>\n    <ion-item>\n        Politicas de Uso\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\acercade\acercade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AcercadePage);
    return AcercadePage;
}());

//# sourceMappingURL=acercade.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeguridadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(31);
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
 * Generated class for the SeguridadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SeguridadPage = /** @class */ (function () {
    function SeguridadPage(http, alertCtrl, Load, navCtrl, navParams) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.Load = Load;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datosusuario = [];
        this.datos = [];
        this.loading = this.Load.create({ content: 'Cargado', });
        this.datos = JSON.parse(localStorage.datosuaurio);
        this.datosusuario = this.datos["datos"];
        this.numero_usuario = this.datosusuario["IDUsuario"];
        this.clave1 = "";
        this.clave2 = "";
        this.clave3 = "";
    }
    SeguridadPage.prototype.alertinfo = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['Entiendo']
        });
        alert.present();
    };
    SeguridadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SeguridadPage');
    };
    SeguridadPage.prototype.update_clave = function () {
        var _this = this;
        if (this.clave1 == "") {
            this.alertinfo("", "Ingresa tu contraseña");
        }
        else if (this.clave2 == "") {
            this.alertinfo("", "Ingresa una contraseña");
        }
        else if (this.clave3 == "") {
            this.alertinfo("", "Repite la nueva contraseña");
        }
        else if (this.clave2 != this.clave3) {
            this.alertinfo("", "La nueva contraseña no coincide con repetir contraseña");
        }
        else {
            this.loading.present();
            this.http.update_dateuser({ "tipo": "clave", "clave": this.clave1, "clave2": this.clave2, "idusuario": this.numero_usuario })
                .subscribe(function (resp) {
                _this.loading.dismiss();
                if (resp["pass"] == "0") {
                    _this.alertinfo("", resp["mensaje"]);
                    _this.clave1 = "";
                    _this.clave2 = "";
                    _this.clave3 = "";
                }
                else {
                    _this.alertinfo("", "Para finalizar cierra sesión e ingresa nuevamente.");
                }
                console.log(resp);
            }, function (error) {
                console.log(error);
            });
        }
    };
    SeguridadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-seguridad',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\seguridad\seguridad.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Seguridad</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n \n    Podrás cambiar la contraseña de acceso  a tu cuenta.\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Contraseña Actual</ion-label>\n      <ion-input [(ngModel)]="clave1" type="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Nueva Contraseña</ion-label>\n      <ion-input [(ngModel)]="clave2" type="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Repetir Contraseña</ion-label>\n      <ion-input [(ngModel)]="clave3" type="password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button full color="primary" (click)="update_clave()">Guardar</button>\n  <p>\n    Recuenda que la constraseña debe ser mayor a 7 Digitos, debe contener una mayúscula, un carácter especial (-,/,*,~,+,) y una minúscula.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\seguridad\seguridad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SeguridadPage);
    return SeguridadPage;
}());

//# sourceMappingURL=seguridad.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DgofflinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vrealizadas_vrealizadas__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vrecibidas_vrecibidas__ = __webpack_require__(184);
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
 * Generated class for the DgofflinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DgofflinePage = /** @class */ (function () {
    function DgofflinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tbroorrealizadas = __WEBPACK_IMPORTED_MODULE_3__vrealizadas_vrealizadas__["a" /* VrealizadasPage */];
        this.tbroorrecibidas = __WEBPACK_IMPORTED_MODULE_4__vrecibidas_vrecibidas__["a" /* VrecibidasPage */];
        if (localStorage.offline) {
            console.log(JSON.parse(localStorage.calificaciones));
        }
    }
    DgofflinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DgofflinePage');
    };
    DgofflinePage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    DgofflinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dgoffline',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\dgoffline\dgoffline.html"*/'<!--\n  Generated template for the DgofflinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Modo Offline</ion-title>\n \n  <ion-buttons end>\n      <button ion-button icon-only (click)="home()">\n          <ion-icon name="home"></ion-icon>\n      </button>\n  </ion-buttons>\n </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-tabs>\n    <ion-tab [root]="tbroorrealizadas" tabTitle="Realizadas"></ion-tab>\n    <ion-tab [root]="tbroorrecibidas" tabTitle="Recibidas"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\dgoffline\dgoffline.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DgofflinePage);
    return DgofflinePage;
}());

//# sourceMappingURL=dgoffline.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VrealizadasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the VrealizadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VrealizadasPage = /** @class */ (function () {
    function VrealizadasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calificaciones = [];
        this.lista();
    }
    VrealizadasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VrealizadasPage');
    };
    VrealizadasPage.prototype.obtener_datos = function (num, tipo) {
        var relaciones = [];
        var datos = JSON.parse(localStorage.datosoffline);
        var empresa = [];
        if (tipo == "realiza") {
            relaciones = datos["relaciones"][1]["realiza"];
        }
        else {
            relaciones = datos["relaciones"][0]["recibe"];
        }
        relaciones.forEach(function (element) {
            if (element["IDCliente"] == num) {
                empresa = element;
            }
        });
        return empresa;
    };
    VrealizadasPage.prototype.lista = function () {
        var _this = this;
        if (localStorage.offline) {
            var detalles = JSON.parse(localStorage.calificaciones);
            var datosempresa_1 = [];
            detalles.forEach(function (element) {
                if (element["datos_calificacion"][0]["tipo"] == "realiza") {
                    datosempresa_1 = _this.obtener_datos(element["datos_calificacion"][0]["datos_receptora"]["empresa"], "realiza");
                    _this.calificaciones.push({ Nombre: datosempresa_1["Nombre"] });
                }
            });
        }
    };
    VrealizadasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vrealizadas',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\vrealizadas\vrealizadas.html"*/'<!--\n  Generated template for the VrealizadasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content >\n<ion-list>\n  <ion-item *ngFor="let calificaion of calificaciones">\n    {{calificaion.Nombre}}\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\vrealizadas\vrealizadas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], VrealizadasPage);
    return VrealizadasPage;
}());

//# sourceMappingURL=vrealizadas.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VrecibidasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the VrecibidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VrecibidasPage = /** @class */ (function () {
    function VrecibidasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calificaciones = [];
        this.lista();
    }
    VrecibidasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VrecibidasPage');
    };
    VrecibidasPage.prototype.obtener_datos = function (num, tipo) {
        var relaciones = [];
        var datos = JSON.parse(localStorage.datosoffline);
        var empresa = [];
        if (tipo == "realiza") {
            relaciones = datos["relaciones"][1]["realiza"];
        }
        else {
            relaciones = datos["relaciones"][0]["recibe"];
        }
        relaciones.forEach(function (element) {
            if (element["IDCliente"] == num) {
                empresa = element;
            }
        });
        return empresa;
    };
    VrecibidasPage.prototype.lista = function () {
        var _this = this;
        if (localStorage.offline) {
            var detalles = JSON.parse(localStorage.calificaciones);
            var datosempresa_1 = [];
            detalles.forEach(function (element) {
                if (element["datos_calificacion"][0]["tipo"] == "recibe") {
                    datosempresa_1 = _this.obtener_datos(element["datos_calificacion"][0]["datos_emisor"]["empresa"], "recibe");
                    _this.calificaciones.push({ Nombre: datosempresa_1["Nombre"] });
                }
            });
        }
    };
    VrecibidasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vrecibidas',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\vrecibidas\vrecibidas.html"*/'<!--\n  Generated template for the VrecibidasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content >\n<ion-list>\n  <ion-item *ngFor="let calificaion of calificaciones">\n    {{calificaion.Nombre}}\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\vrecibidas\vrecibidas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], VrecibidasPage);
    return VrecibidasPage;
}());

//# sourceMappingURL=vrecibidas.js.map

/***/ }),

/***/ 195:
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
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acercade/acercade.module": [
		747,
		22
	],
	"../pages/amabascalificaciones/amabascalificaciones.module": [
		746,
		21
	],
	"../pages/ayuda/ayuda.module": [
		749,
		20
	],
	"../pages/chatsoportehome/chatsoportehome.module": [
		748,
		1
	],
	"../pages/cuestionario/cuestionario.module": [
		750,
		19
	],
	"../pages/dgoffline/dgoffline.module": [
		751,
		18
	],
	"../pages/error/error.module": [
		752,
		17
	],
	"../pages/ingpassword/ingpassword.module": [
		753,
		16
	],
	"../pages/login/login.module": [
		755,
		15
	],
	"../pages/menuconfig/menuconfig.module": [
		754,
		14
	],
	"../pages/micuenta/micuenta.module": [
		756,
		13
	],
	"../pages/msjsopporte/msjsopporte.module": [
		760,
		12
	],
	"../pages/politicas/politicas.module": [
		761,
		11
	],
	"../pages/principal/principal.module": [
		757,
		10
	],
	"../pages/quees/quees.module": [
		758,
		9
	],
	"../pages/realizadas/realizadas.module": [
		759,
		0
	],
	"../pages/realizarcalificacion/realizarcalificacion.module": [
		762,
		8
	],
	"../pages/recibircalificacion/recibircalificacion.module": [
		763,
		7
	],
	"../pages/recuperacontra/recuperacontra.module": [
		764,
		6
	],
	"../pages/resultadosbusqueda/resultadosbusqueda.module": [
		765,
		5
	],
	"../pages/seguridad/seguridad.module": [
		768,
		4
	],
	"../pages/vrealizadas/vrealizadas.module": [
		766,
		3
	],
	"../pages/vrecibidas/vrecibidas.module": [
		767,
		2
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
webpackAsyncContext.id = 239;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menuconfig_menuconfig__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resultadosbusqueda_resultadosbusqueda__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__error_error__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cuestionario_cuestionario__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(toastCtrl, barcodeScanner, alertCtrl, formBuilder, http, menuCtrl, navCtrl, navParams) {
        this.toastCtrl = toastCtrl;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datosusuario = [];
        this.datosoffline = [];
        this.datosusuario = JSON.parse(localStorage.getItem("datosuaurio"));
        this.empresa = this.datosusuario["datos"]["IDEmpresa"];
        this.idusuario = this.datosusuario["datos"]["IDUsuario"];
        this.idconfiguracion_usuario = this.datosusuario["datos"]["IDConfig"];
        this.datos = this.formBuilder.group({
            palabra: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]]
        });
        if (localStorage.offline) {
            this.datosoffline = JSON.parse(localStorage.datosoffline);
        }
    }
    PrincipalPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000
        });
        toast.present();
    };
    PrincipalPage.prototype.alertinfo = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['Entiendo']
        });
        alert.present();
    };
    PrincipalPage.prototype.ionViewDidLoad = function () {
    };
    PrincipalPage.prototype.openMenul = function () {
        this.menuCtrl.open();
    };
    PrincipalPage.prototype.muestraconfig = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__menuconfig_menuconfig__["a" /* MenuconfigPage */]);
    };
    PrincipalPage.prototype.buscarrazonsocial = function () {
        var array = { tipo: "realiza", palabra: this.datos.value.palabra };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__resultadosbusqueda_resultadosbusqueda__["a" /* ResultadosbusquedaPage */], array);
    };
    PrincipalPage.prototype.busca_usuario = function (usuario) {
        var _this = this;
        //var cade={"tipo":"realiza","usuario_a_calificar":usuario,"tipo_usuario_calificar":tipo,"empresa":datosusuario.datos.IDEmpresa,"usuario":datosusuario.datos.IDUsuario}
        var cade = { cliente: usuario, empresa: this.empresa, usuario: this.idusuario, idconfiguracion: this.idconfiguracion_usuario };
        this.http.busca_usuario(cade)
            .subscribe(function (pasa) {
            if (pasa["pass"] === 0) {
                _this.presentToast(pasa["mensaje"]);
            }
            else {
                //this.navCtrl.push(ErrorPage,{error:JSON.stringify({"no_pasa":pasa})})
                var datos_receptora = pasa["cliente"];
                var datoscalifica = Array({ tipo: "realiza", datos_receptora: { "empresa": datos_receptora["ID"], "perfil": datos_receptora["TipoE"], "IDPerfil": datos_receptora["conficlie"] }, datos_emisor: { "usuario": _this.idusuario, "empresa": _this.empresa, "IDPerfil": _this.idconfiguracion_usuario, "perfil": "I" } });
                //this.navCtrl.push(ErrorPage,{error:JSON.stringify({"no_pasa":pasa["cuestionario"]})})
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__cuestionario_cuestionario__["a" /* CuestionarioPage */], { datoscalifica: JSON.stringify(datoscalifica), cuestionario: JSON.stringify({ Mensaje: pasa["cuestionario"] }) });
            }
        }, function (error) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__error_error__["a" /* ErrorPage */], { error: JSON.stringify({ "no_pasa": error }) });
            //this.presentToast(JSON.stringify(error));
        });
    };
    PrincipalPage.prototype.offbusca_usuario = function (usuario) {
        var cuestionario;
        var cues = "";
        var datos_receptora = [];
        var dat = usuario.split("|");
        var relaciones = this.datosoffline["relaciones"][1]["realiza"];
        var tipo = this.datosoffline["relaciones"][1]["Tipo"];
        var bandera = false;
        relaciones.forEach(function (elemen) {
            if (elemen["Usuario"] === dat[1]) {
                bandera = true;
                datos_receptora = elemen;
                return;
            }
        });
        if (bandera === false) {
            this.presentToast("Sin relación con este cliente/proveedor");
        }
        else {
            this.datosoffline["cues_realiza"].forEach(function (elemt) {
                if (elemt["PerfilCalificado"] == datos_receptora["IDConfig"] && elemt["TPReceptor"] == tipo) {
                    cues = elemt["Cuestionario"];
                    return false;
                }
            });
            cuestionario = this.obtener_preguntas(cues);
            var datoscalifica = Array({ tipo: "realiza", datos_receptora: { "empresa": datos_receptora["IDCliente"], "perfil": tipo, "IDPerfil": datos_receptora["IDConfig"] }, datos_emisor: { "usuario": this.idusuario, "empresa": this.empresa, "IDPerfil": this.idconfiguracion_usuario, "perfil": "I" } });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__cuestionario_cuestionario__["a" /* CuestionarioPage */], { datoscalifica: JSON.stringify(datoscalifica), cuestionario: JSON.stringify(cuestionario) });
        }
        //this.navCtrl.push(ErrorPage,{error:JSON.stringify(this.datosoffline)})
    };
    PrincipalPage.prototype.scann = function () {
        var _this = this;
        this.barcodeScanner.scan({
            disableSuccessBeep: false,
            showFlipCameraButton: false,
            torchOn: false,
            prompt: "Coloca el QR en el recuadro",
        }).then(function (barcodeData) {
            var resultado = barcodeData.text;
            if (localStorage.offline) {
                _this.offbusca_usuario(resultado);
            }
            else {
                _this.busca_usuario(resultado);
            }
            //this.presentToast(resultado);
        }).catch(function (err) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__error_error__["a" /* ErrorPage */], { error: JSON.stringify(err) });
            //this.presentToast("Error: "+JSON.stringify(err));
        });
    };
    PrincipalPage.prototype.dame_pregunta = function (nomencaltura) {
        var pregunta = "";
        this.datosoffline["preguntas"].forEach(function (element) {
            if (nomencaltura == element["Nomenclatura"]) {
                pregunta = element;
            }
        });
        return pregunta;
    };
    PrincipalPage.prototype.obtener_preguntas = function (cuestionario) {
        var _this = this;
        var cuestionarios = [];
        var nomenclaturas = cuestionario.split(",");
        nomenclaturas.forEach(function (element) {
            var datos = _this.dame_pregunta(element);
            cuestionarios.push({ Forma: datos["Forma"], Pregunta: datos["Pregunta"], Num: datos["IDPregunta"] });
        });
        return cuestionarios;
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\principal\principal.html"*/'<!--\n  Generated template for the PrincipalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-navbar>\n        <ion-buttons float-left>\n            <button ion-button icon-only ion-button (click)="openMenul()">\n                <h5><i class="fas fa-bars"></i></h5>\n            </button>\n        </ion-buttons>\n      <ion-title text-center>\n        Qval\n      </ion-title>\n  \n    <ion-buttons end>\n        <button ion-button icon-only (click)="muestraconfig()">\n          <h5><i class="fas fa-cog"></i></h5>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p text-justify>Para realizar una Calificación rapida busca la Razón Social de tu Cliente y/o Proveedor.</p>\n<form [formGroup]="datos" >\n  <ion-list>\n  <ion-item>\n      <ion-label floating>Buscar Razón Social a calificar</ion-label>\n      <ion-input  formControlName="palabra"  type="text"></ion-input>\n  </ion-item>\n\n  <button (click)="buscarrazonsocial()" ion-button full color="secondary">Buscar</button>\n  \n</ion-list>\n</form>  \n<p class="m-t-60" text-center>Escanea su código QR</p>\n  <button ion-button full color="secondary" (click)=" scann()">Escanear QR</button>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\principal\principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_websocket__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__evironments_environment__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var urlserver = __WEBPACK_IMPORTED_MODULE_3__evironments_environment__["a" /* environment */].wsURL;
var UtilsService = /** @class */ (function () {
    function UtilsService(httpM, http, wsService) {
        this.httpM = httpM;
        this.http = http;
        this.wsService = wsService;
    }
    UtilsService.prototype.usuario_soporte = function () {
        return this.http.get(urlserver + '/usuarios/soporte');
    };
    UtilsService.prototype.mensaje_soporte = function (de, mensaje, quien) {
        var payload = {
            de: de,
            cuerpo: mensaje,
            para: quien
        };
        this.wsService.emit('mensaje-para-soporte', payload);
    };
    UtilsService.prototype.sendMessage = function (mensaje) {
        var payload = {
            de: this.wsService.usuario.nombre,
            cuerpo: mensaje
        };
        this.wsService.emit('mensaje-soporte', payload);
    };
    UtilsService.prototype.getmenssages = function () {
        return this.wsService.listen('mensaje-nuevo');
    };
    UtilsService.prototype.getmessageprivate = function () {
        return this.wsService.listen('mensaje-desdesoporte');
    };
    UtilsService.prototype.getUsuariosActivos = function () {
        return this.wsService.listen('usuarios-activos');
    };
    UtilsService.prototype.emitirUsuariosActivos = function () {
        return this.wsService.emit('obtener-usuarios');
    };
    UtilsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_http_websocket__["a" /* WebsocketProvider */]])
    ], UtilsService);
    return UtilsService;
}());

//# sourceMappingURL=servicio.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpProvider = /** @class */ (function () {
    function HttpProvider(http, _platform) {
        this.http = http;
        this._platform = _platform;
        this.basepath = "/httpapi";
        this.url = 'https://testqval.admyo.com/serverqval/';
        //this.url='http://localhost/appqval/';
        if (this._platform.is("cordova")) {
            this.basepath = "http://cors.api.com";
        }
    }
    HttpProvider.prototype.iniciodesesion = function (datos) {
        return this.http.post(this.url + 'login', JSON.stringify(datos));
    };
    HttpProvider.prototype.buscarrazonsocial = function (palabra) {
        return this.http.post(this.url + 'empresas/buscar', JSON.stringify(palabra));
    };
    HttpProvider.prototype.solicitarcuestionariorealiza = function (datos) {
        return this.http.post(this.url + 'calificaciones/realiza', JSON.stringify(datos));
    };
    //funcion para agregar el cuestionario la servidor ya calificado
    HttpProvider.prototype.addcuestionario = function (datos, cuestioonario) {
        return this.http.post(this.url + 'calificaciones/addcuestioario', { cuestioario: JSON.stringify(cuestioonario), datos: JSON.stringify(datos) });
    };
    HttpProvider.prototype.download_data = function (datosuaurio) {
        return this.http.post(this.url + "welcome/downloaddate", { datos: datosuaurio });
    };
    HttpProvider.prototype.updata = function (calificaciones) {
        return this.http.post(this.url + "welcome/update", { datos: calificaciones });
    };
    HttpProvider.prototype.update_dateuser = function (dato) {
        return this.http.post(this.url + "usuarios/updateinfo", { datos: JSON.stringify(dato) });
    };
    HttpProvider.prototype.busca_usuario = function (usuario) {
        return this.http.post(this.url + "calificaciones/realizaqr", { datos: JSON.stringify(usuario) });
    };
    HttpProvider.prototype.busca_usuario_recibe = function (usuario) {
        return this.http.post(this.url + "calificaciones/recibeapp", { datos: JSON.stringify(usuario) });
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    wsURL: 'http://192.168.0.3:5000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmabascalificacionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal_principal__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__realizarcalificacion_realizarcalificacion__ = __webpack_require__(72);
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
 * Generated class for the AmabascalificacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AmabascalificacionesPage = /** @class */ (function () {
    function AmabascalificacionesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AmabascalificacionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AmabascalificacionesPage');
    };
    AmabascalificacionesPage.prototype.activar_ambas = function () {
        localStorage.setItem("ambas", "true");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__realizarcalificacion_realizarcalificacion__["a" /* RealizarcalificacionPage */]);
    };
    AmabascalificacionesPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__principal_principal__["a" /* PrincipalPage */]);
    };
    AmabascalificacionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-amabascalificaciones',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\amabascalificaciones\amabascalificaciones.html"*/'<!--\n  Generated template for the AmabascalificacionesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Recibir-Realizar</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="home()">\n          <ion-icon name="home"></ion-icon>\n     </button>\n</ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h4>Al activar la opcion Recibir-Realizar Calificaciones</h4>\n  <br>\n    <ul>\n      <li>1.- El usuario del móvil realizará la calificación a otro usario o empresa según sea el caso</li>\n      <li>2.- Al finalizar sera el turno del usario o empresa a la cual se ha calificacdo</li>\n      <li>3.- Cuando finalize todo el proceso la aplicación mostrará un mensaje avisado dico evento</li>\n    </ul>\n   <br>\n  <button ion-button full color="secondary" (click)="activar_ambas()">Empezar</button>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\amabascalificaciones\amabascalificaciones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AmabascalificacionesPage);
    return AmabascalificacionesPage;
}());

//# sourceMappingURL=amabascalificaciones.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(400);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ingpassword_ingpassword__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_politicas_politicas__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_msjsopporte_msjsopporte__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_recuperacontra_recuperacontra__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_principal_principal__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_quees_quees__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_http_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_http_servicio__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_realizarcalificacion_realizarcalificacion__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_recibircalificacion_recibircalificacion__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_amabascalificaciones_amabascalificaciones__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_menuconfig_menuconfig__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_micuenta_micuenta__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_ayuda_ayuda__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_acercade_acercade__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_dgoffline_dgoffline__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_seguridad_seguridad__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_resultadosbusqueda_resultadosbusqueda__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_cuestionario_cuestionario__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_vrealizadas_vrealizadas__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_vrecibidas_vrecibidas__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_barcode_scanner__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_error_error__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__evironments_environment__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_http_websocket__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ngx_socket_io__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var config = { url: __WEBPACK_IMPORTED_MODULE_32__evironments_environment__["a" /* environment */].wsURL, options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ingpassword_ingpassword__["a" /* IngpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_politicas_politicas__["a" /* PoliticasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_msjsopporte_msjsopporte__["a" /* MsjsopportePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_recuperacontra_recuperacontra__["a" /* RecuperacontraPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_quees_quees__["a" /* QueesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_realizarcalificacion_realizarcalificacion__["a" /* RealizarcalificacionPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_recibircalificacion_recibircalificacion__["a" /* RecibircalificacionPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_amabascalificaciones_amabascalificaciones__["a" /* AmabascalificacionesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_menuconfig_menuconfig__["a" /* MenuconfigPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_micuenta_micuenta__["a" /* MicuentaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_ayuda_ayuda__["a" /* AyudaPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_acercade_acercade__["a" /* AcercadePage */], __WEBPACK_IMPORTED_MODULE_24__pages_dgoffline_dgoffline__["a" /* DgofflinePage */], __WEBPACK_IMPORTED_MODULE_25__pages_seguridad_seguridad__["a" /* SeguridadPage */], __WEBPACK_IMPORTED_MODULE_26__pages_resultadosbusqueda_resultadosbusqueda__["a" /* ResultadosbusquedaPage */], __WEBPACK_IMPORTED_MODULE_27__pages_cuestionario_cuestionario__["a" /* CuestionarioPage */], __WEBPACK_IMPORTED_MODULE_29__pages_vrecibidas_vrecibidas__["a" /* VrecibidasPage */], __WEBPACK_IMPORTED_MODULE_28__pages_vrealizadas_vrealizadas__["a" /* VrealizadasPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_error_error__["a" /* ErrorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/amabascalificaciones/amabascalificaciones.module#AmabascalificacionesPageModule', name: 'AmabascalificacionesPage', segment: 'amabascalificaciones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/acercade/acercade.module#AcercadePageModule', name: 'AcercadePage', segment: 'acercade', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatsoportehome/chatsoportehome.module#ChatsoportehomePageModule', name: 'ChatsoportehomePage', segment: 'chatsoportehome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ayuda/ayuda.module#AyudaPageModule', name: 'AyudaPage', segment: 'ayuda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuestionario/cuestionario.module#CuestionarioPageModule', name: 'CuestionarioPage', segment: 'cuestionario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dgoffline/dgoffline.module#DgofflinePageModule', name: 'DgofflinePage', segment: 'dgoffline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/error/error.module#ErrorPageModule', name: 'ErrorPage', segment: 'error', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ingpassword/ingpassword.module#IngpasswordPageModule', name: 'IngpasswordPage', segment: 'ingpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menuconfig/menuconfig.module#MenuconfigPageModule', name: 'MenuconfigPage', segment: 'menuconfig', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/micuenta/micuenta.module#MicuentaPageModule', name: 'MicuentaPage', segment: 'micuenta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quees/quees.module#QueesPageModule', name: 'QueesPage', segment: 'quees', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/realizadas/realizadas.module#RealizadasPageModule', name: 'RealizadasPage', segment: 'realizadas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/msjsopporte/msjsopporte.module#MsjsopportePageModule', name: 'MsjsopportePage', segment: 'msjsopporte', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/politicas/politicas.module#PoliticasPageModule', name: 'PoliticasPage', segment: 'politicas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/realizarcalificacion/realizarcalificacion.module#RealizarcalificacionPageModule', name: 'RealizarcalificacionPage', segment: 'realizarcalificacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recibircalificacion/recibircalificacion.module#RecibircalificacionPageModule', name: 'RecibircalificacionPage', segment: 'recibircalificacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recuperacontra/recuperacontra.module#RecuperacontraPageModule', name: 'RecuperacontraPage', segment: 'recuperacontra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resultadosbusqueda/resultadosbusqueda.module#ResultadosbusquedaPageModule', name: 'ResultadosbusquedaPage', segment: 'resultadosbusqueda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vrealizadas/vrealizadas.module#VrealizadasPageModule', name: 'VrealizadasPage', segment: 'vrealizadas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vrecibidas/vrecibidas.module#VrecibidasPageModule', name: 'VrecibidasPage', segment: 'vrecibidas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seguridad/seguridad.module#SeguridadPageModule', name: 'SeguridadPage', segment: 'seguridad', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_34_ngx_socket_io__["b" /* SocketIoModule */].forRoot(config),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_ingpassword_ingpassword__["a" /* IngpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_politicas_politicas__["a" /* PoliticasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_msjsopporte_msjsopporte__["a" /* MsjsopportePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_recuperacontra_recuperacontra__["a" /* RecuperacontraPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_quees_quees__["a" /* QueesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_realizarcalificacion_realizarcalificacion__["a" /* RealizarcalificacionPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_recibircalificacion_recibircalificacion__["a" /* RecibircalificacionPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_amabascalificaciones_amabascalificaciones__["a" /* AmabascalificacionesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_menuconfig_menuconfig__["a" /* MenuconfigPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_micuenta_micuenta__["a" /* MicuentaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_ayuda_ayuda__["a" /* AyudaPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_acercade_acercade__["a" /* AcercadePage */], __WEBPACK_IMPORTED_MODULE_24__pages_dgoffline_dgoffline__["a" /* DgofflinePage */], __WEBPACK_IMPORTED_MODULE_25__pages_seguridad_seguridad__["a" /* SeguridadPage */], __WEBPACK_IMPORTED_MODULE_26__pages_resultadosbusqueda_resultadosbusqueda__["a" /* ResultadosbusquedaPage */], __WEBPACK_IMPORTED_MODULE_27__pages_cuestionario_cuestionario__["a" /* CuestionarioPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_vrealizadas_vrealizadas__["a" /* VrealizadasPage */], __WEBPACK_IMPORTED_MODULE_29__pages_vrecibidas_vrecibidas__["a" /* VrecibidasPage */], __WEBPACK_IMPORTED_MODULE_31__pages_error_error__["a" /* ErrorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_http_servicio__["a" /* UtilsService */], __WEBPACK_IMPORTED_MODULE_30__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_33__providers_http_websocket__["a" /* WebsocketProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuestionarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__principal_principal__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recibircalificacion_recibircalificacion__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_error__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__classes_cuestionario_lts__ = __webpack_require__(727);
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
 * Generated class for the CuestionarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CuestionarioPage = /** @class */ (function () {
    function CuestionarioPage(alertCtrl, Load, http, formBuilder, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.Load = Load;
        this.http = http;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cuestionario_lista = new __WEBPACK_IMPORTED_MODULE_7__classes_cuestionario_lts__["a" /* CuestionariosList */]();
        this.frmd = [];
        this.confirmedExit = false;
        this.calificaciones = [];
        this.upcuestionario = this.Load.create({ content: 'Subiendo Cuestionario' });
        this.datos = JSON.parse(navParams.get("cuestionario"));
        this.datoscalifica = JSON.parse(navParams.get("datoscalifica"));
        if (localStorage.offline) {
            this.cuestionarios = this.datos;
            if (localStorage.calificaciones) {
                this.calificaciones = JSON.parse(localStorage.calificaciones);
            }
        }
        else {
            this.datos["Mensaje"].forEach(function (pregunta) {
                _this.cuestionario_lista.addcuestionario(pregunta);
            });
            this.cuestionarios = this.cuestionario_lista.getlist();
        }
        var controls = this.cuestionarios.map(function (c) { return new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](false); });
        this.frmcuestionario = this.formBuilder.group({
            orders: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */](controls)
        });
    }
    CuestionarioPage.prototype.alertinfo = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['Entiendo']
        });
        alert.present();
    };
    CuestionarioPage.prototype.ionViewDidLoad = function () {
        //console.log(this.cuestionarios);
    };
    CuestionarioPage.prototype.select_calificar = function () {
        if (localStorage.offline) {
            this.calificar_off();
        }
        else {
            this.calificar();
        }
    };
    CuestionarioPage.prototype.calificar_off = function () {
        var _this = this;
        this.frmcuestionario.value.orders.map(function (val, index) {
            var i = index;
            _this.frmd.push({ pregunata: _this.cuestionarios[i].Num, repuesta: val });
        });
        this.calificaciones.push({ datos_calificacion: this.datoscalifica, cuestionario: this.frmd });
        localStorage.setItem("calificaciones", JSON.stringify(this.calificaciones));
        console.log(localStorage.calificaciones);
        this.alertinfo("Exito!", "Gracias por su Tiempo.");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__principal_principal__["a" /* PrincipalPage */]);
    };
    CuestionarioPage.prototype.calificar = function () {
        var _this = this;
        this.upcuestionario.present();
        this.frmcuestionario.value.orders.map(function (val, index) {
            var i = index;
            _this.frmd.push({ pregunata: _this.cuestionarios[i].Num, repuesta: val });
        });
        //ahora los envio al servidor para ser guardados
        this.http.addcuestionario(this.datoscalifica, this.frmd)
            .subscribe(function (res) {
            if (res["pass"] == 1) {
                _this.upcuestionario.dismiss();
                if (localStorage.ambas) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__recibircalificacion_recibircalificacion__["a" /* RecibircalificacionPage */]);
                    _this.alertinfo("Exito!", "Gracias! transmitir el móvil a su cliente-proveedor");
                }
                else {
                    _this.alertinfo("Exito!", "Gracias por su Tiempo.");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__principal_principal__["a" /* PrincipalPage */]);
                }
            }
        }, function (err) {
            _this.upcuestionario.dismiss();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__error_error__["a" /* ErrorPage */], { error: JSON.stringify(err) });
            //this.alertinfo("Alerta",JSON.stringify(err));
        });
    };
    CuestionarioPage.prototype.convertejson = function (string) {
        console.log(string);
        return JSON.parse(string);
    };
    CuestionarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cuestionario',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\cuestionario\cuestionario.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Cuestionario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-list>\n		<form [formGroup]="frmcuestionario">\n			<ion-item formArrayName="orders" *ngFor="let order of frmcuestionario.controls.orders.controls; let i = index"   >\n				<ion-label *ngIf="cuestionarios[i].Forma==\'DIAS\' || cuestionarios[i].Forma==\'HORAS\' || cuestionarios[i].Forma==\'MINUTOS\' || cuestionarios[i].Forma==\'SEGUNDOS\' || cuestionarios[i].Forma==\'AB\'" floating><p>{{cuestionarios[i].Pregunta}}</p></ion-label>\n				<ion-label *ngIf="cuestionarios[i].Forma==\'SI/NO\' || cuestionarios[i].Forma==\'SI/NO/NA\' || cuestionarios[i].Forma==\'SI/NO/NS\' || cuestionarios[i].Forma==\'ML\' " ><p>{{cuestionarios[i].Pregunta}}</p></ion-label>\n				<ion-label *ngIf="cuestionarios[i].Forma==\'MLC\'" ><p>{{cuestionarios[i].Pregunta}}</p></ion-label>\n\n				<ion-select [formControlName]="i" *ngIf="cuestionarios[i].Forma==\'SI/NO\'"    submitText="Ok" cancelText="Cancelar">\n					<ion-option value="SI">SI</ion-option>\n					<ion-option value="NO">NO</ion-option>\n				</ion-select>\n\n				<ion-select [formControlName]="i" *ngIf="cuestionarios[i].Forma==\'SI/NO/NA\'"  submitText="Ok" cancelText="Cancelar">\n						<ion-option value="SI">SI</ion-option>\n						<ion-option value="NO">NO</ion-option>\n						<ion-option value="NA">No Aplica</ion-option> \n				</ion-select>\n\n				<ion-select [formControlName]="i" *ngIf="cuestionarios[i].Forma==\'SI/NO/NS\'" submitText="Ok" cancelText="Cancelar">\n						<ion-option value="SI">SI</ion-option>\n						<ion-option value="NO">NO</ion-option>\n						<ion-option value="NS">NO Sabe</ion-option> \n				</ion-select>\n\n				<ion-select [formControlName]="i" *ngIf="cuestionarios[i].Forma==\'SI/NO/NA/NS\'" submitText="Ok" cancelText="Cancelar">\n						<ion-option value="SI">SI</ion-option>\n						<ion-option value="NO">NO</ion-option>\n						<ion-option value="NS">NO Sabe</ion-option> \n						<ion-option value="NA">No Aplica</ion-option> \n				</ion-select>\n\n				<ion-select [formControlName]="i" *ngIf="cuestionarios[i].Forma==\'ML\'" submitText="Ok"  cancelText="Cancelar">\n						<ion-option value="{{items}}" *ngFor="let items of cuestionario_lista.getrespuestajson(cuestionarios[i].Num)">{{items}}</ion-option>\n				</ion-select>\n\n				<ion-input [formControlName]="i"  *ngIf="cuestionarios[i].Forma==\'DIAS\' || cuestionarios[i].Forma==\'HORAS\' || cuestionarios[i].Forma==\'MINUTOS\' || cuestionarios[i].Forma==\'SEGUNDOS\'" value=""  placeholder="0" type="number"  ></ion-input>\n\n				<ion-input [formControlName]="i"  *ngIf="cuestionarios[i].Forma==\'AB\'" value="" type="text"  placeholder=""></ion-input>\n				\n				<ion-select [formControlName]="i"  *ngIf="cuestionarios[i].Forma==\'MLC\'"  multiple="true">\n					<ion-option [value]=\'items\' selected="false" *ngFor="let items of cuestionario_lista.getrespuestajson(cuestionarios[i].Num)">{{items}}</ion-option>\n				</ion-select>\n\n						\n			</ion-item>\n		</form>\n	</ion-list>\n<div padding>\n	<button ion-button (click)="select_calificar()" full>Calificar</button>\n</div>\n	   	\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\cuestionario\cuestionario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CuestionarioPage);
    return CuestionarioPage;
}());

//# sourceMappingURL=cuestionario.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the ErrorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ErrorPage = /** @class */ (function () {
    function ErrorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.texto = navParams.get("error");
    }
    ErrorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ErrorPage');
    };
    ErrorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-error',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\error\error.html"*/'<!--\n  Generated template for the ErrorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>error</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n{{texto}}\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\error\error.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ErrorPage);
    return ErrorPage;
}());

//# sourceMappingURL=error.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosbusquedaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__principal_principal__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cuestionario_cuestionario__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__realizarcalificacion_realizarcalificacion__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recibircalificacion_recibircalificacion__ = __webpack_require__(71);
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
 * Generated class for the ResultadosbusquedaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultadosbusquedaPage = /** @class */ (function () {
    function ResultadosbusquedaPage(Load, http, alertCtrl, navCtrl, navParams) {
        this.Load = Load;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.resultados = [];
        this.datosusuario = [];
        this.loading = this.Load.create({ content: 'Cargado', });
        this.loading_preparando = this.Load.create({ content: 'Solicitando Preguntas', });
        this.palabra = navParams.get("palabra");
        this.tipo = navParams.get("tipo");
        if (localStorage.offline) {
            this.datosoffline = JSON.parse(localStorage.datosoffline);
        }
        this.decicion_off();
        this.datosusuario = JSON.parse(localStorage.datosuaurio);
    }
    ResultadosbusquedaPage.prototype.alertinfo = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['Entiendo']
        });
        alert.present();
    };
    ResultadosbusquedaPage.prototype.decicion_off = function () {
        if (localStorage.offline) {
            this.busqueda_off();
        }
        else {
            this.listaresultados();
        }
    };
    ResultadosbusquedaPage.prototype.busqueda_off = function () {
        var _this = this;
        var datos = JSON.parse(localStorage.datosoffline);
        if (this.tipo == "realiza") {
            datos["relaciones"][1]["realiza"].forEach(function (cliente) {
                var nombre = cliente["Nombre"].toUpperCase();
                var palabra = _this.palabra.toUpperCase();
                if (nombre.includes(palabra) == true) {
                    _this.resultados.push({ Num: cliente["IDCliente"], numconfig: cliente["IDConfig"], config: datos["relaciones"][1]["Tipo"], Nombre: cliente["Nombre"] });
                }
            });
        }
        else if (this.tipo == "recibe") {
            datos["relaciones"][0]["recibe"].forEach(function (cliente) {
                var nombre = cliente["Nombre"].toUpperCase();
                var palabra = _this.palabra.toUpperCase();
                if (nombre.includes(palabra) == true) {
                    _this.resultados.push({ Num: cliente["IDCliente"], numconfig: cliente["IDConfig"], config: datos["relaciones"][0]["Tipo"], Nombre: cliente["Nombre"] });
                }
            });
        }
        //console.log( this.resultados);
    };
    ResultadosbusquedaPage.prototype.listaresultados = function () {
        var _this = this;
        this.loading.present();
        var datosusuario = JSON.parse(localStorage.getItem("datosuaurio"));
        var palabra = Array({ "tipo": this.tipo, "palabra": this.palabra, "empresa": datosusuario.datos.IDEmpresa, "usuario": datosusuario.datos.IDUsuario });
        console.log(palabra);
        this.http.buscarrazonsocial(palabra)
            .subscribe(function (res) {
            _this.loading.dismiss();
            _this.resultados = res["empresas"]["Res"];
            if (_this.resultados.length == 0) {
                if (_this.tipo == "recibe") {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__recibircalificacion_recibircalificacion__["a" /* RecibircalificacionPage */]);
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__realizarcalificacion_realizarcalificacion__["a" /* RealizarcalificacionPage */]);
                }
                _this.alertinfo("Alerta", "Sin resultados");
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
            //this.alertinfo("Alerta",err);
        });
    };
    ResultadosbusquedaPage.prototype.ionViewDidLoad = function () {
    };
    ResultadosbusquedaPage.prototype.selecrealiza_recibe = function (num, config, numconfig) {
        console.log(this.tipo);
        if (localStorage.offline) {
            if (this.tipo == "recibe") {
                this.recibo_calificacion_off(num, config, numconfig);
            }
            if (this.tipo == "realiza") {
                this.calificar_off(num, config, numconfig);
            }
        }
        else {
            if (this.tipo == "recibe") {
                this.recibo_calificacion(num, config, numconfig);
            }
            if (this.tipo == "realiza") {
                this.calificar(num, config, numconfig);
            }
        }
    };
    ResultadosbusquedaPage.prototype.recibo_calificacion_off = function (num, config, numconfig) {
        var usuario = this.datosusuario.datos.IDUsuario;
        var empresa = this.datosusuario.datos.IDEmpresa;
        var configemiso = this.datosusuario.datos.IDConfig;
        var cues;
        this.datosoffline["cues_recibe"].forEach(function (elemt) {
            if (elemt["PerfilCalifica"] == numconfig && elemt["TPEmisor"] == config) {
                cues = elemt["Cuestionario"];
                return false;
            }
        });
        var cuestionario = this.obtener_preguntas(cues);
        console.log(cuestionario);
        var datoscalifica = Array({ tipo: "recibe", datos_emisor: { "empresa": num, "perfil": config, "IDPerfil": numconfig }, datos_receptora: { "usuario": usuario, "empresa": empresa, "IDPerfil": configemiso, "perfil": "I" } });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cuestionario_cuestionario__["a" /* CuestionarioPage */], { datoscalifica: JSON.stringify(datoscalifica), cuestionario: JSON.stringify(cuestionario) });
    };
    ResultadosbusquedaPage.prototype.calificar_off = function (num, config, numconfig) {
        var usuario = this.datosusuario.datos.IDUsuario;
        var empresa = this.datosusuario.datos.IDEmpresa;
        var configemiso = this.datosusuario.datos.IDConfig;
        var cues;
        this.datosoffline["cues_realiza"].forEach(function (elemt) {
            if (elemt["PerfilCalificado"] == numconfig && elemt["TPReceptor"] == config) {
                cues = elemt["Cuestionario"];
                return false;
            }
        });
        var cuestionario = this.obtener_preguntas(cues);
        var datoscalifica = Array({ tipo: "realiza", datos_receptora: { "empresa": num, "perfil": config, "IDPerfil": numconfig }, datos_emisor: { "usuario": usuario, "empresa": empresa, "IDPerfil": configemiso, "perfil": "I" } });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cuestionario_cuestionario__["a" /* CuestionarioPage */], { datoscalifica: JSON.stringify(datoscalifica), cuestionario: JSON.stringify(cuestionario) });
    };
    ResultadosbusquedaPage.prototype.recibo_calificacion = function (num, config, numconfig) {
        var _this = this;
        if (numconfig === "0") {
            this.alertinfo("Alerta", "Esta empresa no tiene un grupo asignado.");
        }
        else {
            //this.loading_preparando.present();
            var usuario = this.datosusuario.datos.IDUsuario;
            var empresa = this.datosusuario.datos.IDEmpresa;
            var configemiso = this.datosusuario.datos.IDConfig;
            var datos_1 = Array({ tipo: "recibe", datos_emisor: { "empresa": num, "perfil": config, "IDPerfil": numconfig }, datos_receptora: { "usuario": usuario, "empresa": empresa, "IDPerfil": configemiso, "perfil": "I" } });
            this.http.solicitarcuestionariorealiza(datos_1)
                .subscribe(function (res) {
                localStorage.removeItem("ambas");
                // this.loading_preparando.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cuestionario_cuestionario__["a" /* CuestionarioPage */], { cuestionario: JSON.stringify(res), datoscalifica: JSON.stringify(datos_1) });
            }, function (err) {
                console.log(err);
            });
        }
        console.log(num, config, numconfig);
    };
    ResultadosbusquedaPage.prototype.calificar = function (num, config, numconfig) {
        var _this = this;
        if (numconfig === "0") {
            this.alertinfo("Alerta", "Esta empresa no tiene un grupo asignado.");
        }
        else {
            this.loading_preparando.present();
            var usuario = this.datosusuario.datos.IDUsuario;
            var empresa = this.datosusuario.datos.IDEmpresa;
            var configemiso = this.datosusuario.datos.IDConfig;
            var datos_2 = Array({ tipo: "realiza", datos_receptora: { "empresa": num, "perfil": config, "IDPerfil": numconfig }, datos_emisor: { "usuario": usuario, "empresa": empresa, "IDPerfil": configemiso, "perfil": "I" } });
            this.http.solicitarcuestionariorealiza(datos_2)
                .subscribe(function (res) {
                _this.loading_preparando.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cuestionario_cuestionario__["a" /* CuestionarioPage */], { cuestionario: JSON.stringify(res), datoscalifica: JSON.stringify(datos_2) });
            }, function (err) {
                console.log(err);
            });
        }
    };
    ResultadosbusquedaPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__principal_principal__["a" /* PrincipalPage */]);
    };
    ResultadosbusquedaPage.prototype.dame_pregunta = function (nomencaltura) {
        var pregunta = "";
        this.datosoffline["preguntas"].forEach(function (element) {
            if (nomencaltura == element["Nomenclatura"]) {
                pregunta = element;
            }
        });
        return pregunta;
    };
    ResultadosbusquedaPage.prototype.obtener_preguntas = function (cuestionario) {
        var _this = this;
        var cuestionarios = [];
        var nomenclaturas = cuestionario.split(",");
        nomenclaturas.forEach(function (element) {
            var datos = _this.dame_pregunta(element);
            cuestionarios.push({ Forma: datos["Forma"], Pregunta: datos["Pregunta"], Num: datos["IDPregunta"] });
        });
        return cuestionarios;
    };
    ResultadosbusquedaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resultadosbusqueda',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\resultadosbusqueda\resultadosbusqueda.html"*/'<!--\n  Generated template for the ResultadosbusquedaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Resultados</ion-title>\n \n   <ion-buttons end>\n          <button ion-button icon-only (click)="home()">\n              <ion-icon name="home"></ion-icon>\n          </button>\n        </ion-buttons>\n   </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n<ion-list>\n  <button ion-item *ngFor="let resultado of resultados" (click)="selecrealiza_recibe(resultado.Num,resultado.config,resultado.numconfig)">\n     <h2>{{resultado.Nombre}}</h2>\n  </button>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\resultadosbusqueda\resultadosbusqueda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ResultadosbusquedaPage);
    return ResultadosbusquedaPage;
}());

//# sourceMappingURL=resultadosbusqueda.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecibircalificacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__principal_principal__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resultadosbusqueda_resultadosbusqueda__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_error__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cuestionario_cuestionario__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_http_http__ = __webpack_require__(31);
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
 * Generated class for the RecibircalificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecibircalificacionPage = /** @class */ (function () {
    function RecibircalificacionPage(http, toastCtrl, barcodeScanner, alertCtrl, formBuilder, navCtrl, navParams) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datosusuario = [];
        this.datosoffline = [];
        this.datosusuario = JSON.parse(localStorage.getItem("datosuaurio"));
        this.empresa = this.datosusuario["datos"]["IDEmpresa"];
        this.idusuario = this.datosusuario["datos"]["IDUsuario"];
        this.idconfiguracion_usuario = this.datosusuario["datos"]["IDConfig"];
        this.datos = this.formBuilder.group({
            palabra: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]]
        });
        if (localStorage.offline) {
            this.datosoffline = JSON.parse(localStorage.datosoffline);
        }
    }
    RecibircalificacionPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000
        });
        toast.present();
    };
    RecibircalificacionPage.prototype.alertinfo = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['Entiendo']
        });
        alert.present();
    };
    RecibircalificacionPage.prototype.buscarrazonsocial = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__resultadosbusqueda_resultadosbusqueda__["a" /* ResultadosbusquedaPage */], { palabra: this.datos.value.palabra, tipo: "recibe" });
    };
    RecibircalificacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecibircalificacionPage');
    };
    RecibircalificacionPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__principal_principal__["a" /* PrincipalPage */]);
    };
    RecibircalificacionPage.prototype.scann = function () {
        var _this = this;
        this.barcodeScanner.scan({
            disableSuccessBeep: false,
            showFlipCameraButton: false,
            torchOn: false,
            prompt: "Coloca el QR en el recuadro",
        }).then(function (barcodeData) {
            var resultado = barcodeData.text;
            var datos = resultado.split("|");
            if (localStorage.offline) {
                _this.offbusca_usuario(resultado);
            }
            else {
                _this.busca_usuario(resultado);
            }
            //this.presentToast(resultado);
        }).catch(function (err) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__error_error__["a" /* ErrorPage */], { error: JSON.stringify(err) });
            //this.presentToast("Error: "+JSON.stringify(err));
        });
    };
    RecibircalificacionPage.prototype.busca_usuario = function (usuario) {
        var _this = this;
        var datosusuario = JSON.parse(localStorage.getItem("datosuaurio"));
        //var cade={"tipo":"realiza","usuario_a_calificar":usuario,"tipo_usuario_calificar":tipo,"empresa":datosusuario.datos.IDEmpresa,"usuario":datosusuario.datos.IDUsuario}
        var cade = { cliente: usuario, empresa: this.empresa, usuario: this.idusuario, idconfiguracion: this.idconfiguracion_usuario };
        this.http.busca_usuario_recibe(cade)
            .subscribe(function (pasa) {
            if (pasa["pass"] === 0) {
                _this.presentToast(pasa["mensaje"]);
            }
            else {
                //this.navCtrl.push(ErrorPage,{error:JSON.stringify({"no_pasa":pasa})})
                var datos_receptora = pasa["cliente"];
                var datoscalifica = Array({ tipo: "recibe", datos_emisor: { "empresa": datos_receptora["ID"], "perfil": datos_receptora["TipoE"], "IDPerfil": datos_receptora["conficlie"] }, datos_receptora: { "usuario": _this.idusuario, "empresa": _this.empresa, "IDPerfil": _this.idconfiguracion_usuario, "perfil": "I" } });
                //this.navCtrl.push(ErrorPage,{error:JSON.stringify({"no_pasa":pasa["cuestionario"]})})
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cuestionario_cuestionario__["a" /* CuestionarioPage */], { datoscalifica: JSON.stringify(datoscalifica), cuestionario: JSON.stringify({ Mensaje: pasa["cuestionario"] }) });
            }
        }, function (error) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__error_error__["a" /* ErrorPage */], { error: JSON.stringify({ "no_pasa": error }) });
            //this.presentToast(JSON.stringify(error));
        });
    };
    RecibircalificacionPage.prototype.offbusca_usuario = function (usuario) {
        var cuestionario;
        var cues = "";
        var datos_receptora = [];
        var dat = usuario.split("|");
        var relaciones = this.datosoffline["relaciones"][1]["realiza"];
        var tipo = this.datosoffline["relaciones"][0]["Tipo"];
        var bandera = false;
        relaciones.forEach(function (elemen) {
            if (elemen["Usuario"] === dat[1]) {
                bandera = true;
                datos_receptora = elemen;
                return;
            }
        });
        if (bandera === false) {
            this.presentToast("Sin relación con este cliente/proveedor");
        }
        else {
            this.datosoffline["cues_recibe"].forEach(function (elemt) {
                if (elemt["PerfilCalifica"] == datos_receptora["IDConfig"] && elemt["TPEmisor"] == tipo) {
                    cues = elemt["Cuestionario"];
                    return false;
                }
            });
            cuestionario = this.obtener_preguntas(cues);
            var datoscalifica = Array({ tipo: "recibe", datos_emisor: { "empresa": datos_receptora["IDCliente"], "perfil": tipo, "IDPerfil": datos_receptora["IDConfig"] }, datos_receptora: { "usuario": this.idusuario, "empresa": this.empresa, "IDPerfil": this.idconfiguracion_usuario, "perfil": "I" } });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cuestionario_cuestionario__["a" /* CuestionarioPage */], { datoscalifica: JSON.stringify(datoscalifica), cuestionario: JSON.stringify(cuestionario) });
        }
        //this.navCtrl.push(ErrorPage,{error:JSON.stringify(this.datosoffline)})
    };
    RecibircalificacionPage.prototype.dame_pregunta = function (nomencaltura) {
        var pregunta = "";
        this.datosoffline["preguntas"].forEach(function (element) {
            if (nomencaltura == element["Nomenclatura"]) {
                pregunta = element;
            }
        });
        return pregunta;
    };
    RecibircalificacionPage.prototype.obtener_preguntas = function (cuestionario) {
        var _this = this;
        var cuestionarios = [];
        var nomenclaturas = cuestionario.split(",");
        nomenclaturas.forEach(function (element) {
            var datos = _this.dame_pregunta(element);
            cuestionarios.push({ Forma: datos["Forma"], Pregunta: datos["Pregunta"], Num: datos["IDPregunta"] });
        });
        return cuestionarios;
    };
    RecibircalificacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recibircalificacion',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\recibircalificacion\recibircalificacion.html"*/'<!--\n  Generated template for the RecibircalificacionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Recibir Calificación</ion-title>\n  \n		<ion-buttons end>\n		          <button ion-button icon-only (click)="home()">\n		              <ion-icon name="home"></ion-icon>\n		         </button>\n        </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p text-justify>Para recibir una calificación, busca la Razón Social de tu Cliente y/o Proveedor.</p>\n<form [formGroup]="datos" >\n  <ion-list>\n  <ion-item>\n      <ion-label floating>Buscar Razón Social</ion-label>\n      <ion-input  formControlName="palabra"  type="text"></ion-input>\n  </ion-item>\n\n  <button (click)="buscarrazonsocial()" ion-button full color="secondary">Buscar</button>\n  \n</ion-list>\n</form>  \n<p class="m-t-60" text-center>Escanea su código QR</p>\n  <button ion-button full color="secondary" (click)="scann()">Escanear QR</button>\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\recibircalificacion\recibircalificacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RecibircalificacionPage);
    return RecibircalificacionPage;
}());

//# sourceMappingURL=recibircalificacion.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealizarcalificacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resultadosbusqueda_resultadosbusqueda__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__principal_principal__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_error__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cuestionario_cuestionario__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_http_http__ = __webpack_require__(31);
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
 * Generated class for the RealizarcalificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RealizarcalificacionPage = /** @class */ (function () {
    function RealizarcalificacionPage(http, toastCtrl, barcodeScanner, alertCtrl, formBuilder, navCtrl, navParams) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datosusuario = [];
        this.datosoffline = [];
        this.datosusuario = JSON.parse(localStorage.getItem("datosuaurio"));
        this.datosusuario = JSON.parse(localStorage.getItem("datosuaurio"));
        this.empresa = this.datosusuario["datos"]["IDEmpresa"];
        this.idusuario = this.datosusuario["datos"]["IDUsuario"];
        this.idconfiguracion_usuario = this.datosusuario["datos"]["IDConfig"];
        this.datos = this.formBuilder.group({
            palabra: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]]
        });
        if (localStorage.offline) {
            this.datosoffline = JSON.parse(localStorage.datosoffline);
        }
    }
    RealizarcalificacionPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000
        });
        toast.present();
    };
    RealizarcalificacionPage.prototype.alertinfo = function (titulo, texto) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: texto,
            buttons: ['Entiendo']
        });
        alert.present();
    };
    RealizarcalificacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RealizarcalificacionPage');
    };
    RealizarcalificacionPage.prototype.buscarrazonsocial = function () {
        var array = { "tipo": "realiza", palabra: this.datos.value.palabra };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__resultadosbusqueda_resultadosbusqueda__["a" /* ResultadosbusquedaPage */], array);
    };
    RealizarcalificacionPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__principal_principal__["a" /* PrincipalPage */]);
    };
    RealizarcalificacionPage.prototype.scann = function () {
        var _this = this;
        this.barcodeScanner.scan({
            disableSuccessBeep: false,
            showFlipCameraButton: false,
            torchOn: false,
            prompt: "Coloca el QR en el recuadro",
        }).then(function (barcodeData) {
            var resultado = barcodeData.text;
            if (localStorage.offline) {
                _this.offbusca_usuario(resultado);
            }
            else {
                _this.busca_usuario(resultado);
            }
            //this.presentToast(resultado);
        }).catch(function (err) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__error_error__["a" /* ErrorPage */], { error: JSON.stringify(err) });
            //this.presentToast("Error: "+JSON.stringify(err));
        });
    };
    RealizarcalificacionPage.prototype.offbusca_usuario = function (usuario) {
        var cuestionario;
        var cues = "";
        var datos_receptora = [];
        var dat = usuario.split("|");
        var relaciones = this.datosoffline["relaciones"][1]["realiza"];
        var tipo = this.datosoffline["relaciones"][1]["Tipo"];
        var bandera = false;
        relaciones.forEach(function (elemen) {
            if (elemen["Usuario"] === dat[1]) {
                bandera = true;
                datos_receptora = elemen;
                return;
            }
        });
        if (bandera === false) {
            this.presentToast("Sin relación con este cliente/proveedor");
        }
        else {
            this.datosoffline["cues_realiza"].forEach(function (elemt) {
                if (elemt["PerfilCalificado"] == datos_receptora["IDConfig"] && elemt["TPReceptor"] == tipo) {
                    cues = elemt["Cuestionario"];
                    return false;
                }
            });
            cuestionario = this.obtener_preguntas(cues);
            var datoscalifica = Array({ tipo: "realiza", datos_receptora: { "empresa": datos_receptora["IDCliente"], "perfil": tipo, "IDPerfil": datos_receptora["IDConfig"] }, datos_emisor: { "usuario": this.idusuario, "empresa": this.empresa, "IDPerfil": this.idconfiguracion_usuario, "perfil": "I" } });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cuestionario_cuestionario__["a" /* CuestionarioPage */], { datoscalifica: JSON.stringify(datoscalifica), cuestionario: JSON.stringify(cuestionario) });
        }
        //this.navCtrl.push(ErrorPage,{error:JSON.stringify(this.datosoffline)})
    };
    RealizarcalificacionPage.prototype.dame_pregunta = function (nomencaltura) {
        var pregunta = "";
        this.datosoffline["preguntas"].forEach(function (element) {
            if (nomencaltura == element["Nomenclatura"]) {
                pregunta = element;
            }
        });
        return pregunta;
    };
    RealizarcalificacionPage.prototype.obtener_preguntas = function (cuestionario) {
        var _this = this;
        var cuestionarios = [];
        var nomenclaturas = cuestionario.split(",");
        nomenclaturas.forEach(function (element) {
            var datos = _this.dame_pregunta(element);
            cuestionarios.push({ Forma: datos["Forma"], Pregunta: datos["Pregunta"], Num: datos["IDPregunta"] });
        });
        return cuestionarios;
    };
    RealizarcalificacionPage.prototype.busca_usuario = function (usuario) {
        var _this = this;
        var datosusuario = JSON.parse(localStorage.getItem("datosuaurio"));
        //var cade={"tipo":"realiza","usuario_a_calificar":usuario,"tipo_usuario_calificar":tipo,"empresa":datosusuario.datos.IDEmpresa,"usuario":datosusuario.datos.IDUsuario}
        var cade = { cliente: usuario, empresa: this.empresa, usuario: this.idusuario, idconfiguracion: this.idconfiguracion_usuario };
        this.http.busca_usuario(cade)
            .subscribe(function (pasa) {
            if (pasa["pass"] === 0) {
                _this.presentToast(pasa["mensaje"]);
            }
            else {
                //this.navCtrl.push(ErrorPage,{error:JSON.stringify({"no_pasa":pasa})})
                var datos_receptora = pasa["cliente"];
                var datoscalifica = Array({ tipo: "realiza", datos_receptora: { "empresa": datos_receptora["ID"], "perfil": datos_receptora["TipoE"], "IDPerfil": datos_receptora["conficlie"] }, datos_emisor: { "usuario": _this.idusuario, "empresa": _this.empresa, "IDPerfil": _this.idconfiguracion_usuario, "perfil": "I" } });
                //this.navCtrl.push(ErrorPage,{error:JSON.stringify({"no_pasa":pasa["cuestionario"]})})
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cuestionario_cuestionario__["a" /* CuestionarioPage */], { datoscalifica: JSON.stringify(datoscalifica), cuestionario: JSON.stringify({ Mensaje: pasa["cuestionario"] }) });
            }
        }, function (error) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__error_error__["a" /* ErrorPage */], { error: JSON.stringify({ "no_pasa": error }) });
            //this.presentToast(JSON.stringify(error));
        });
    };
    RealizarcalificacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-realizarcalificacion',template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\realizarcalificacion\realizarcalificacion.html"*/'<!--\n  Generated template for the RealizarcalificacionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Realizar Calificación</ion-title>\n  \n		<ion-buttons end>\n		          <button ion-button icon-only (click)="home()">\n		              <ion-icon name="home"></ion-icon>\n		         </button>\n        </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p text-justify>Para realizar una Calificación rapida busca la Razón Social de tu Cliente y/o Proveedor.</p>\n<form [formGroup]="datos" >\n  <ion-list>\n  <ion-item>\n      <ion-label floating>Buscar Razón Social a calificar</ion-label>\n      <ion-input  formControlName="palabra"  type="text"></ion-input>\n  </ion-item>\n\n  <button (click)="buscarrazonsocial()" ion-button full color="secondary">Buscar</button>\n  \n</ion-list>\n</form>  \n<p class="m-t-60" text-center>Escanea su código QR</p>\n  <button ion-button full color="secondary" (click)="scann()">Escanear QR</button>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\pages\realizarcalificacion\realizarcalificacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RealizarcalificacionPage);
    return RealizarcalificacionPage;
}());

//# sourceMappingURL=realizarcalificacion.js.map

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(nombre, empresa) {
        this.nombre = nombre;
        this.empresa = empresa;
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuestionariosList; });
var CuestionariosList = /** @class */ (function () {
    function CuestionariosList() {
        this.lista = [];
    }
    CuestionariosList.prototype.getlist = function () {
        return this.lista;
    };
    CuestionariosList.prototype.addcuestionario = function (cuestionario) {
        this.lista.push(cuestionario);
    };
    CuestionariosList.prototype.getpregunta = function (num) {
        var result;
        this.lista.forEach(function (cuestion) {
            if (cuestion.Num == num) {
                result = cuestion;
            }
        });
        return result;
    };
    CuestionariosList.prototype.getrespuestajson = function (num) {
        var result = [];
        this.lista.forEach(function (cuestion) {
            if (cuestion.Num == num) {
                result = JSON.parse(cuestion.Respuesta);
            }
        });
        return result;
    };
    return CuestionariosList;
}());

//# sourceMappingURL=cuestionario_lts.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_realizarcalificacion_realizarcalificacion__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_recibircalificacion_recibircalificacion__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dgoffline_dgoffline__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_principal_principal__ = __webpack_require__(24);
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
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.pages = [
            { titulo: "Realizar Calificación", component: __WEBPACK_IMPORTED_MODULE_5__pages_realizarcalificacion_realizarcalificacion__["a" /* RealizarcalificacionPage */], icon: "star" },
            { titulo: "Recibir Calificación", component: __WEBPACK_IMPORTED_MODULE_6__pages_recibircalificacion_recibircalificacion__["a" /* RecibircalificacionPage */], icon: "thumbs-up" },
            //{titulo:"Recibir/Realizar Calificación",component:AmabascalificacionesPage,icon:"pricetag"},
            { titulo: "Calificaciones offline", component: __WEBPACK_IMPORTED_MODULE_7__pages_dgoffline_dgoffline__["a" /* DgofflinePage */], icon: "paper" },
        ];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            if (localStorage.datosuaurio) {
                _this.gotopage(__WEBPACK_IMPORTED_MODULE_8__pages_principal_principal__["a" /* PrincipalPage */]);
            }
            else {
                _this.gotopage(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
            }
        });
    }
    MyApp.prototype.gotopage = function (page) {
        this.nav.setRoot(page);
    };
    MyApp.prototype.cerrarapp = function () {
        this.platform.exitApp();
    };
    MyApp.prototype.cerrarsesion = function () {
        localStorage.clear();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('NAV'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\app\qvalv3\Qval\src\app\app.html"*/'<ion-menu [content]="NAV">\n    <ion-header >\n        <ion-navbar color="primary" >\n            <ion-title text-center >\n                Menu\n            </ion-title>\n        </ion-navbar>\n    </ion-header>\n    <ion-content>\n        <ion-list >\n            <button (click)="gotopage(page.component)" ion-item *ngFor="let page of pages" menuClose>\n                    <ion-icon item-left color="alight-gray" name="{{page.icon}}"></ion-icon>                \n                    {{page.titulo}}\n                \n            </button> \n            <button ion-item (click)="cerrarapp()" >\n                    <ion-icon item-left color="alight-gray"  name="power"></ion-icon>\n                        Salir sin cerrar sesión\n                      \n            </button>\n            <button ion-item  (click)="cerrarsesion()" >\n                <ion-icon item-left color="alight-gray"  name="log-out"></ion-icon>\n                        Cerrar sesión\n                \n            </button>             \n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav #NAV [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\xampp\htdocs\app\qvalv3\Qval\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[395]);
//# sourceMappingURL=main.js.map