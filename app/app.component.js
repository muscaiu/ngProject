System.register(['angular2/core', 'angular2/router', './navbar.component', './home.component', './users.component', './project.component'], function(exports_1, context_1) {
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
    var core_1, router_1, navbar_component_1, home_component_1, users_component_1, project_component_1;
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
            function (project_component_1_1) {
                project_component_1 = project_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent },
                        { path: '/users', name: 'Users', component: users_component_1.UsersComponent },
                        { path: '/project', name: 'Project', component: project_component_1.ProjectComponent },
                        { path: '/*other', name: 'Home', redirectTo: ['Home'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <navbar></navbar>\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n    ",
                        directives: [navbar_component_1.NavbarComponent,
                            home_component_1.HomeComponent,
                            users_component_1.UsersComponent,
                            project_component_1.ProjectComponent,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF2QkQ7b0JBQUMsb0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQzt3QkFDbkQsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7d0JBQzFELEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBQzt3QkFDaEUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUM7cUJBQ3hELENBQUM7b0JBRUQsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFDLG1IQUtSO3dCQUNELFVBQVUsRUFBRSxDQUFDLGtDQUFlOzRCQUNmLDhCQUFhOzRCQUNiLGdDQUFjOzRCQUNkLG9DQUFnQjs0QkFDaEIsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20nYW5ndWxhcjIvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHtOYXZiYXJDb21wb25lbnR9IGZyb20gJy4vbmF2YmFyLmNvbXBvbmVudCdcclxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuL2hvbWUuY29tcG9uZW50J1xyXG5pbXBvcnQge1VzZXJzQ29tcG9uZW50fSBmcm9tICcuL3VzZXJzLmNvbXBvbmVudCdcclxuaW1wb3J0IHtQcm9qZWN0Q29tcG9uZW50fSBmcm9tICcuL3Byb2plY3QuY29tcG9uZW50J1xyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHtwYXRoOiAnLycsIG5hbWU6ICdIb21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnL3VzZXJzJywgbmFtZTogJ1VzZXJzJywgY29tcG9uZW50OiBVc2Vyc0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9wcm9qZWN0JywgbmFtZTogJ1Byb2plY3QnLCBjb21wb25lbnQ6IFByb2plY3RDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvKm90aGVyJywgbmFtZTogJ0hvbWUnLCByZWRpcmVjdFRvOiBbJ0hvbWUnXX1cclxuXSlcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgPG5hdmJhcj48L25hdmJhcj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIGAgLFxyXG4gICAgZGlyZWN0aXZlczogW05hdmJhckNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgIFVzZXJzQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgIFByb2plY3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
