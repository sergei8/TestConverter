(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#page-grid {\n  min-height: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto;\n      grid-template-columns: auto;\n  -ms-grid-rows: 48px auto;\n      grid-template-rows: 48px auto;\n}\n\n/*--------- header-секція -----------------*/\n\n#header-grid {\n  background-color: #3D80CC;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 20px 140px 0 0 120px auto 40px 40px 20px;\n      grid-template-columns: 20px 140px 0 0 120px auto 40px 40px 20px;\n  margin-top: 5px;\n}\n\n#fileName {\n  -ms-grid-column: 2;\n  grid-column: 2;\n}\n\n.btn-success {\n  background-color: white;\n}\n\n#fileNameButton {\n  -ms-grid-column: 3;\n  grid-column: 3;\n}\n\n#sendToConverterButton {\n  -ms-grid-column: 5;\n  grid-column: 5;\n}\n\n#cog {\n  -ms-grid-column: 7;\n  grid-column: 7;\n  /*background-color: tomato;*/\n}\n\n#help {\n  -ms-grid-column: 8;\n  grid-column: 8;\n}\n\n#cog, #help {\n  color: #cccccc;\n  text-align: center\n\n}\n\n/*--------- main-секція -----------------*/\n\n#main-grid {\n  display: -ms-grid;\n  display: grid;\n  background-color: #3D80CC;\n  -ms-grid-columns: 20px auto 20px;\n      grid-template-columns: 20px auto 20px;\n  -ms-grid-rows: auto 40px;\n      grid-template-rows: auto 40px;\n}\n\n#text-table {\n  -ms-grid-row: 1;\n      grid-row-start: 1;\n  -ms-grid-column: 2;\n      grid-column-start: 2;\n  background-color: white;\n  max-height: 100%;\n  padding-top: 8px;\n}\n\n/*--------- footer в main-секціі -----------------*/\n\n#table-footer {\n  -ms-grid-row: 2;\n      grid-row-start: 2;\n  -ms-grid-column: 2;\n      grid-column-start: 2;\n  background-color: #3D80CC;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 150px auto 300px;\n      grid-template-columns: 150px auto 300px;\n}\n\n/*--------- copyright в footer -----------------*/\n\n#copy {\n  -ms-grid-column: 1;\n      grid-column-start: 1;\n  margin-top: 8px;\n  color: #cccccc;\n  /*background-color: #cccccc;*/\n}\n\n/*--------- статістіка в footer -----------------*/\n\n#testStat {\n  -ms-grid-column: 3;\n      grid-column-start: 3;\n  /*background-color: #cccccc;*/\n}\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='page-grid'>\n  <div id=\"header-grid\">\n    <div id=\"fileName\">\n      <app-choose-file></app-choose-file>\n    </div>\n    <div id=\"sendToConverterButton\">\n      <app-save-test></app-save-test>\n    </div>\n\n    <div id=\"cog\" (click)=\"showConfig()\">\n      <i class=\"fa fa-cog fa-2x\"></i>\n    </div>\n\n    <div id=\"help\">\n      <i class=\"fa fa-question fa-2x\"></i>\n    </div>\n\n  </div>\n\n  <main id=\"main-grid\">\n    <div id=\"text-table\">\n      <app-text-table></app-text-table>\n      <p  *ngIf=\"dataservice.loadProgressIndicator\">\n        Ждите ...\n      </p>\n    </div>\n\n    <div id=\"table-footer\">\n      <div id=\"copy\"><i class=\"fa fa-copyright\"></i> Avas-2018</div>\n      <div id=\"testStat\"></div>\n    </div>\n  </main>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/config.service */ "./src/app/shared/config.service.ts");
/* harmony import */ var ngx_modal_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-modal-dialog */ "./node_modules/ngx-modal-dialog/index.js");
/* harmony import */ var _components_header_set_config_set_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/set-config/set-config.component */ "./src/app/components/header/set-config/set-config.component.ts");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/data-service */ "./src/app/shared/data-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(configService, modalService, viewRef, dataservice) {
        this.configService = configService;
        this.modalService = modalService;
        this.viewRef = viewRef;
        this.dataservice = dataservice;
    }
    /**
     *   при инициадизации приложения проверяем есть ли в куках
     *  конфиг. Если нет, устанавливаем по умолчанию и сохраняем
     *  если есть - то в readConfig они установятся и станут теущими
     */
    AppComponent.prototype.ngOnInit = function () {
        var configCookie = this.configService.readConfig();
        if (configCookie === undefined) {
            this.configService.config.answersNumber = _shared_config_service__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_ANSWERS"];
            this.configService.config.semanticCheck = _shared_config_service__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_SEM_CHECK"];
            this.configService.saveConfig();
        }
    };
    /**
     * макет диалогового окна настройки конфигурации
     */
    AppComponent.prototype.showConfig = function () {
        this.modalService.openDialog(this.viewRef, {
            title: 'Параметры конвертера',
            childComponent: _components_header_set_config_set_config_component__WEBPACK_IMPORTED_MODULE_3__["SetConfigComponent"],
            settings: {
                headerTitleClass: 'h5 label',
                buttonClass: 'btn btn-sm btn-outline-info'
            },
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"],
            ngx_modal_dialog__WEBPACK_IMPORTED_MODULE_2__["ModalDialogService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _shared_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var ngx_modal_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-modal-dialog */ "./node_modules/ngx-modal-dialog/index.js");
/* harmony import */ var ngx_textarea_autosize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-textarea-autosize */ "./node_modules/ngx-textarea-autosize/esm5/ngx-textarea-autosize.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/data-service */ "./src/app/shared/data-service.ts");
/* harmony import */ var _shared_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/config.service */ "./src/app/shared/config.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_text_table_text_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/text-table/text-table.component */ "./src/app/components/text-table/text-table.component.ts");
/* harmony import */ var _components_header_choose_file_choose_file_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/choose-file/choose-file.component */ "./src/app/components/header/choose-file/choose-file.component.ts");
/* harmony import */ var _components_header_choose_file_input_file_reader_input_file_reader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/choose-file/input-file-reader/input-file-reader.component */ "./src/app/components/header/choose-file/input-file-reader/input-file-reader.component.ts");
/* harmony import */ var _components_text_table_test_item_test_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/text-table/test-item/test-item.component */ "./src/app/components/text-table/test-item/test-item.component.ts");
/* harmony import */ var _components_header_save_test_save_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header/save-test/save-test.component */ "./src/app/components/header/save-test/save-test.component.ts");
/* harmony import */ var _components_header_set_config_set_config_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/header/set-config/set-config.component */ "./src/app/components/header/set-config/set-config.component.ts");
//todo сделать HELP
//todo проверять каждый вопрос после корректировки и менять его статус
//todo совершенствовать синтаксический анализатор
//todo сделать внизу кнопку `наверх`
//todo вылетает иногда при сохранениия файла
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_text_table_text_table_component__WEBPACK_IMPORTED_MODULE_11__["TextTableComponent"],
                _components_header_choose_file_choose_file_component__WEBPACK_IMPORTED_MODULE_12__["ChooseFileComponent"],
                _components_header_choose_file_input_file_reader_input_file_reader_component__WEBPACK_IMPORTED_MODULE_13__["InputFileReaderComponent"],
                _components_text_table_test_item_test_item_component__WEBPACK_IMPORTED_MODULE_14__["TestItemComponent"],
                _components_header_save_test_save_test_component__WEBPACK_IMPORTED_MODULE_15__["SaveTestComponent"],
                _components_header_set_config_set_config_component__WEBPACK_IMPORTED_MODULE_16__["SetConfigComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"],
                ngx_modal_dialog__WEBPACK_IMPORTED_MODULE_5__["ModalDialogModule"].forRoot(),
                ngx_textarea_autosize__WEBPACK_IMPORTED_MODULE_6__["TextareaAutosizeModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [_shared_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"], _shared_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            entryComponents: [_components_header_set_config_set_config_component__WEBPACK_IMPORTED_MODULE_16__["SetConfigComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/choose-file/choose-file.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/header/choose-file/choose-file.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-danger align-stretch\">\n  <app-input-reader></app-input-reader>\n</p>\n"

/***/ }),

