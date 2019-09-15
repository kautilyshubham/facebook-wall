import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Post } from './post.model';
import { Injectable } from '@angular/core';


@Injectable()
export class PostService{
    messageChanged = new Subject<Post[]>();
    constructor(private router: Router){}

    private meassages: Post[]=[
        {msgId:"F7toO5L7",name: " shubham",msg: "There is very good weather", img:"https://pbs.twimg.com/profile_images/525966344252973056/7aQ64zRX.jpeg",
        likeCount:0,comments:[] }
    ];
    getmessages(){
        return this.meassages;
    }

    addMessage(msg? , img?){
        const msgId =this.idGenerator()
        this.meassages.push({
            name: localStorage.getItem("currentuserName"),
            msgId: msgId,
            msg: msg,
            img: img,
            likeCount: 0,
            comments: [],
        })
        this.messageChanged.next(this.meassages);
        this.router.navigate(["home"]);
    }

    incereaseLikeCount(id){
        let index = this.meassages.findIndex(
            obj=>{
             return obj.msgId === id
            }
        )
        this.meassages[index].likeCount+=1;
        console.log(this.meassages[index].likeCount);
        this.messageChanged.next(this.meassages);
    }

     idGenerator() {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    
        var ID = '';
        for (var i = 0; i < 8; i++) {
            ID += chars[Math.floor(Math.random() * chars.length)];
        }
        return ID;
    }
    
    addComment(id, comment){
    
        let index = this.meassages.findIndex(
            obj=>{
             return obj.msgId === id
            }
        );
        this.meassages[index].comments.push({
            name: localStorage.getItem("currentuserName"),
            comment: comment
        })

        this.messageChanged.next(this.meassages);
    }
}