System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var NavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NavbarComponent = (function () {
                function NavbarComponent(_router) {
                    this._router = _router;
                }
                NavbarComponent.prototype.isCurrentRoute = function (route) {
                    var instruction = this._router.generate(route);
                    return this._router.isRouteActive(instruction);
                };
                NavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'navbar',
                        templateUrl: 'dev/Nav/navbar.component.html',
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], NavbarComponent);
                return NavbarComponent;
            }());
            exports_1("NavbarComponent", NavbarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdi9uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQ0kseUJBQW9CLE9BQWM7b0JBQWQsWUFBTyxHQUFQLE9BQU8sQ0FBTztnQkFDbEMsQ0FBQztnQkFDRCx3Q0FBYyxHQUFkLFVBQWUsS0FBSztvQkFDaEIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRS9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDbkQsQ0FBQztnQkFiTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsK0JBQStCO3dCQUMzQyxVQUFVLEVBQUUsQ0FBQyxtQkFBVSxDQUFDO3FCQUM1QixDQUFDOzttQ0FBQTtnQkFVRixzQkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsNkNBUUMsQ0FBQSIsImZpbGUiOiJOYXYvbmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlckxpbmssIFJvdXRlcn0gZnJvbSdhbmd1bGFyMi9yb3V0ZXInXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25hdmJhcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi9OYXYvbmF2YmFyLmNvbXBvbmVudC5odG1sJyAgICBcclxuICAgICxkaXJlY3RpdmVzOiBbUm91dGVyTGlua10gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIpeyAgICAgICAgXHJcbiAgICB9XHJcbiAgICBpc0N1cnJlbnRSb3V0ZShyb3V0ZSl7XHJcbiAgICAgICAgdmFyIGluc3RydWN0aW9uID0gdGhpcy5fcm91dGVyLmdlbmVyYXRlKHJvdXRlKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm91dGVyLmlzUm91dGVBY3RpdmUoaW5zdHJ1Y3Rpb24pOyBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
