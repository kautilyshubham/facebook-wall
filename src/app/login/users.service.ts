import { Subject } from 'rxjs';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";


@Injectable()
export class userService{
    userChanged =new Subject<string>()

    constructor(private router:Router){}
    private users=[
        {id: "shubham.pandey128@gmail.com", pass: "123456", name: "shubham"},
        {id: "text1@gmail.com", pass: "123456", name: "test1"},
        {id: "text2@gmail.com", pass: "123456", name: "test2"},
        
        
    ]



    verifyUser(email: string, pass: string){

        const object = this.users.find(
            (obj)=>{
                return obj.id === email && obj.pass === pass;
            }
        )
       // this.loggedrole.next(object.role);
        return object;
    };

    logout(){
        localStorage.clear();
        this.userChanged.next(null);
        this.router.navigate(['/']);
        
    }
}