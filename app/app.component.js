System.register(['angular2/core', 'angular2/router', './Nav/navbar.component', './Home/home.component', './Users/users.component', './Posts/posts.component', './Users/user-form.component'], function(exports_1, context_1) {
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
                            //  HomeComponent,
                            //  UsersComponent,
                            //  PostsComponent,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF4QkQ7b0JBQUMsb0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQzt3QkFDbkQsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7d0JBQzFELEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBQzt3QkFDbkUsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7d0JBQzFELEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFDO3FCQUN4RCxDQUFDO29CQUVELGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBQyxtSEFLUjt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZTs0QkFDaEIsa0JBQWtCOzRCQUNsQixtQkFBbUI7NEJBQ25CLG1CQUFtQjs0QkFDbEIsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20nYW5ndWxhcjIvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHtOYXZiYXJDb21wb25lbnR9IGZyb20gJy4vTmF2L25hdmJhci5jb21wb25lbnQnXHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi9Ib21lL2hvbWUuY29tcG9uZW50J1xyXG5pbXBvcnQge1VzZXJzQ29tcG9uZW50fSBmcm9tICcuL1VzZXJzL3VzZXJzLmNvbXBvbmVudCdcclxuaW1wb3J0IHtQb3N0c0NvbXBvbmVudH0gZnJvbSAnLi9Qb3N0cy9wb3N0cy5jb21wb25lbnQnXHJcbmltcG9ydCB7VXNlckZvcm1Db21wb25lbnR9IGZyb20gJy4vVXNlcnMvdXNlci1mb3JtLmNvbXBvbmVudCdcclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICB7cGF0aDogJy8nLCBuYW1lOiAnSG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy91c2VycycsIG5hbWU6ICdVc2VycycsIGNvbXBvbmVudDogVXNlcnNDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvdXNlcnMvbmV3JywgbmFtZTogJ05ld1VzZXInLCBjb21wb25lbnQ6IFVzZXJGb3JtQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3Bvc3RzJywgbmFtZTogJ1Bvc3RzJywgY29tcG9uZW50OiBQb3N0c0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy8qb3RoZXInLCBuYW1lOiAnSG9tZScsIHJlZGlyZWN0VG86IFsnSG9tZSddfVxyXG5dKVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICA8bmF2YmFyPjwvbmF2YmFyPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgIDwvZGl2PlxyXG4gICAgYCAsXHJcbiAgICBkaXJlY3RpdmVzOiBbTmF2YmFyQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgLy8gIEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAvLyAgVXNlcnNDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAvLyAgUG9zdHNDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
