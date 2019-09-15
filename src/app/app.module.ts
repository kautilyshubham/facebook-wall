import { LoginAccess } from './login/loginAccessAuth.service';
import { AuthUser } from './login/userAuth.service';
import { userService } from './login/users.service';
import { FormsModule } from '@angular/forms';
import { PostService } from './post/allpost.service';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';


const appRoute:Routes =[
  {path: "", component: LoginComponent, canActivate: [LoginAccess]},
  {path:"home", component:HomeComponent, canActivate: [AuthUser]},
  {path:"home/post", component:PostComponent, canActivate: [AuthUser]},
  
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
  ],
  providers: [PostService,userService,AuthUser,LoginAccess],
  bootstrap: [AppComponent]
})
export class AppModule { }
