(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _pages_soundboard_soundboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/soundboard/soundboard.component */ "./src/app/pages/soundboard/soundboard.component.ts");
/* harmony import */ var _pages_drawings_drawings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/drawings/drawings.component */ "./src/app/pages/drawings/drawings.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");









const routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: src_app_pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'soundboard', component: _pages_soundboard_soundboard_component__WEBPACK_IMPORTED_MODULE_3__["SoundboardComponent"] },
    { path: 'drawings', component: _pages_drawings_drawings_component__WEBPACK_IMPORTED_MODULE_4__["DrawingsComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");



class AppComponent {
    constructor() {
        this.title = 'dashboard';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
    } }, directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _pages_soundboard_soundboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/soundboard/soundboard.component */ "./src/app/pages/soundboard/soundboard.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _components_commands_list_commands_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/commands-list/commands-list.component */ "./src/app/components/commands-list/commands-list.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _pages_drawings_drawings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/drawings/drawings.component */ "./src/app/pages/drawings/drawings.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");



























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
        _pages_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
        _pages_soundboard_soundboard_component__WEBPACK_IMPORTED_MODULE_14__["SoundboardComponent"],
        _components_commands_list_commands_list_component__WEBPACK_IMPORTED_MODULE_17__["CommandsListComponent"],
        _pages_drawings_drawings_component__WEBPACK_IMPORTED_MODULE_21__["DrawingsComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
        _pages_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                    _pages_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                    _pages_soundboard_soundboard_component__WEBPACK_IMPORTED_MODULE_14__["SoundboardComponent"],
                    _components_commands_list_commands_list_component__WEBPACK_IMPORTED_MODULE_17__["CommandsListComponent"],
                    _pages_drawings_drawings_component__WEBPACK_IMPORTED_MODULE_21__["DrawingsComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                    _pages_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/commands-list/commands-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/commands-list/commands-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: CommandsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandsListComponent", function() { return CommandsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function CommandsListComponent_mat_list_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const command_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", command_r1.activated);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("!", command_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", command_r1.description, "");
} }
class CommandsListComponent {
    constructor(httpService) {
        this.httpService = httpService;
    }
    ngOnInit() {
        this.httpService.get('commands').toPromise().then(commands => {
            commands.forEach(cmd => cmd.activated = true);
            this.commands = commands;
        });
    }
    selectedCommands() {
        return this.commands.filter(command => command.activated === true);
    }
}
CommandsListComponent.ɵfac = function CommandsListComponent_Factory(t) { return new (t || CommandsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
CommandsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommandsListComponent, selectors: [["app-commands-list"]], decls: 2, vars: 1, consts: [["checkboxPosition", "before", 3, "selected", 4, "ngFor", "ngForOf"], ["checkboxPosition", "before", 3, "selected"], [1, "command-checkbox-label"]], template: function CommandsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-selection-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommandsListComponent_mat_list_option_1_Template, 5, 3, "mat-list-option", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.commands);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListOption"]], styles: [".command-checkbox[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.command-checkbox-label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.mat-list-item[_ngcontent-%COMP%] {\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbWlsZS9Eb2N1bWVudHMvQ09ERS9Qcm9qZWN0cy9CQi1Db2xsYWItYm90LUpTL2Rhc2hib2FyZC9zcmMvYXBwL2NvbXBvbmVudHMvY29tbWFuZHMtbGlzdC9jb21tYW5kcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbW1hbmRzLWxpc3QvY29tbWFuZHMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWFuZHMtbGlzdC9jb21tYW5kcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1hbmQtY2hlY2tib3gge1xuICAgIGZvbnQtc2l6ZTogMTRweDs7XG59XG5cbi5jb21tYW5kLWNoZWNrYm94LWxhYmVsIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYXQtbGlzdC1pdGVtIHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuIiwiLmNvbW1hbmQtY2hlY2tib3gge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb21tYW5kLWNoZWNrYm94LWxhYmVsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdC1saXN0LWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommandsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-commands-list',
                templateUrl: './commands-list.component.html',
                styleUrls: ['./commands-list.component.scss']
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function MenuComponent_router_outlet_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
} }
function MenuComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ERREUR DE CONNEXION AU SERVEUR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MenuComponent {
    constructor(socketService) {
        this.socketService = socketService;
        this.opened = true;
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 20, vars: 3, consts: [["color", "primary"], ["mat-icon-button", "", 3, "click"], ["autosize", "", 1, "main-container"], ["fixedInViewport", "false", "mode", "side", 1, "main-sidenav", 3, "opened"], ["role", "list"], ["role", "listitem"], ["routerLink", "/main", "mat-button", "", 1, "sidenav-button"], ["routerLink", "/soundboard", "mat-button", "", 1, "sidenav-button"], ["routerLink", "/drawings", "mat-button", "", 1, "sidenav-button"], [4, "ngIf"], ["id", "error-socket-div", 4, "ngIf"], ["id", "error-socket-div"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_1_listener() { return ctx.opened = !ctx.opened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " BOT Blackboard Collab\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-sidenav-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-sidenav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Page de contr\u00F4le ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Soundboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Dessins ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MenuComponent_router_outlet_18_Template, 1, 0, "router-outlet", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MenuComponent_div_19_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.socketService.alive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.socketService.alive);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: [".main-sidenav[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.sidenav-button[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n#error-socket-div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbWlsZS9Eb2N1bWVudHMvQ09ERS9Qcm9qZWN0cy9CQi1Db2xsYWItYm90LUpTL2Rhc2hib2FyZC9zcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1zaWRlbmF2IHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjBweDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbn1cblxuLnNpZGVuYXYtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbiNlcnJvci1zb2NrZXQtZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn0iLCIubWFpbi1zaWRlbmF2IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjBweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLnNpZGVuYXYtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4jZXJyb3Itc29ja2V0LWRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return [{ type: src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/drawings/drawings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/drawings/drawings.component.ts ***!
  \******************************************************/
/*! exports provided: DrawingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingsComponent", function() { return DrawingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");









function DrawingsComponent_mat_grid_tile_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DrawingsComponent_mat_grid_tile_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const drawing_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.draw(drawing_r26.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const drawing_r26 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", drawing_r26.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r25.getUrl(drawing_r26.name), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class DrawingsComponent {
    constructor(httpService, toastService) {
        this.httpService = httpService;
        this.toastService = toastService;
        this.cols = 0;
    }
    ngOnInit() {
        this.httpService.get('drawings').toPromise().then(drawings => {
            this.drawings = drawings;
            this.cols = Math.round(Math.sqrt(this.drawings.length));
        });
    }
    draw(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const drawingRes = yield this.httpService.post('draw', { name }).toPromise();
            if (!drawingRes) {
                this.toastService.showToast('Erreur, le BOT ne peut pas dessiner. Le dessin n\'est pas activé sur la page', 6000);
            }
        });
    }
    getUrl(name) {
        return `http://localhost:3000/static/drawings/svg/${name}.svg`;
    }
}
DrawingsComponent.ɵfac = function DrawingsComponent_Factory(t) { return new (t || DrawingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"])); };
DrawingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DrawingsComponent, selectors: [["app-drawings"]], decls: 3, vars: 2, consts: [["id", "drawings-grid-div"], ["id", "drawings-grid-list", "rowHeight", "3:1", 3, "cols"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "accent", 1, "drawing-card-button", 3, "click"], [1, "drawing-card-spann"], ["mat-card-image", "", "alt", "Screenshot of the bot", 1, "drawing-svg", 3, "src"]], template: function DrawingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DrawingsComponent_mat_grid_tile_2_Template, 5, 2, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cols", ctx.cols);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.drawings);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTile"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"]], styles: ["#drawings-grid-list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n#drawings-grid-div[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: flex;\n  justify-content: center;\n}\n\n.mat-grid-tile[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.drawing-card-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.drawing-card-spann[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  text-transform: uppercase;\n}\n\n.drawing-svg[_ngcontent-%COMP%] {\n  width: 20%;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbWlsZS9Eb2N1bWVudHMvQ09ERS9Qcm9qZWN0cy9CQi1Db2xsYWItYm90LUpTL2Rhc2hib2FyZC9zcmMvYXBwL3BhZ2VzL2RyYXdpbmdzL2RyYXdpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kcmF3aW5ncy9kcmF3aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kcmF3aW5ncy9kcmF3aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkcmF3aW5ncy1ncmlkLWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI2RyYXdpbmdzLWdyaWQtZGl2IHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1hdC1ncmlkLXRpbGUge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmRyYXdpbmctY2FyZC1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmRyYXdpbmctY2FyZC1zcGFubiB7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZHJhd2luZy1zdmcge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59IiwiI2RyYXdpbmdzLWdyaWQtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNkcmF3aW5ncy1ncmlkLWRpdiB7XG4gIG1hcmdpbjogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXQtZ3JpZC10aWxlIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZHJhd2luZy1jYXJkLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5kcmF3aW5nLWNhcmQtc3Bhbm4ge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZHJhd2luZy1zdmcge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DrawingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-drawings',
                templateUrl: './drawings.component.html',
                styleUrls: ['./drawings.component.scss']
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoginComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _components_commands_list_commands_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/commands-list/commands-list.component */ "./src/app/components/commands-list/commands-list.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
















const _c0 = ["commands"];
const _c1 = function () { return { standalone: true }; };
function MainComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Lancer un nouveau BOT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Nom du BOT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MainComponent_mat_card_1_Template_input_keydown_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onKeydown($event); })("ngModelChange", function MainComponent_mat_card_1_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.botNameInput = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "URL de la classe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MainComponent_mat_card_1_Template_input_keydown_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onKeydown($event); })("ngModelChange", function MainComponent_mat_card_1_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.botUrlInput = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-commands-list", null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_mat_card_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.startBot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Lancer !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.botNameInput)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.botUrlInput)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
} }
function MainComponent_mat_card_2_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "signal_wifi_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r12.connectionMessage, " ");
} }
function MainComponent_mat_card_2_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Connect\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "signal_wifi_4_bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_mat_card_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.disconnectBot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " D\u00E9connecter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Status du BOT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MainComponent_mat_card_2_div_16_Template, 5, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MainComponent_mat_card_2_div_17_Template, 4, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Faire parler le BOT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainComponent_mat_card_2_Template_textarea_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.botTextarea = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_mat_card_2_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.sendText(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "keyboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Envoyer en CHAT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_mat_card_2_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.sendVoice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "keyboard_voice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Envoyer en VOIX ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_mat_card_2_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.screenshot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Voir ce que voit le BOT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "add_a_photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Clickez sur l'image pour contr\u00F4ler la page");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_mat_card_2_Template_img_click_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.clickPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.currentBot.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.currentBot.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.connected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.connected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.botTextarea);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.screenshotUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MainComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Connexion en cours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class MainComponent {
    constructor(httpService, socketService, toastService) {
        this.httpService = httpService;
        this.socketService = socketService;
        this.toastService = toastService;
        this.loading = false;
        this.connected = false;
        this.botUrlInput = 'http://collaborate.blackboard.com/go?CTID=d83e9915-9912-42a5-b54f-289b3e310135G'; //: string;
    }
    ngOnInit() {
        this.socketService.setup();
        this.httpService.get('bot').toPromise().then(bot => {
            if (bot) {
                this.currentBot = bot;
                this.connected = this.currentBot.connected;
                this.screenshot();
            }
        });
        if (!this.botStatusSocket) {
            this.botStatusSocket = this.socketService.subscribe('bot-status');
            this.botStatusSocket.subscribe(info => {
                this.socketCases(info);
            });
        }
    }
    startBot() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.botNameInput || !(this.botUrlInput.includes('bbcollab.com') || this.botUrlInput.includes('blackboard'))) {
                this.toastService.showToast('Veuillez remplir les champs correctement avant!', 5000);
            }
            else {
                this.currentBot = {
                    name: this.botNameInput,
                    url: this.botUrlInput,
                    commands: this.commands.selectedCommands(),
                    connected: true
                };
                this.loading = true;
                const started = yield this.httpService.post('start', this.currentBot).toPromise();
                if (!started) {
                    this.loading = false;
                    this.currentBot = null;
                    this.toastService.showToast('Erreur lors de la connexion avec le BOT', 6000);
                }
            }
        });
    }
    disconnectBot() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.httpService.get('disconnect');
            this.currentBot = null;
        });
    }
    sendText() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.httpService.post('text', {
                message: this.botTextarea
            }).toPromise();
            if (res) {
                this.toastService.showToast('Le message a bien été envoyé !', 5000);
            }
        });
    }
    sendVoice() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.httpService.post('speak', {
                message: this.botTextarea,
                username: this.currentBot.name
            }).toPromise();
            if (res) {
                this.toastService.showToast('Le message a bien été envoyé !', 5000);
            }
        });
    }
    screenshot() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = 'http://localhost:3000/static/screenshot/screenshot.png';
            const timeStamp = new Date().getTime();
            yield this.httpService.get('screenshot').toPromise();
            this.screenshotUrl = url + '?' + timeStamp;
        });
    }
    clickPage(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const boundingBox = document.getElementById('bot-screenshot-img').getBoundingClientRect();
            const xPos = event.x - boundingBox.x;
            const yPos = event.y - boundingBox.y;
            const xRatio = xPos / boundingBox.width;
            const yRatio = (yPos / boundingBox.height) * 0.55;
            console.log('click');
            yield this.httpService.post('click', { x: xRatio, y: yRatio }).toPromise();
            this.screenshot();
        });
    }
    onKeydown(event) {
        if (event.key === 'Enter') {
            this.startBot();
        }
    }
    socketCases(info) {
        switch (info) {
            case 'connecting':
                this.loading = false;
                this.connected = false;
                this.screenshot();
                this.connectionMessage = 'Connexion en cours';
                break;
            case 'live':
                this.loading = false;
                this.connected = true;
                break;
            case 'wrong-url':
                this.currentBot = null;
                this.toastService.showToast('L\'URL n\'est pas bonne !', 6000);
                break;
            case 'error':
                break;
            case 'skipping-test':
                this.loading = false;
                this.connected = false;
                this.screenshot();
                this.connectionMessage = 'Le bot passe la page de test';
                break;
            case 'bot-infos':
                this.currentBot = info;
                this.screenshot();
                break;
            case 'setup-mic':
                this.loading = false;
                this.connected = false;
                this.screenshot();
                this.connectionMessage = 'Le bot accède au micro';
                break;
            case 'setup-mic-done':
                this.loading = false;
                this.connected = false;
                this.screenshot();
                this.connectionMessage = 'Micro mis en place';
                break;
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], viewQuery: function MainComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.commands = _t.first);
    } }, decls: 4, vars: 3, consts: [["id", "main-div"], ["class", "start-bot-card", 4, "ngIf"], ["class", "statut-bot-card", 4, "ngIf"], [4, "ngIf"], [1, "start-bot-card"], ["matInput", "", "placeholder", "Joe", 3, "ngModel", "ngModelOptions", "keydown", "ngModelChange"], ["matInput", "", "placeholder", "https://eu.bbcollab.com/guest/...", 3, "ngModel", "ngModelOptions", "keydown", "ngModelChange"], ["commands", ""], ["id", "start-button", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "statut-bot-card"], ["id", "disconnect-button", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "statut-title-div"], [1, "statut-connection-card"], [1, "statut-url-div"], ["class", "statut-div", 4, "ngIf"], [1, "bot-speak-card"], [1, "bot-speak-formfield"], ["matInput", "", "placeholder", "Ex. Je vais d\u00E9truire le monde...", 1, "bot-speak-textarea", 3, "ngModel", "ngModelChange"], [1, "bot-speak-buttons-div"], ["mat-raised-button", "", "color", "accent", 1, "bot-speak-button", 3, "click"], [1, "bot-screenshot-card"], [1, "bot-screenshot-div"], ["mat-raised-button", "", "color", "accent", 1, "bot-screenshot-button", 3, "click"], ["mat-card-image", "", "id", "bot-screenshot-img", "alt", "Screenshot of the bot", 3, "src", "click"], [1, "statut-div"], ["diameter", "20"], [1, "not-connected-icon"], [1, "connected-icon"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainComponent_mat_card_1_Template, 20, 6, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainComponent_mat_card_2_Template, 41, 6, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MainComponent_div_3_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.currentBot && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentBot && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _components_commands_list_commands_list_component__WEBPACK_IMPORTED_MODULE_10__["CommandsListComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"]], styles: ["#main-div[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n}\n\n.start-bot-card[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 70%;\n  margin-top: 20px;\n}\n\n.statut-bot-card[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 10px;\n  text-align: center;\n}\n\n.statut-bot-card[_ngcontent-%COMP%]    > mat-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.statut-connection-card[_ngcontent-%COMP%] {\n  margin: 10px;\n  font-size: 20px;\n  display: flex;\n  justify-content: space-between;\n  background-color: #d3d3d336;\n}\n\n.start-bot-card[_ngcontent-%COMP%]    > mat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.start-bot-card[_ngcontent-%COMP%]    > mat-card-content[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n#start-button[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 50px;\n  font-size: 30px;\n  margin-top: 20px;\n}\n\n.mat-card-header[_ngcontent-%COMP%] {\n  justify-content: center;\n  font-size: 20px;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  margin: 20px 30px 20px 30px;\n}\n\n.connected-icon[_ngcontent-%COMP%] {\n  color: limegreen;\n}\n\n.not-connected-icon[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.statut-div[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.statut-div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 10px 0 10px;\n}\n\n#disconnect-button[_ngcontent-%COMP%] {\n  position: absolute;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-size: 15px;\n  right: 10px;\n  top: 10px;\n}\n\n.statut-url-div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  text-align: start;\n  font-size: 15px;\n  font-style: italic;\n  font-weight: 100;\n}\n\n.statut-title-div[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.statut-title-div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: xx-large;\n  text-transform: uppercase;\n}\n\n.bot-speak-card[_ngcontent-%COMP%] {\n  margin: 10px;\n  font-size: 15px;\n  display: flex;\n  justify-content: space-between;\n  background-color: #d3d3d336;\n}\n\n.bot-speak-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.bot-speak-buttons-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.bot-speak-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.bot-speak-formfield[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: 20px;\n}\n\n.bot-screenshot-card[_ngcontent-%COMP%] {\n  margin: 10px;\n  font-size: 15px;\n  display: flex;\n  justify-content: center;\n  background-color: #d3d3d336;\n}\n\n.bot-screenshot-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n\n#bot-screenshot-img[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbWlsZS9Eb2N1bWVudHMvQ09ERS9Qcm9qZWN0cy9CQi1Db2xsYWItYm90LUpTL2Rhc2hib2FyZC9zcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLWRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3RhcnQtYm90LWNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zdGF0dXQtYm90LWNhcmQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdGF0dXQtYm90LWNhcmQgPiBtYXQtY2FyZC1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zdGF0dXQtY29ubmVjdGlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDMzNjtcbn1cblxuLnN0YXJ0LWJvdC1jYXJkID4gbWF0LWNhcmQtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5zdGFydC1ib3QtY2FyZCA+IG1hdC1jYXJkLWNvbnRlbnQgPiBmb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogODAlO1xufVxuXG4jc3RhcnQtYnV0dG9uIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm1hdC1jYXJkLWhlYWRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWF0LWNhcmQge1xuICAgIG1hcmdpbjogMjBweCAzMHB4IDIwcHggMzBweDtcbn1cblxuLmNvbm5lY3RlZC1pY29uIHtcbiAgICBjb2xvcjogbGltZWdyZWVuO1xufVxuXG4ubm90LWNvbm5lY3RlZC1pY29uIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uc3RhdHV0LWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnN0YXR1dC1kaXYgPiAqe1xuICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbn1cblxuI2Rpc2Nvbm5lY3QtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbn1cblxuLnN0YXR1dC11cmwtZGl2ID4gc3BhbiB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uc3RhdHV0LXRpdGxlLWRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdGF0dXQtdGl0bGUtZGl2ID4gc3BhbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5ib3Qtc3BlYWstY2FyZCB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzMzY7XG59XG5cbi5ib3Qtc3BlYWstdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYm90LXNwZWFrLWJ1dHRvbnMtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ib3Qtc3BlYWstYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYm90LXNwZWFrLWZvcm1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uYm90LXNjcmVlbnNob3QtY2FyZCB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDMzNjtcbn1cblxuLmJvdC1zY3JlZW5zaG90LWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jYm90LXNjcmVlbnNob3QtaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiI21haW4tZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3RhcnQtYm90LWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zdGF0dXQtYm90LWNhcmQge1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdGF0dXQtYm90LWNhcmQgPiBtYXQtY2FyZC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc3RhdHV0LWNvbm5lY3Rpb24tY2FyZCB7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDMzNjtcbn1cblxuLnN0YXJ0LWJvdC1jYXJkID4gbWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5zdGFydC1ib3QtY2FyZCA+IG1hdC1jYXJkLWNvbnRlbnQgPiBmb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbiNzdGFydC1idXR0b24ge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm1hdC1jYXJkLWhlYWRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5tYXQtY2FyZCB7XG4gIG1hcmdpbjogMjBweCAzMHB4IDIwcHggMzBweDtcbn1cblxuLmNvbm5lY3RlZC1pY29uIHtcbiAgY29sb3I6IGxpbWVncmVlbjtcbn1cblxuLm5vdC1jb25uZWN0ZWQtaWNvbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zdGF0dXQtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnN0YXR1dC1kaXYgPiAqIHtcbiAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xufVxuXG4jZGlzY29ubmVjdC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4uc3RhdHV0LXVybC1kaXYgPiBzcGFuIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uc3RhdHV0LXRpdGxlLWRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3RhdHV0LXRpdGxlLWRpdiA+IHNwYW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYm90LXNwZWFrLWNhcmQge1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzMzY7XG59XG5cbi5ib3Qtc3BlYWstdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvdC1zcGVhay1idXR0b25zLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ib3Qtc3BlYWstYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5ib3Qtc3BlYWstZm9ybWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmJvdC1zY3JlZW5zaG90LWNhcmQge1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDMzNjtcbn1cblxuLmJvdC1zY3JlZW5zaG90LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI2JvdC1zY3JlZW5zaG90LWltZyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] }, { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }]; }, { commands: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['commands']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RegisterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 2, vars: 0, template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "register works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/soundboard/soundboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/soundboard/soundboard.component.ts ***!
  \**********************************************************/
/*! exports provided: SoundboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundboardComponent", function() { return SoundboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









function SoundboardComponent_mat_grid_tile_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SoundboardComponent_mat_grid_tile_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const sound_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.playSound(sound_r22.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "music_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sound_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", sound_r22.name, " ");
} }
class SoundboardComponent {
    constructor(httpService, toastService) {
        this.httpService = httpService;
        this.toastService = toastService;
        this.cols = 0;
    }
    ngOnInit() {
        this.httpService.get('sounds').toPromise().then(sounds => {
            this.sounds = sounds;
            this.cols = Math.round(Math.sqrt(this.sounds.length));
        });
    }
    playSound(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.httpService.post('sound', { name }).toPromise();
            if (!res) {
                this.toastService.showToast('Aucun BOT connecté pour le moment...', 5000);
            }
        });
    }
}
SoundboardComponent.ɵfac = function SoundboardComponent_Factory(t) { return new (t || SoundboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"])); };
SoundboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SoundboardComponent, selectors: [["app-soundboard"]], decls: 3, vars: 2, consts: [["id", "sounds-grid-div"], ["id", "sounds-grid-list", "rowHeight", "3:1", 3, "cols"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 1, "sound-card-button", 3, "click"], [1, "sound-card-span"]], template: function SoundboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SoundboardComponent_mat_grid_tile_2_Template, 6, 1, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cols", ctx.cols);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sounds);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTile"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: ["#sounds-grid-list[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n#sounds-grid-div[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: flex;\n  justify-content: center;\n}\n\n.mat-grid-tile[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.sound-card-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.sound-card-span[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  text-transform: uppercase;\n}\n\n.sound-card-span[_ngcontent-%COMP%]    > .mat-icon[_ngcontent-%COMP%] {\n  font-size: xxx-large;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbWlsZS9Eb2N1bWVudHMvQ09ERS9Qcm9qZWN0cy9CQi1Db2xsYWItYm90LUpTL2Rhc2hib2FyZC9zcmMvYXBwL3BhZ2VzL3NvdW5kYm9hcmQvc291bmRib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc291bmRib2FyZC9zb3VuZGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zb3VuZGJvYXJkL3NvdW5kYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc291bmRzLWdyaWQtbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jc291bmRzLWdyaWQtZGl2IHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1hdC1ncmlkLXRpbGUge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLnNvdW5kLWNhcmQtYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zb3VuZC1jYXJkLXNwYW4ge1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNvdW5kLWNhcmQtc3BhbiA+IC5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiB4eHgtbGFyZ2U7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufSIsIiNzb3VuZHMtZ3JpZC1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI3NvdW5kcy1ncmlkLWRpdiB7XG4gIG1hcmdpbjogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXQtZ3JpZC10aWxlIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uc291bmQtY2FyZC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc291bmQtY2FyZC1zcGFuIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNvdW5kLWNhcmQtc3BhbiA+IC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SoundboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-soundboard',
                templateUrl: './soundboard.component.html',
                styleUrls: ['./soundboard.component.scss']
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class HttpService {
    constructor(http) {
        this.http = http;
        this.urlApi = '/api';
    }
    get(tag) {
        return this.http.get(this.urlApi + tag);
    }
    post(tag, postParams) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.urlApi + tag, JSON.stringify(postParams), httpOptions);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




class SocketService {
    constructor() {
        this.urlApi = '/';
        this.alive = true;
    }
    setup() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.urlApi);
        this.alive = true;
        this.socket.on('connect_error', () => {
            this.alive = false;
        });
        this.socket.on('reconnect', () => {
            this.alive = true;
        });
        this.socket.on('connect', () => {
            this.alive = true;
        });
    }
    emit(tag, params) {
        this.socket.emit(tag, params);
    }
    subscribe(tag) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.socket.on(tag, (info) => {
                observer.next(info);
            });
        });
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");



class ToastService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    showToast(message, duration) {
        this.snackBar.open(message, null, {
            duration
        });
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/emile/Documents/CODE/Projects/BB-Collab-bot-JS/dashboard/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map