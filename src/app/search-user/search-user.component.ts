import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { subscribe } from 'diagnostics_channel';
import { User } from '../model/user';
import { CommonModule } from '@angular/common';
import {ListUsersComponent} from '../list-users/list-users.component'
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-search-user',
  standalone: true,
  imports: [CommonModule, ListUsersComponent, RouterModule],
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.scss'
})
export class SearchUserComponent {

  http: HttpClient
  users: Array<any>
  route:ActivatedRoute
  user:any
  
  constructor(http: HttpClient, route:ActivatedRoute) {
    
    this.http=http
    this.route=route
    this.user=undefined
    this.users=[]
    
  }

 

  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      let searchUserName=param['username']

      console.log(searchUserName);

      this.http.get<any>('https://dummyjson.com/users')
      .subscribe(
       resp=> {
        this.users=resp.users

        this.user=this.users.find(x=>
          x.firstName.toUpperCase()===searchUserName.toUpperCase() || 
          x.lastName.toUpperCase()===searchUserName.toUpperCase() ||
          x.username.toUpperCase()===searchUserName.toUpperCase()

        )
       },
       err => console.log(err)
      )
      
    })
  }


  public getProperties(){
    let s:Array<any>=[]
    Object.entries(this.user).forEach(([key, value])=>{
      s.push(`${key}: ${value}`)
    })
    return s
  }
  public deleteUser(user: User){
    console.log(user.id);
    this.http.delete('https://dummyjson.com/users/' +user.id)
    .subscribe((succes)=>{
      console.log(succes)
      let i=this.users.findIndex(x=>x.id===user.id)
      this.users.splice(i,1)
    },(error)=>{
        console.log(`something went wrong with ${user}`)
      
    })
  }
  public userLoaded() : boolean{
    if(this.user===undefined)
      return false
    else
      return true
  }
}
