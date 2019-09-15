import { Post } from './post.model';
import { PostService } from './allpost.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  photoadded=false;
  messg;
  img;
  constructor(private postService:PostService) { }

  ngOnInit() {
  }

  submit(f: NgForm){
      
      if(f){
        console.log(f.value.msg);
        this.postService.addMessage(f.value.msg, f.value.img);
        f.reset();
      }
    }
    
   
  

}
