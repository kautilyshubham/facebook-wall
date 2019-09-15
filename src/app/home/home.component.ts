import { userService } from './../login/users.service';
import { Post } from './../post/post.model';
import { PostService } from './../post/allpost.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  messages: Post[];
  currentUser;
  cmnt:string;
  constructor(private postService: PostService,
              private router: Router,
              private route: ActivatedRoute,
              private userService: userService) { }

  ngOnInit() {
   
    this.messages= this.postService.getmessages();
    this.postService.messageChanged.subscribe(
      messages=> this.messages = messages
        )
  }
  onLike(id){
   this.postService.incereaseLikeCount(id);
  }
  post(){
    this.router.navigate(["post"], {relativeTo: this.route});
  }
  comment(id, value){
    console.log(value);
    if(value){
      this.postService.addComment(id ,value);
    }
    this.cmnt= "";
  }
}
