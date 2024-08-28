import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import {User} from '../model/user';
import {Comment} from '../model/comment';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-list-comments',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-comments.component.html',
  styleUrl: './list-comments.component.scss'
})
export class ListCommentsComponent implements OnInit{

  orderByDecending: boolean
  http: HttpClient
  comments: Array<Comment>
  
  constructor(http: HttpClient) {
    this.orderByDecending=false
    this.http=http
    this.comments=[]
    
  }

 

  ngOnInit(): void {
    this.http.get<any>('https://dummyjson.com/comments')
    .subscribe(resp=>{
      resp.comments.map((x:any)=>{
        let c=new Comment()

        c.id=x.id,
        c.body=x.body
        c.postId=x.postId
        c.user=new User()
        c.user.id=x.user.id
        c.user.username=x.user.username
        c.user.image=this.generateRandomAvatar()


        this.comments.push(c)
        
        
      })
      console.log(this.comments);

    })
  }

  private generateRandomAvatar(): string{
      let index=Math.floor(Math.random()*53)

      return `https://xsgames.co/randomusers/assets/avatars/pixel/${index}.jpg`
  }

  public likeComment(comment: Comment){
    this.comments.find(x=>x.id===comment.id)!.likedCounter++
  }

  public disLikeComment(comment: Comment){
    if(comment.likedCounter>0){
      this.comments.find(x=>x.id===comment.id)!.likedCounter--
    }
   
  }

  orderByLikeNumber(){
    if(this.orderByDecending)
    {
        this.comments.sort((a:Comment, b:Comment) => a.likedCounter -b.likedCounter)
    }else
    {
        this.comments.sort((a:Comment, b:Comment) => b.likedCounter -a.likedCounter)
    }
    this.orderByDecending=!this.orderByDecending
  }
}
