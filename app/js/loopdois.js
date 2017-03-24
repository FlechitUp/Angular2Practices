System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var loopdois;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            loopdois = (function () {
                function loopdois() {
                    this.sayi = 0;
                }
                loopdois.prototype.eylen = function () {
                    return "mermela " + this.sayi;
                };
                loopdois = __decorate([
                    core_1.Component({
                        selector: 'loopdois',
                        template: "<button (click)=\"sayi=sayi+1\" > + </button> <button (click)=\"sayi=sayi-1\"> - </button>\n    <h1>{{sayi}}</h1>\n    <br>\n    <h1 [ngClass]=\"{'red':sayi>6}\"> mermela </h1>\n    <br>\n    <input \n    [ngStyle]=\"{\n        backgroundColor:sayi>5 ? 'blue':'gray',\n        color:sayi>5 ? 'white':'gray'\n    }\"\n     type=\"text\" [placeholder]=\"eylen()\" >\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], loopdois);
                return loopdois;
            }());
            exports_1("loopdois", loopdois);
        }
    }
});
//# sourceMappingURL=loopdois.js.map