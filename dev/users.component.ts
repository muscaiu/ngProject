import {Component, OnInit} from 'angular2/core';
import {UserService} from './user.service';

@Component({
    selector:'users',
    templateUrl: 'dev/users.component.html',
    providers:[UserService]
})

export class UsersComponent implements OnInit{
    isLoading = true;
    users = [];
    
    constructor(private _userService:UserService){
        
    }
    
    ngOnInit(){
        this._userService.getUsers()
            .subscribe(x => {
                this.users = x;
                this.isLoading = false;
            });    
    }
    
}