import { Component } from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from'angular2/router'

import {NavbarComponent} from './Nav/navbar.component'
import {HomeComponent} from './Home/home.component'
import {UsersComponent} from './Users/users.component'
import {PostsComponent} from './Posts/posts.component'
import {UserFormComponent} from './Users/user-form.component'

@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent},
    {path: '/users', name: 'Users', component: UsersComponent},
    {path: '/users/new', name: 'NewUser', component: UserFormComponent},
    {path: '/posts', name: 'Posts', component: PostsComponent},
    {path: '/*other', name: 'Home', redirectTo: ['Home']}
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
                //  HomeComponent,
                //  UsersComponent,
                //  PostsComponent,
                 ROUTER_DIRECTIVES]
})
export class AppComponent {
    
}