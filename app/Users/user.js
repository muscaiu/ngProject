System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Address, User;
    return {
        setters:[],
        execute: function() {
            Address = (function () {
                function Address() {
                }
                return Address;
            }());
            exports_1("Address", Address);
            User = (function () {
                function User() {
                    this.address = new Address();
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXJzL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUFBO2dCQUtBLENBQUM7Z0JBQUQsY0FBQztZQUFELENBTEEsQUFLQyxJQUFBO1lBTEQsNkJBS0MsQ0FBQTtZQUVEO2dCQUFBO29CQUlJLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQUFELFdBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELHVCQUtDLENBQUEiLCJmaWxlIjoiVXNlcnMvdXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBZGRyZXNzIHtcclxuICAgIHN0cmVldDogc3RyaW5nO1xyXG4gICAgc3VpdGU6IHN0cmluZztcclxuICAgIGNpdHk6IHN0cmluZztcclxuICAgIHppcGNvZGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJ7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGhvbmU6IHN0cmluZztcclxuICAgIGFkZHJlc3MgPSBuZXcgQWRkcmVzcygpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
