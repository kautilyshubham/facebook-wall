import { userService } from './users.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class LoginAccess implements CanActivate{

    constructor(private router:Router){}
    canActivate(){
        if(localStorage.getItem("currentuserName")){
            this.router.navigate(["home"]);
            return false;
        }
        else{
            return true;
        }
    }
}