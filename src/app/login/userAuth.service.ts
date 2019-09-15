import { userService } from './users.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class AuthUser implements CanActivate{

    constructor(private router:Router){}
    canActivate(){
        if(localStorage.getItem("currentuserName")){
            return true
        }
        else{
            this.router.navigate(["/"]);
            return false;
        }
    }
}