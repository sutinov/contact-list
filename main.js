(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/Desktop/contact-list/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "BjQp":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component */ "bzTf");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "E6zI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ContactModule {
}
ContactModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ContactModule });
ContactModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ContactModule_Factory(t) { return new (t || ContactModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ContactModule, { declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_1__["ContactComponent"], _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_2__["ContactListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_contact_component__WEBPACK_IMPORTED_MODULE_1__["ContactComponent"]] }); })();


/***/ }),

/***/ "E6zI":
/*!****************************************************************!*\
  !*** ./src/app/contact/contact-list/contact-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ContactListComponent_div_0_img_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} }
function ContactListComponent_div_0_img_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} }
function ContactListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Last Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Phone Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Favorite: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ContactListComponent_div_0_img_24_Template, 1, 0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ContactListComponent_div_0_img_25_Template, 1, 0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", contact_r1.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r1.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r1.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r1.mobilePhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contact_r1.favorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !contact_r1.favorite);
} }
class ContactListComponent {
    constructor() {
        this.myContact = [
            {
                contactId: 'PizcKmQaqZeQSgYChcxT8Q==',
                firstName: 'Alphonso',
                lastName: 'Atto',
                mobilePhone: '(663) 6674065',
                homePhone: '57(293)445-1965',
                email: 'aatto2r@topsy.com',
                address: '8083 Artisan Junction',
                website: 'https://purevolume.com/est.aspx',
                photo: 'https://randomuser.me/api/portraits/men/63.jpg',
                favorite: true,
                category: 'Friends',
                gender: 'Male',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: 'JVn5gisoA++Hdd66u4qfAA==',
                firstName: 'Armin',
                lastName: 'Dakers',
                mobilePhone: '(894) 2189244',
                homePhone: '57(820)681-8298',
                email: 'adakers14@acquirethisname.com',
                address: '90123 Nelson Junction',
                website: 'https://samsung.com/fringilla/rhoncus.jpg',
                photo: 'https://randomuser.me/api/portraits/men/96.jpg',
                favorite: true,
                category: 'Friends',
                gender: 'Male',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: 'zdP8y9PpaLmZFdTY+9K8vA==',
                firstName: 'Augy',
                lastName: 'Mapother',
                mobilePhone: '(606) 9639101',
                homePhone: '356(906)559-1232',
                email: 'amapother2q@yelp.com',
                address: '2 Fordem Trail',
                website: 'http://state.gov/tempor/convallis/nulla/neque/libero/convallis.aspx',
                photo: 'https://randomuser.me/api/portraits/men/77.jpg',
                favorite: true,
                category: 'Colleagues',
                gender: 'Male',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: '5JVHUuSESnoM+sgalfRZWg==',
                firstName: 'Bartram',
                lastName: 'Speak',
                mobilePhone: '(104) 6082269',
                homePhone: '216(966)463-3285',
                email: 'bspeak2h@nydailynews.com',
                address: '1 Grasskamp Plaza',
                website: 'http://usa.gov/purus.html',
                photo: 'https://randomuser.me/api/portraits/men/9.jpg',
                favorite: false,
                category: 'Friends',
                gender: 'Male',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: 'VqPcmegvyq2NqG087WgkLg==',
                firstName: 'Biron',
                lastName: 'Kuhnel',
                mobilePhone: '(369) 7534379',
                homePhone: '60(183)917-2043',
                email: 'bkuhnel25@imageshack.us',
                address: '856 Starling Avenue',
                website: 'https://va.gov/integer/pede/justo/lacinia.aspx',
                photo: 'https://randomuser.me/api/portraits/men/88.jpg',
                favorite: true,
                category: 'Colleagues',
                gender: 'Male',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: 'HdmCJRNuUYCjb32K7udHgQ==',
                firstName: 'Bruno',
                lastName: 'Gaskamp',
                mobilePhone: '(741) 6878052',
                homePhone: '86(419)752-3853',
                email: 'bgaskampe@opensource.org',
                address: '936 Granby Drive',
                website: 'https://sakura.ne.jp/pede/ac.jsp',
                photo: 'https://randomuser.me/api/portraits/men/6.jpg',
                favorite: false,
                category: 'Family',
                gender: 'Male',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: 'GNt7sWaKdSJ9ewaEi82LuQ==',
                firstName: 'Carey',
                lastName: 'Hansom',
                mobilePhone: '(169) 7654822',
                homePhone: '48(821)361-7898',
                email: 'chansom27@sciencedaily.com',
                address: '57997 Cambridge Street',
                website: 'https://slate.com/sagittis/nam.js',
                photo: 'https://randomuser.me/api/portraits/men/82.jpg',
                favorite: true,
                category: 'Friends',
                gender: 'Male',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: 'pAVakzynE9hWEgc8l4MfJQ==',
                firstName: 'Chloe',
                lastName: 'Cousens',
                mobilePhone: '(144) 9516543',
                homePhone: '692(641)304-4464',
                email: 'ccousens2s@opera.com',
                address: '96 Arizona Parkway',
                website: 'http://nydailynews.com/pede/lobortis/ligula/sit.png',
                photo: 'https://randomuser.me/api/portraits/women/1.jpg',
                favorite: false,
                category: 'Family',
                gender: 'Female',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: '6Nc0SIfpqC8/8Y2+pdd7/g==',
                firstName: 'Chloette',
                lastName: 'Lebarree',
                mobilePhone: '(680) 8495986',
                homePhone: '1(515)550-5472',
                email: 'clebarree7@npr.org',
                address: '93540 Ludington Terrace',
                website: 'https://techcrunch.com/aenean/lectus/pellentesque/eget/nunc/donec.js',
                photo: 'https://randomuser.me/api/portraits/women/5.jpg',
                favorite: false,
                category: 'Friends',
                gender: 'Female',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: 'JidD2M5vk0+ddW453Ekjsw==',
                firstName: 'Clem',
                lastName: 'McDermid',
                mobilePhone: '(638) 9733397',
                homePhone: '86(818)734-1139',
                email: 'cmcdermid1l@mozilla.com',
                address: '9628 Mccormick Drive',
                website: 'https://scientificamerican.com/auctor/gravida/sem/praesent/id.jsp',
                photo: 'https://randomuser.me/api/portraits/women/33.jpg',
                favorite: true,
                category: 'Friends',
                gender: 'Female',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: 'sijV0tN3tdZ4tNcZguK2YQ==',
                firstName: 'Dagny',
                lastName: 'Ithell',
                mobilePhone: '(208) 8606504',
                homePhone: '81(332)422-0572',
                email: 'dithell8@chicagotribune.com',
                address: '9 5th Trail',
                website: 'https://friendfeed.com/elit/sodales/scelerisque/mauris.html',
                photo: 'https://randomuser.me/api/portraits/men/29.jpg',
                favorite: false,
                category: 'Colleagues',
                gender: 'Male',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: '6FkpRfHODxbgK9yqv0R3Zg==',
                firstName: 'Delilah',
                lastName: 'Witherspoon',
                mobilePhone: '(259) 1331643',
                homePhone: '7(742)894-0431',
                email: 'dwitherspoon2o@mac.com',
                address: '89 Crownhardt Way',
                website: 'https://storify.com/vel/nisl/duis.json',
                photo: 'https://randomuser.me/api/portraits/women/73.jpg',
                favorite: false,
                category: 'Colleagues',
                gender: 'Female',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: 'B0CDwk21tquCzf/BH2sBsA==',
                firstName: 'Dermot',
                lastName: 'Rief',
                mobilePhone: '(304) 3855183',
                homePhone: '375(931)625-4021',
                email: 'driefm@msu.edu',
                address: '690 Center Alley',
                website: 'http://rambler.ru/phasellus/in/felis.aspx',
                photo: 'https://randomuser.me/api/portraits/men/32.jpg',
                favorite: true,
                category: 'Colleagues',
                gender: 'Male',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: 'gQbmXXdCQhLxfgbiGskbHg==',
                firstName: 'Fanchette',
                lastName: 'Norker',
                mobilePhone: '(516) 5026439',
                homePhone: '251(690)803-1393',
                email: 'fnorker1i@godaddy.com',
                address: '77 Nobel Plaza',
                website: 'http://usa.gov/sapien/cursus/vestibulum/proin/eu/mi.html',
                photo: 'https://randomuser.me/api/portraits/women/24.jpg',
                favorite: false,
                category: 'Family',
                gender: 'Female',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: 'nOA8FgfEIUYbvVAFbsvXdg==',
                firstName: 'Fleming',
                lastName: 'Laherty',
                mobilePhone: '(843) 1152305',
                homePhone: '1(516)840-8530',
                email: 'flaherty2i@cdc.gov',
                address: '0 Melvin Trail',
                website: 'https://usda.gov/curae/nulla/dapibus/dolor.html',
                photo: 'https://randomuser.me/api/portraits/men/38.jpg',
                favorite: true,
                category: 'Colleagues',
                gender: 'Male',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: 'Fsg9/kcDTeO7uhIQCrd7Jw==',
                firstName: 'Gabriella',
                lastName: 'Riddock',
                mobilePhone: '(282) 4433444',
                homePhone: '7(969)208-9365',
                email: 'griddocki@ucoz.com',
                address: '3 Stuart Trail',
                website: 'https://omniture.com/nisi/nam/ultrices/libero/non/mattis.jsp',
                photo: 'https://randomuser.me/api/portraits/women/92.jpg',
                favorite: true,
                category: 'Family',
                gender: 'Female',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: 'NjbTbYmImwyJ2J0lPgacTw==',
                firstName: 'Gene',
                lastName: 'Raraty',
                mobilePhone: '(426) 2401249',
                homePhone: '55(233)514-1805',
                email: 'graraty2m@va.gov',
                address: '5790 Heffernan Pass',
                website: 'https://ebay.co.uk/interdum/mauris.js',
                photo: 'https://randomuser.me/api/portraits/women/88.jpg',
                favorite: false,
                category: 'Friends',
                gender: 'Female',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: 'axD9Yf/Muj6iAMF9UIDxyA==',
                firstName: 'Georgianne',
                lastName: 'Lovejoy',
                mobilePhone: '(606) 6763039',
                homePhone: '358(910)420-3838',
                email: 'glovejoyu@unesco.org',
                address: '5 Valley Edge Junction',
                website: 'https://chron.com/morbi/non/quam/nec.js',
                photo: 'https://randomuser.me/api/portraits/women/27.jpg',
                favorite: false,
                category: 'Family',
                gender: 'Female',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: 'q5vJ70C7whRLqW4xWcRm7w==',
                firstName: 'Gloriana',
                lastName: 'Cowl',
                mobilePhone: '(164) 6017007',
                homePhone: '86(571)563-6323',
                email: 'gcowl1v@oaic.gov.au',
                address: '177 Clyde Gallagher Pass',
                website: 'http://guardian.co.uk/vitae/nisl/aenean.json',
                photo: 'https://randomuser.me/api/portraits/women/45.jpg',
                favorite: true,
                category: 'Friends',
                gender: 'Female',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: '4aJRiguSFuI2oH3r9FQ/Yg==',
                firstName: 'Godfry',
                lastName: 'Livsey',
                mobilePhone: '(200) 8313163',
                homePhone: '7(694)572-8989',
                email: 'glivseyd@nationalgeographic.com',
                address: '78960 Shopko Way',
                website: 'https://cargocollective.com/tempor/turpis/nec/euismod/scelerisque/quam/turpis.js',
                photo: 'https://randomuser.me/api/portraits/men/60.jpg',
                favorite: true,
                category: 'Friends',
                gender: 'Male',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
            {
                contactId: 'GHTWjSPEhiLbUCY/XkDeHw==',
                firstName: 'Gregorio',
                lastName: 'Dobsons',
                mobilePhone: '(619) 8245575',
                homePhone: '62(833)173-0136',
                email: 'gdobsons2n@marketwatch.com',
                address: '74744 Lyons Trail',
                website: 'https://ftc.gov/lacus/curabitur/at/ipsum/ac/tellus.png',
                photo: 'https://randomuser.me/api/portraits/men/61.jpg',
                favorite: true,
                category: 'Friends',
                gender: 'Male',
                userId: '32sgEH9kVQ2T30UXYN09qA==',
            },
        ];
    }
    ngOnInit() { }
}
ContactListComponent.ɵfac = function ContactListComponent_Factory(t) { return new (t || ContactListComponent)(); };
ContactListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactListComponent, selectors: [["contact-list"]], decls: 1, vars: 1, consts: [["class", "contact-card", 4, "ngFor", "ngForOf"], [1, "contact-card"], [1, "image-wrapper"], ["alt", "", 1, "profile-pic", 3, "src"], [1, "contact-info"], [1, "favorite"], ["class", "star", "src", "../../../assets/img/favorite.png", "alt", "", 4, "ngIf"], ["class", "star", "src", "../../../assets/img/star.png", "alt", "", 4, "ngIf"], ["src", "../../../assets/img/favorite.png", "alt", "", 1, "star"], ["src", "../../../assets/img/star.png", "alt", "", 1, "star"]], template: function ContactListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactListComponent_div_0_Template, 26, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myContact);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".contact-card[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 400px;\n  background-color: azure;\n  border: 2px solid gray;\n  float: left;\n  margin-left: 20px;\n  margin-bottom: 20px;\n}\n.image-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 15px;\n}\n.profile-pic[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.contact-info[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.star[_ngcontent-%COMP%] {\n  width: 32px;\n}\n.favorite[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJjb250YWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LWNhcmQge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaW1hZ2Utd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5wcm9maWxlLXBpYyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jb250YWN0LWluZm8ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY29udGFjdC1pbmZvIHAge1xuICBtYXJnaW46IDEwcHg7XG59XG4uc3RhciB7XG4gIHdpZHRoOiAzMnB4O1xufVxuXG4uZmF2b3JpdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");


class AppComponent {
    constructor() {
        this.title = 'contact-list';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "contact");
    } }, directives: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__["ContactComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.module */ "BjQp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _contact_contact_module__WEBPACK_IMPORTED_MODULE_2__["ContactModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _contact_contact_module__WEBPACK_IMPORTED_MODULE_2__["ContactModule"]] }); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "E6zI");


class ContactComponent {
    constructor() { }
    ngOnInit() { }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["contact"]], decls: 4, vars: 0, consts: [[1, "wrapper"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List of contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "contact-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_1__["ContactListComponent"]], styles: ["h3[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: bisque;\n  padding: 10px 20px;\n  font-size: 2rem;\n}\n.wrapper[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLndyYXBwZXIge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map