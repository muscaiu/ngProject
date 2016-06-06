import { Component } from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from'angular2/router'

import {NavbarComponent} from './Nav/navbar.component';
import {HomeComponent} from './Home/home.component';
import {UsersComponent} from './Users/users.component';
import {PostsComponent} from './Posts/posts.component';
import {UserFormComponent} from './Users/user-form.component';
import {NotFoundComponent} from './Users/not-found.component';

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent },
	{ path: '/users', name: 'Users', component: UsersComponent },
	{ path: '/users/:id', name: 'EditUser', component: UserFormComponent },
	{ path: '/users/new', name: 'NewUser', component: UserFormComponent },
    { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/not-found', name: 'NotFound', component: NotFoundComponent },
	{ path: '/*other', name: 'Other', redirectTo: ['Home'] }        
])

@Component({
    selector: 'my-app',
    template:`
    <navbar></navbar>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    ` ,
    directives: [NavbarComponent,
                 ROUTER_DIRECTIVES]
})
export class AppComponent {
    
}