System.register(['angular2/core', 'angular2/router', './Nav/navbar.component', './Home/home.component', './Users/users.component', './Posts/posts.component', './Users/user-form.component', './Users/not-found.component'], function(exports_1, context_1) {
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
    var core_1, router_1, navbar_component_1, home_component_1, users_component_1, posts_component_1, user_form_component_1, not_found_component_1;
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
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent },
                        { path: '/users', name: 'Users', component: users_component_1.UsersComponent },
                        { path: '/users/:id', name: 'EditUser', component: user_form_component_1.UserFormComponent },
                        { path: '/users/new', name: 'NewUser', component: user_form_component_1.UserFormComponent },
                        { path: '/posts', name: 'Posts', component: posts_component_1.PostsComponent },
                        { path: '/not-found', name: 'NotFound', component: not_found_component_1.NotFoundComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Home'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <navbar></navbar>\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n    ",
                        directives: [navbar_component_1.NavbarComponent,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF2QkQ7b0JBQUMsb0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTt3QkFDeEQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7d0JBQzVELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBRTt3QkFDdEUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFFO3dCQUNsRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTt3QkFDNUQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFFO3dCQUN6RSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtxQkFDeEQsQ0FBQztvQkFFRCxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUMsbUhBS1I7d0JBQ0QsVUFBVSxFQUFFLENBQUMsa0NBQWU7NEJBQ2YsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20nYW5ndWxhcjIvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHtOYXZiYXJDb21wb25lbnR9IGZyb20gJy4vTmF2L25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gJy4vSG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VXNlcnNDb21wb25lbnR9IGZyb20gJy4vVXNlcnMvdXNlcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHtQb3N0c0NvbXBvbmVudH0gZnJvbSAnLi9Qb3N0cy9wb3N0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1VzZXJGb3JtQ29tcG9uZW50fSBmcm9tICcuL1VzZXJzL3VzZXItZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQge05vdEZvdW5kQ29tcG9uZW50fSBmcm9tICcuL1VzZXJzL25vdC1mb3VuZC5jb21wb25lbnQnO1xyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHsgcGF0aDogJy8nLCBuYW1lOiAnSG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxyXG5cdHsgcGF0aDogJy91c2VycycsIG5hbWU6ICdVc2VycycsIGNvbXBvbmVudDogVXNlcnNDb21wb25lbnQgfSxcclxuXHR7IHBhdGg6ICcvdXNlcnMvOmlkJywgbmFtZTogJ0VkaXRVc2VyJywgY29tcG9uZW50OiBVc2VyRm9ybUNvbXBvbmVudCB9LFxyXG5cdHsgcGF0aDogJy91c2Vycy9uZXcnLCBuYW1lOiAnTmV3VXNlcicsIGNvbXBvbmVudDogVXNlckZvcm1Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJy9wb3N0cycsIG5hbWU6ICdQb3N0cycsIGNvbXBvbmVudDogUG9zdHNDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJy9ub3QtZm91bmQnLCBuYW1lOiAnTm90Rm91bmQnLCBjb21wb25lbnQ6IE5vdEZvdW5kQ29tcG9uZW50IH0sXHJcblx0eyBwYXRoOiAnLypvdGhlcicsIG5hbWU6ICdPdGhlcicsIHJlZGlyZWN0VG86IFsnSG9tZSddIH0gICAgICAgIFxyXG5dKVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICA8bmF2YmFyPjwvbmF2YmFyPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgIDwvZGl2PlxyXG4gICAgYCAsXHJcbiAgICBkaXJlY3RpdmVzOiBbTmF2YmFyQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgIFJPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
