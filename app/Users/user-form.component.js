System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                function UserFormComponent(fb) {
                    this.form = fb.group({
                        name: [],
                        email: [],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                UserFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'dev/Users/user-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], UserFormComponent);
                return UserFormComponent;
            }());
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXJzL3VzZXItZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFHSSwyQkFBWSxFQUFlO29CQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQ2pCLElBQUksRUFBRSxFQUFFO3dCQUNSLEtBQUssRUFBRSxFQUFFO3dCQUNULEtBQUssRUFBRSxFQUFFO3dCQUNULE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDOzRCQUNkLE1BQU0sRUFBRSxFQUFFOzRCQUNWLEtBQUssRUFBRSxFQUFFOzRCQUNULElBQUksRUFBRSxFQUFFOzRCQUNSLE9BQU8sRUFBRSxFQUFFO3lCQUNkLENBQUM7cUJBQ0wsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBbEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLG9DQUFvQztxQkFDcEQsQ0FBQzs7cUNBQUE7Z0JBaUJGLHdCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCxpREFnQkMsQ0FBQSIsImZpbGUiOiJVc2Vycy91c2VyLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi9Vc2Vycy91c2VyLWZvcm0uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyRm9ybUNvbXBvbmVudCAge1xyXG4gICAgZm9ybTogQ29udHJvbEdyb3VwO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpe1xyXG4gICAgICAgIHRoaXMuZm9ybSA9IGZiLmdyb3VwKHtcclxuICAgICAgICAgICAgbmFtZTogW10sXHJcbiAgICAgICAgICAgIGVtYWlsOiBbXSxcclxuICAgICAgICAgICAgcGhvbmU6IFtdLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiBmYi5ncm91cCh7XHJcbiAgICAgICAgICAgICAgICBzdHJlZXQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgc3VpdGU6IFtdLFxyXG4gICAgICAgICAgICAgICAgY2l0eTogW10sXHJcbiAgICAgICAgICAgICAgICB6aXBjb2RlOiBbXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