/***/ "./src/app/components/header/choose-file/choose-file.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/header/choose-file/choose-file.component.ts ***!
  \************************************************************************/
/*! exports provided: ChooseFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseFileComponent", function() { return ChooseFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
import {DataService} from '../../../shared/data-service';
import {InputFileReaderComponent} from './input-file-reader/input-file-reader.component';
*/
var ChooseFileComponent = /** @class */ (function () {
    function ChooseFileComponent() {
    }
    ChooseFileComponent.prototype.ngOnInit = function () {
    };
    ChooseFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-choose-file',
            template: __webpack_require__(/*! ./choose-file.component.html */ "./src/app/components/header/choose-file/choose-file.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ChooseFileComponent);
    return ChooseFileComponent;
}());



/***/ }),

/***/ "./src/app/components/header/choose-file/input-file-reader/input-file-reader.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/header/choose-file/input-file-reader/input-file-reader.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label class=\"btn btn-success\">\n  Word-файл &hellip;<input type=\"file\" (change)=\"fileSelected($event);\" style=\"display: none\" >\n</label>\n"

/***/ }),

/***/ "./src/app/components/header/choose-file/input-file-reader/input-file-reader.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/header/choose-file/input-file-reader/input-file-reader.component.ts ***!
  \************************************************************************************************/
