import { Router } from '@angular/router';
import { userService } from './users.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalid =false;
  constructor(private userService: userService,
              private router: Router) { }

  ngOnInit() {
  }
  onFormSubmit(f: NgForm){
    const email = f.value.email;
    const pass = f.value.pass;
    let obj = this.userService.verifyUser(email, pass);
    if(obj){
      localStorage.setItem('currentuserName', obj.name);
      this.userService.userChanged.next(obj.name);
      this.router.navigate(["home"]);
  }
  else{
    this.invalid = true;
  }
  f.reset();
}

}