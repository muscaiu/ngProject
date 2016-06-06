System.register(['angular2/core', 'angular2/router', './user.service', '../CustomHtml/spinner.component'], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1, spinner_component_1;
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
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
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
                        directives: [router_1.RouterLink, spinner_component_1.SpinnerComponent]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXJzL3VzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUlJLHdCQUFvQixZQUF3QjtvQkFBeEIsaUJBQVksR0FBWixZQUFZLENBQVk7b0JBSDVDLGNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBS2pCLENBQUM7Z0JBRUQsaUNBQVEsR0FBUjtvQkFBQSxpQkFNQztvQkFMRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTt5QkFDdkIsU0FBUyxDQUFDLFVBQUEsQ0FBQzt3QkFDUixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzt3QkFDZixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDM0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFFRCxtQ0FBVSxHQUFWLFVBQVcsSUFBSTtvQkFBZixpQkFhQztvQkFaRyxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ3pELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO3dCQUVwQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBRTVCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7NkJBQ2hDLFNBQVMsQ0FBQyxJQUFJLEVBQ1gsVUFBQSxHQUFHOzRCQUNDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOzRCQUNwQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUN0QyxDQUFDLENBQUMsQ0FBQztvQkFDZixDQUFDO2dCQUNMLENBQUM7Z0JBcENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLE9BQU87d0JBQ2hCLFdBQVcsRUFBRSxnQ0FBZ0M7d0JBQzdDLFNBQVMsRUFBQyxDQUFDLDBCQUFXLENBQUM7d0JBQ3ZCLFVBQVUsRUFBRSxDQUFDLG1CQUFVLEVBQUMsb0NBQWdCLENBQUM7cUJBQzVDLENBQUM7O2tDQUFBO2dCQWdDRixxQkFBQztZQUFELENBOUJBLEFBOEJDLElBQUE7WUE5QkQsMkNBOEJDLENBQUEiLCJmaWxlIjoiVXNlcnMvdXNlcnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyTGluayB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7U3Bpbm5lckNvbXBvbmVudH0gZnJvbSAnLi4vQ3VzdG9tSHRtbC9zcGlubmVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOid1c2VycycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi9Vc2Vycy91c2Vycy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6W1VzZXJTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtSb3V0ZXJMaW5rLFNwaW5uZXJDb21wb25lbnRdIFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHVzZXJzIDogYW55O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91c2VyU2VydmljZTpVc2VyU2VydmljZSl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuZ2V0VXNlcnMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTsgICAgXHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICBkZWxldGVVc2VyKHVzZXIpe1xyXG4gICAgICAgIGlmKGNvbmZpcm0oXCJBcmUgdSBzdXJlIHUgd2FudCB0byBkZWxldGVcIiArIHVzZXIubmFtZSArIFwiP1wiKSl7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudXNlcnMuaW5kZXhPZih1c2VyKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy51c2Vycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuZGVsZXRlVXNlcih1c2VyLmlkKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ291bGQgbm90IGRlbGV0ZSB0aGUgdXNlci5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcnMuc3BsaWNlKGluZGV4LCAwLCB1c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
