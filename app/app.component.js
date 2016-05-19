System.register(['angular2/core', 'angular2/router', './navbar.component', './Home/home.component', './Users/users.component', './Posts/posts.component'], function(exports_1, context_1) {
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
    var core_1, router_1, navbar_component_1, home_component_1, users_component_1, posts_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent },
                        { path: '/users', name: 'Users', component: users_component_1.UsersComponent },
                        { path: '/posts', name: 'Posts', component: posts_component_1.PostsComponent },
                        { path: '/*other', name: 'Home', redirectTo: ['Home'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <navbar></navbar>\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n    ",
                        directives: [navbar_component_1.NavbarComponent,
                            home_component_1.HomeComponent,
                            users_component_1.UsersComponent,
                            posts_component_1.PostsComponent,
                            router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF2QkQ7b0JBQUMsb0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQzt3QkFDbkQsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7d0JBQzFELEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO3dCQUMxRCxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBQztxQkFDeEQsQ0FBQztvQkFFRCxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUMsbUhBS1I7d0JBQ0QsVUFBVSxFQUFFLENBQUMsa0NBQWU7NEJBQ2YsOEJBQWE7NEJBQ2IsZ0NBQWM7NEJBQ2QsZ0NBQWM7NEJBQ2QsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20nYW5ndWxhcjIvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHtOYXZiYXJDb21wb25lbnR9IGZyb20gJy4vbmF2YmFyLmNvbXBvbmVudCdcclxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuL0hvbWUvaG9tZS5jb21wb25lbnQnXHJcbmltcG9ydCB7VXNlcnNDb21wb25lbnR9IGZyb20gJy4vVXNlcnMvdXNlcnMuY29tcG9uZW50J1xyXG5pbXBvcnQge1Bvc3RzQ29tcG9uZW50fSBmcm9tICcuL1Bvc3RzL3Bvc3RzLmNvbXBvbmVudCdcclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICB7cGF0aDogJy8nLCBuYW1lOiAnSG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy91c2VycycsIG5hbWU6ICdVc2VycycsIGNvbXBvbmVudDogVXNlcnNDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvcG9zdHMnLCBuYW1lOiAnUG9zdHMnLCBjb21wb25lbnQ6IFBvc3RzQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnLypvdGhlcicsIG5hbWU6ICdIb21lJywgcmVkaXJlY3RUbzogWydIb21lJ119XHJcbl0pXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxuYXZiYXI+PC9uYXZiYXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgICxcclxuICAgIGRpcmVjdGl2ZXM6IFtOYXZiYXJDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICBVc2Vyc0NvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICBQb3N0c0NvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICBST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
