import { Component, OnInit } from 'angular2/core';

import {PostService} from './post.service';
import {UserService} from '../Users/user.service';
import {SpinnerComponent} from '../CustomHtml/spinner.component';

@Component({
    styles:[`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1; } 
        .list-group-item.active, 
        .list-group-item.active:hover, 
        .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
    `],
    selector: 'posts',
    templateUrl: 'dev/Posts/posts.component.html',
    providers: [PostService, UserService],
    directives: [SpinnerComponent] , 
})
export class PostsComponent implements OnInit {
	posts = [];
    users = [];
    postsLoading;
    commentsLoading;
    currentPost;
    
    constructor(
        private _postService: PostService,
        private _userService: UserService) {
	}

	ngOnInit() {
        this.loadUsers();
        this.loadPosts();        
	}
    
    private loadUsers(){
        this._userService.getUsers()
            .subscribe(users => this.users = users);
    }
    
    private loadPosts(filter?){
        this.postsLoading = true; 
		this._postService.getPosts(filter)
			.subscribe(
                posts => this.posts = posts,
                null,
                () => { this.postsLoading = false; });
    }
    
    reloadPosts(filter){
        this.currentPost = null;
        
        this.loadPosts(filter);
    }
    
    select(post){
		this.currentPost = post; 
        
        this.commentsLoading = true;
        this._postService.getComments(post.id)
			.subscribe(
                comments => 
                    this.currentPost.comments = comments,
                null,
                () => this.commentsLoading = false); 
    } 
}