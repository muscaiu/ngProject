System.register(['angular2/core', 'angular2/router', './navbar.component', './Home/home.component', './Users/users.component', './Posts/posts.component', './Users/user-form.component'], function(exports_1, context_1) {
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
    var core_1, router_1, navbar_component_1, home_component_1, users_component_1, posts_component_1, user_form_component_1;
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
            },
            function (user_form_component_1_1) {
                user_form_component_1 = user_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent },
                        { path: '/users', name: 'Users', component: users_component_1.UsersComponent },
                        { path: '/users/new', name: 'NewUser', component: user_form_component_1.UserFormComponent },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF4QkQ7b0JBQUMsb0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQzt3QkFDbkQsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7d0JBQzFELEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBQzt3QkFDbkUsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7d0JBQzFELEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFDO3FCQUN4RCxDQUFDO29CQUVELGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBQyxtSEFLUjt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZTs0QkFDZiw4QkFBYTs0QkFDYixnQ0FBYzs0QkFDZCxnQ0FBYzs0QkFDZCwwQkFBaUIsQ0FBQztxQkFDbEMsQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSdhbmd1bGFyMi9yb3V0ZXInXHJcblxyXG5pbXBvcnQge05hdmJhckNvbXBvbmVudH0gZnJvbSAnLi9uYXZiYXIuY29tcG9uZW50J1xyXG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gJy4vSG9tZS9ob21lLmNvbXBvbmVudCdcclxuaW1wb3J0IHtVc2Vyc0NvbXBvbmVudH0gZnJvbSAnLi9Vc2Vycy91c2Vycy5jb21wb25lbnQnXHJcbmltcG9ydCB7UG9zdHNDb21wb25lbnR9IGZyb20gJy4vUG9zdHMvcG9zdHMuY29tcG9uZW50J1xyXG5pbXBvcnQge1VzZXJGb3JtQ29tcG9uZW50fSBmcm9tICcuL1VzZXJzL3VzZXItZm9ybS5jb21wb25lbnQnXHJcblxyXG5AUm91dGVDb25maWcoW1xyXG4gICAge3BhdGg6ICcvJywgbmFtZTogJ0hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvdXNlcnMnLCBuYW1lOiAnVXNlcnMnLCBjb21wb25lbnQ6IFVzZXJzQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3VzZXJzL25ldycsIG5hbWU6ICdOZXdVc2VyJywgY29tcG9uZW50OiBVc2VyRm9ybUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9wb3N0cycsIG5hbWU6ICdQb3N0cycsIGNvbXBvbmVudDogUG9zdHNDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvKm90aGVyJywgbmFtZTogJ0hvbWUnLCByZWRpcmVjdFRvOiBbJ0hvbWUnXX1cclxuXSlcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgPG5hdmJhcj48L25hdmJhcj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIGAgLFxyXG4gICAgZGlyZWN0aXZlczogW05hdmJhckNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgIFVzZXJzQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgIFBvc3RzQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgIFJPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
