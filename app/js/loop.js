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
    var loop;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            loop = (function () {
                function loop() {
                    this.veriler = ["araba", "tren", "metro", "metrobus"];
                }
                // Dictionary 
                //   veriler = [{"ad":"pez","soyad":"jewe"},{"ad":"alev","soyad":"Dila"}]
                loop.prototype.ekle = function () {
                    if (this.kutu != "") {
                        this.veriler.push(this.kutu);
                        this.kutu = "";
                    }
                };
                loop.prototype.sil = function (b) {
                    //alert(b);
                    //delete this.veriler[b];
                    this.veriler.splice(b, 1);
                };
                loop = __decorate([
                    core_1.Component({
                        styles: ["\n        ul{\n            list-style-type:none;\n        }\n    "],
                        selector: 'myloop',
                        template: "<br>\n    <input [class.blue]=\"!kutu\" type=\"text\" [(ngModel)]=\"kutu\"  (keyup.enter)=\"ekle()\"  /><button  [disabled]=\"!kutu\" class=\"btn btn-primary\"> ok </button>\n    <ul>\n    <li *ngFor=\"#veri of veriler;#i =index\"> <button (click)=\"sil(i)\"  class=\"btn btn-danger\">ok</button>  {{veri}}</li>  \n    </ul>",
                        styles: ["\n        ul{\n         background:dodgerblue;\n         color:#f5f5f5;   \n         list-style-type:none;\n        }\n\n        .blue{\n            color:#fff;     \n            background:blue;\n        }\n        li{\n           \n            box-shadow:0 0 5px blue;\n            margin:5px;\n        }\n    "],
                    }), 
                    __metadata('design:paramtypes', [])
                ], loop);
                return loop;
            }());
            exports_1("loop", loop);
        }
    }
});
//# sourceMappingURL=loop.js.map