/*! exports provided: InputFileReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFileReaderComponent", function() { return InputFileReaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/data-service */ "./src/app/shared/data-service.ts");
/* harmony import */ var _shared_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/config.service */ "./src/app/shared/config.service.ts");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputFileReaderComponent = /** @class */ (function () {
    function InputFileReaderComponent(dataservice, configService) {
        this.dataservice = dataservice;
        this.configService = configService;
    }
    /**
     * при выборе файла в <input> инициирует процесс его преобразования
     * в табличную форму согласно структуре TestItem
     * @param $event - содержит ссылку на файловый объект
     */
    InputFileReaderComponent.prototype.fileSelected = function ($event) {
        // this.dataservice.loadProgressIndicator = true;
        Object(q__WEBPACK_IMPORTED_MODULE_3__["async"])(this.dataservice.getPlainTests($event.target.files[0]));
        // this.dataservice.loadProgressIndicator = false;
        this.configService.isTestLoaded = true; //  тест загружен
    };
    InputFileReaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-reader',
            template: __webpack_require__(/*! ./input-file-reader.component.html */ "./src/app/components/header/choose-file/input-file-reader/input-file-reader.component.html")
        }),
        __metadata("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], InputFileReaderComponent);
    return InputFileReaderComponent;
}());



/***/ }),

/***/ "./src/app/components/header/save-test/save-test.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/header/save-test/save-test.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header/save-test/save-test.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/header/save-test/save-test.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-success\" (click)=\"saveFile()\"> Сохранить &hellip;</button>\n"

/***/ }),

/***/ "./src/app/components/header/save-test/save-test.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/header/save-test/save-test.component.ts ***!
  \********************************************************************/
