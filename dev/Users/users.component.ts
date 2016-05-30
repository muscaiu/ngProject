import {Component, OnInit} from 'angular2/core';
import {RouterLink } from 'angular2/router';

import {UserService} from './user.service';

@Component({
    selector:'users',
    templateUrl: 'dev/Users/users.component.html',
    providers:[UserService],
    directives: [RouterLink] 
})

export class UsersComponent implements OnInit{
    isLoading = true;
    users : any;
    
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