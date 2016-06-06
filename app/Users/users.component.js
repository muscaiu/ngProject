System.register(['angular2/core', 'angular2/router', './user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_userService) {
                    this._userService = _userService;
                    this.isLoading = true;
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (x) {
                        _this.users = x;
                        _this.isLoading = false;
                    });
                };
                UsersComponent.prototype.deleteUser = function (user) {
                    var _this = this;
                    if (confirm("Are u sure u want to delete" + user.name + "?")) {
                        var index = this.users.indexOf(user);
                        this.users.splice(index, 1);
                        this._userService.deleteUser(user.id)
                            .subscribe(null, function (err) {
                            alert("Could not delete the user.");
                            _this.users.splice(index, 0, user);
                        });
                    }
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        templateUrl: 'dev/Users/users.component.html',
                        providers: [user_service_1.UserService],
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXJzL3VzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUlJLHdCQUFvQixZQUF3QjtvQkFBeEIsaUJBQVksR0FBWixZQUFZLENBQVk7b0JBSDVDLGNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBS2pCLENBQUM7Z0JBRUQsaUNBQVEsR0FBUjtvQkFBQSxpQkFNQztvQkFMRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTt5QkFDdkIsU0FBUyxDQUFDLFVBQUEsQ0FBQzt3QkFDUixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzt3QkFDZixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDM0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFFRCxtQ0FBVSxHQUFWLFVBQVcsSUFBSTtvQkFBZixpQkFhQztvQkFaRyxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ3pELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO3dCQUVwQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBRTVCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7NkJBQ2hDLFNBQVMsQ0FBQyxJQUFJLEVBQ1gsVUFBQSxHQUFHOzRCQUNDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOzRCQUNwQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUN0QyxDQUFDLENBQUMsQ0FBQztvQkFDZixDQUFDO2dCQUNMLENBQUM7Z0JBcENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLE9BQU87d0JBQ2hCLFdBQVcsRUFBRSxnQ0FBZ0M7d0JBQzdDLFNBQVMsRUFBQyxDQUFDLDBCQUFXLENBQUM7d0JBQ3ZCLFVBQVUsRUFBRSxDQUFDLG1CQUFVLENBQUM7cUJBQzNCLENBQUM7O2tDQUFBO2dCQWdDRixxQkFBQztZQUFELENBOUJBLEFBOEJDLElBQUE7WUE5QkQsMkNBOEJDLENBQUEiLCJmaWxlIjoiVXNlcnMvdXNlcnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyTGluayB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOid1c2VycycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi9Vc2Vycy91c2Vycy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6W1VzZXJTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtSb3V0ZXJMaW5rXSBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2Vyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIGlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB1c2VycyA6IGFueTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdXNlclNlcnZpY2U6VXNlclNlcnZpY2Upe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmdldFVzZXJzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSB4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7ICAgIFxyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgZGVsZXRlVXNlcih1c2VyKXtcclxuICAgICAgICBpZihjb25maXJtKFwiQXJlIHUgc3VyZSB1IHdhbnQgdG8gZGVsZXRlXCIgKyB1c2VyLm5hbWUgKyBcIj9cIikpe1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnVzZXJzLmluZGV4T2YodXNlcilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMudXNlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmRlbGV0ZVVzZXIodXNlci5pZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUobnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkNvdWxkIG5vdCBkZWxldGUgdGhlIHVzZXIuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJzLnNwbGljZShpbmRleCwgMCwgdXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