/*! exports provided: SaveTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveTestComponent", function() { return SaveTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/data-service */ "./src/app/shared/data-service.ts");
/* harmony import */ var file_saver_FileSaver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver/FileSaver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver_FileSaver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver_FileSaver__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SaveTestComponent = /** @class */ (function () {
    function SaveTestComponent(dataservice) {
        this.dataservice = dataservice;
    }
    /**
     * Сохраняет отконвертированный в GIFT файл на локальный диск
     */
    SaveTestComponent.prototype.saveFile = function () {
        var test = this.convertToMoodle();
        var file = new Blob([test], { type: 'text\plain' });
        var testFileName = this.dataservice.fileName.split('.')[0] + '.txt';
        Object(file_saver_FileSaver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(file, testFileName);
    };
    /**
     * Конвертирует структуру `testsList` в GIFT формат
     * @return {string} текстовая строка в GIFT-формате
     */
    SaveTestComponent.prototype.convertToMoodle = function () {
        var _this = this;
        var test = '';
        this.dataservice.testsList.forEach(function (item) {
            var question = ":: " + _this.escapeSpesialSymbols(item.question);
            var answers = "=" + _this.escapeSpesialSymbols(item.answers[0]) + "\n"; //  правильный ответ - первый!
            for (var i = 1; i < item.answers.length; i++) {
                answers += "~" + _this.escapeSpesialSymbols(item.answers[i]) + "\n";
            }
            test += question + "{\n" + answers + "}\n\n\n";
        });
        return test;
    };
    /** Экранирует слешом (\) специальные символы формата GIFT
     *
     * @param {string} item - анализируемая строка
     * @return {string} - выходная строка с экранированными спецсимволами
     */
    SaveTestComponent.prototype.escapeSpesialSymbols = function (item) {
        var mask = ['\}', '\{', '\~', '\=', '\]'];
        // проход по всем символам маски и их экранирование в строке `item`
        mask.forEach(function (symbol) {
            var regExp = new RegExp(symbol, 'gi');
            try {
                // отсекаем `undefined` items
                if (item) {
                    item = item.replace(regExp, "\\" + symbol);
                }
            }
            catch (e) {
                console.log(item);
                alert("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A:\n" + e.message);
            }
        });
        return item;
    };
    SaveTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-save-test',
            template: __webpack_require__(/*! ./save-test.component.html */ "./src/app/components/header/save-test/save-test.component.html"),
            styles: [__webpack_require__(/*! ./save-test.component.css */ "./src/app/components/header/save-test/save-test.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SaveTestComponent);
    return SaveTestComponent;
}());



/***/ }),

/***/ "./src/app/components/header/set-config/set-config.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/header/set-config/set-config.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#config-params{\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 20px auto 20px auto 20px;\n      grid-template-columns: 20px auto 20px auto 20px;\n  grid-row-gap: 1.1em;\n}\n\nlabel{\n  -ms-grid-column: 2;\n  grid-column: 2;\n}\n\ninput{\n  -ms-grid-column: 4;\n  grid-column: 4;\n}\n\ninput[type=\"number\"]{\n  width: 50px;\n}\n"

/***/ }),

/***/ "./src/app/components/header/set-config/set-config.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/header/set-config/set-config.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"config-params\">\n  <label for=\"answersNumber\">Число ответов</label>\n  <input  id=\"answersNumber\"   type=\"number\" [(ngModel)]=\"configService.config.answersNumber\" min=\"2\" max=\"10\">\n  <label for=\"semAnalise\">Семантический анализ</label>\n  <input type=\"checkbox\" id=\"semAnalise\" [(ngModel)]=\"configService.config.semanticCheck\" >\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/set-config/set-config.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/header/set-config/set-config.component.ts ***!
  \**********************************************************************/
/*! exports provided: SetConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetConfigComponent", function() { return SetConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/config.service */ "./src/app/shared/config.service.ts");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/data-service */ "./src/app/shared/data-service.ts");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetConfigComponent = /** @class */ (function () {
    /**
     * определяет функционал кнопок диалогового окна настройки конфига
     * @param {ConfigService} configService
     * @param {DataService} dataService
     */
    function SetConfigComponent(configService, dataService) {
        var _this = this;
        this.configService = configService;
        this.dataService = dataService;
        this.actionButtons = [
            {
                text: 'Сохранить', onAction: function () {
                    // console.log(this.configService.isTestLoaded);
                    _this.configService.saveConfig();
                    // если файл уже загружен, перегружаем его с новым конфигом
                    if (_this.configService.isTestLoaded) {
                        Object(q__WEBPACK_IMPORTED_MODULE_3__["async"])(_this.dataService.getPlainTests(_this.dataService.file));
                    }
                    return true;
                }
            },
            {
                text: 'Прервать'
            }
        ];
    }
    SetConfigComponent.prototype.dialogInit = function (reference, options) {
        // no processing needed
    };
    SetConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-set-config',
            template: __webpack_require__(/*! ./set-config.component.html */ "./src/app/components/header/set-config/set-config.component.html"),
            styles: [__webpack_require__(/*! ./set-config.component.css */ "./src/app/components/header/set-config/set-config.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"],
            _shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SetConfigComponent);
    return SetConfigComponent;
}());



