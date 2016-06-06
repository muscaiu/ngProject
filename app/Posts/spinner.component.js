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
    var SpinnerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SpinnerComponent = (function () {
                function SpinnerComponent() {
                    this.visible = true;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SpinnerComponent.prototype, "visible", void 0);
                SpinnerComponent = __decorate([
                    core_1.Component({
                        selector: 'spinner',
                        template: "\n    \t<i *ngIf=\"visible\" class=\"fa fa-spinner fa-spin fa-3x\"></i>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SpinnerComponent);
                return SpinnerComponent;
            }());
            exports_1("SpinnerComponent", SpinnerComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBvc3RzL3NwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBQUE7b0JBQ2EsWUFBTyxHQUFHLElBQUksQ0FBQztnQkFDNUIsQ0FBQztnQkFERztvQkFBQyxZQUFLLEVBQUU7O2lFQUFBO2dCQVJaO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSwrRUFFVDtxQkFDSixDQUFDOztvQ0FBQTtnQkFJRix1QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsK0NBRUMsQ0FBQSIsImZpbGUiOiJQb3N0cy9zcGlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3Bpbm5lcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgXHQ8aSAqbmdJZj1cInZpc2libGVcIiBjbGFzcz1cImZhIGZhLXNwaW5uZXIgZmEtc3BpbiBmYS0zeFwiPjwvaT5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGlubmVyQ29tcG9uZW50e1xyXG4gICAgQElucHV0KCkgdmlzaWJsZSA9IHRydWU7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
