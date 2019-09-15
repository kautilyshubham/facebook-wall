import { userService } from './login/users.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userName;
  constructor(private router: Router,
              private userService: userService){}
  ngOnInit(){
    this.userService.userChanged.subscribe(
      user=>{
        this.userName = user;
      }
    )
    this.userName = localStorage.getItem("currentuserName")  ;
    
  }
 
  logout(){
    this.userService.logout()
    
  }
}