/***/ }),

/***/ "./src/app/components/text-table/test-item/test-item.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/text-table/test-item/test-item.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test-item, .test-item-err {\n  margin: 0 8px;\n}\n\n.test-item {\n  background-color: white;\n}\n\n.test-item-err {\n  background-color: pink;\n}\n\n.test-answer, .test-question {\n  background-color: transparent;\n  vertical-align: top;\n  /*font-family: Times, Geneva, sans-serif;*/\n}\n\n#test-item-grid {\n  display: -ms-inline-grid;\n  display: inline-grid;\n  -ms-grid-columns: 30px auto 50px;\n      grid-template-columns: 30px auto 50px;\n\n}\n\nli, #number {\n  color: darkgray;\n}\n\n#number {\n  padding-left: 5px;\n  padding-top: 2px;\n}\n"

/***/ }),

/***/ "./src/app/components/text-table/test-item/test-item.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/text-table/test-item/test-item.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div [ngClass]=\"setItemClass(testItem.statusBad)\">\n  <div id=\"test-item-grid\">\n    <div id=\"number\">\n      {{number}}.&nbsp;\n    </div>\n    <textarea autosize class=\"test-question\" [(ngModel)]=\"testItem.question\"\n              rows=\"1\" cols=\"90%\">\n                <!--[cols]=\"adjustTextSize(testItem.question.length)\" >-->\n      </textarea>\n\n    <div id=\"getMessage\" *ngIf=\"testItem.statusBad\"\n    ngbPopover={{testItem.statusMessage}} placement=\"left\"\n    >\n      <i class=\"fa fa-exclamation-circle fa-2x\"\n         style=\"color: red; padding-top: 5px\">\n      </i>\n    </div>\n  </div>\n\n  <ol>\n    <li *ngFor=\"let _  of testItem.answers; let i = index;\">\n      <textarea autosize [ngModel]=\"testItem.answers[i]\"\n                (change)=\"changeAnswer($event, i);\"\n                class=\"test-answer\" rows=\"1\" cols=\"80%\">\n      </textarea>\n    </li>\n  </ol>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/text-table/test-item/test-item.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/text-table/test-item/test-item.component.ts ***!
  \************************************************************************/
/*! exports provided: TestItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestItemComponent", function() { return TestItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestItemComponent = /** @class */ (function () {
    function TestItemComponent() {
    }
    /**
     * меняет контент ответа, когда с экрана сделана корректировка
     * @param event - параметры события `change`
     * @param i - порядковый номер ответа
     */
    TestItemComponent.prototype.changeAnswer = function (event, i) {
        this.testItem.answers[i] = event.target.value;
    };
    /**
     * изменяет цвет фона для вопросов с statusBad = true
     * @param {boolean} statusBad
     * @return {string}
     */
    TestItemComponent.prototype.setItemClass = function (statusBad) {
        var itemClass = 'test-item';
        if (statusBad) {
            itemClass = 'test-item-err';
        }
        return itemClass;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TestItemComponent.prototype, "testItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TestItemComponent.prototype, "number", void 0);
    TestItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-item',
            template: __webpack_require__(/*! ./test-item.component.html */ "./src/app/components/text-table/test-item/test-item.component.html"),
            styles: [__webpack_require__(/*! ./test-item.component.css */ "./src/app/components/text-table/test-item/test-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestItemComponent);
    return TestItemComponent;
}());



/***/ }),

/***/ "./src/app/components/text-table/text-table.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/text-table/text-table.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/text-table/text-table.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/text-table/text-table.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of dataservice.testsList; let i=index\">\n  <app-test-item [testItem]=\"item\" [number]=\"i+1\"></app-test-item>\n  <hr>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/text-table/text-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/text-table/text-table.component.ts ***!
  \***************************************************************/
/*! exports provided: TextTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTableComponent", function() { return TextTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data-service */ "./src/app/shared/data-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextTableComponent = /** @class */ (function () {
    function TextTableComponent(dataservice) {
        this.dataservice = dataservice;
    }
    TextTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-table',
            template: __webpack_require__(/*! ./text-table.component.html */ "./src/app/components/text-table/text-table.component.html"),
            styles: [__webpack_require__(/*! ./text-table.component.css */ "./src/app/components/text-table/text-table.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TextTableComponent);
    return TextTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/config.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/config.service.ts ***!
  \******************************************/
/*! exports provided: ConfigService, DEFAULT_ANSWERS, DEFAULT_SEM_CHECK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ANSWERS", function() { return DEFAULT_ANSWERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SEM_CHECK", function() { return DEFAULT_SEM_CHECK; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {DataService} from './data-service';
var ConfigService = /** @class */ (function () {
    function ConfigService(cookieService) {
        this.cookieService = cookieService;
        this.config = {};
        this.isTestLoaded = false; // индикатор загружен тест или нет (false)
    }
    /**
     * читает параметры конфигурации
     * @return {Object} - конфигурация приложения
     */
    ConfigService.prototype.readConfig = function () {
        this.config.answersNumber = Number(this.cookieService.get('answersNumber'));
        this.config.semanticCheck = (this.cookieService.get('semanticCheck') === 'true');
        return this.config;
    };
    /**
     * сохраняет конфигурацию в куку
     */
    ConfigService.prototype.saveConfig = function () {
        var date = new Date();
        date.setDate(date.getDate() + 1000); // дату надолго
        this.cookieService.set('answersNumber', this.config.answersNumber.toString(), date);
        this.cookieService.set('semanticCheck', this.config.semanticCheck.toString(), date);
        // this.dataService.getPlainTests(this.dataService.fileName);
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], ConfigService);
    return ConfigService;
}());

var DEFAULT_ANSWERS = 4;
var DEFAULT_SEM_CHECK = false;


/***/ }),

/***/ "./src/app/shared/data-service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/data-service.ts ***!
  \****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ "./src/app/shared/config.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var DataService = /** @class */ (function () {
    function DataService(appConfig) {
        this.appConfig = appConfig;
        this.loadProgressIndicator = false; // управляет показом прогресс-индикатора
    }
    /**
     * Читает docx-файл, преобразует его в текстовый формат, затем в
     * структуру для вывода в окно браузера
     * Через эту функцию начинается процедура загрузки и обработки файла
     * Вызывает функции: `getFile`, `mammoth.extractRawText`, `convertToArray`, `convertToTest`
     * @return {Array<TestItem>}
     */
    DataService.prototype.getPlainTests = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var plainBuffer, plainText, plainArray, _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.file = file;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, , 9]);
                        this.loadProgressIndicator = true;
                        // console.log('@@@', this.loadProgressIndicator);
                        this.fileName = file.name;
                        return [4 /*yield*/, this.getFile(file)];
                    case 2:
                        plainBuffer = _b.sent();
                        return [4 /*yield*/, mammoth.extractRawText({ arrayBuffer: plainBuffer })
                                .then(function (result) {
                                return result.value;
                            })];
                    case 3:
                        plainText = _b.sent();
                        this.loadProgressIndicator = false;
                        return [4 /*yield*/, this.convertToArray(plainText)];
                    case 4:
                        plainArray = _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.convertToTest(plainArray)];
                    case 5:
                        _a.testsList = _b.sent();
                        if (!this.appConfig.config.semanticCheck) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.checkForErrors()];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        e_1 = _b.sent();
                        console.log('error somewhere in getPlainText', e_1.message);
                        this.loadProgressIndicator = false;
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Читает асинхронно локальный файл и отдает его контент через промис
     * @param {File} fileName - файловый объект
     * @return {Promise<any>} - промис c resolve=контенту файла
     */
    DataService.prototype.getFile = function (fileName) {
        var fileReader = new FileReader();
        return new Promise(function (resolve) {
            fileReader.onloadend = function () {
                resolve(fileReader.result);
            };
            fileReader.readAsArrayBuffer(fileName);
        });
    };
    /**
     * преобразует текстовую строку в массив по разделителю `перевод строки`
     * @param plainText - строка
     * @return {Promise<any>} в промисе возвращает массив с вопросами-ответами
     */
    DataService.prototype.convertToArray = function (plainText) {
        return new Promise(function (resolve) {
            // делаем массив
            var textArray = plainText.split('\n');
            // преобразуем пустые строки в ''
            textArray = underscore__WEBPACK_IMPORTED_MODULE_2__["map"](textArray, function (x) {
                return x.trim().length === 0 ? '' : x;
            });
            // возвращаем сжатый массив
            resolve(underscore__WEBPACK_IMPORTED_MODULE_2__["compact"](textArray));
        });
    };
    /**
     * преобразует массив вопросов-ответов в массив руктуры TestItem
     * распределяет ответы согласно параметра в appConfig.answersNumber
     * @param plainArray - линейный массив вопросов-ответов
     * @return {Promise<any>} через промис возвращает структурированный тест
     */
    DataService.prototype.convertToTest = function (plainArray) {
        var _this = this;
        return new Promise(function (resolve) {
            var test = [];
            // проход по линейному массиву
            for (var i = 0; i < plainArray.length; i += _this.appConfig.config.answersNumber + 1) {
                // инициализируем структуру
                var item = {
                    question: '',
                    answers: []
                };
                // выборка вопроса
                item.question = plainArray[i];
                // выборка ответов
                for (var j = 1; j <= _this.appConfig.config.answersNumber; j++) {
                    item.answers.push(plainArray[i + j]);
                }
                // накопление в массиве
                test.push(item);
            }
            resolve(test);
        });
    };
    /**
     * проводит семантический анализ тестов на разного рода
     * пользовательские ошибки: нумерация ответов/вопросов, не
     * одинаковое число ответов и т.п.
     * Вызывает последовательно функции конкретного вида анализа  и
     * устанавливает для каждого айтема его статус, и статусное сообщение
     * @return {Promise<number>}
     */
    DataService.prototype.checkForErrors = function () {
        var _this = this;
        return new Promise(function () {
            // console.log((this.testsList));
            _this.testsList.forEach(function (item) {
                checkForNumerating(item);
                checkForAnswers(item);
            });
        });
        /** проверка на наличие нумерации в тесте */
        function checkForNumerating(item) {
            var mask = /[1-9а-яА-Яa-zA-Z][.)]/;
            item.statusBad = false;
            item.statusBad = item.statusBad || RegExp(mask, 'gi').test(item.question.slice(0, 5));
            item.answers.forEach(function (ans) {
                item.statusBad = item.statusBad || RegExp(mask, 'gi').test(ans.slice(0, 2));
            });
            if (item.statusBad) {
                item.statusMessage = 'В вопросе или ответах присутуствует ненужная нумерация.\n' +
                    'Вы можете убрать ее здесь или в исходном файле.';
            }
        }
        /** проверяет список ответов и, если ответ похож на вопрос - отмечает его */
        function checkForAnswers(item) {
            item.answers.forEach(function (ans) {
                item.statusBad = item.statusBad || ans.slice(-1) === '?';
            });
            if (item.statusBad) {
                item.statusMessage = 'Похоже, в список ответов попал тестовый вопрос';
            }
        }
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/HDD/Projects/Test-converter/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map