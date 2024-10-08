import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {User} from '../model/user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 




@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent {
  
  http: HttpClient
  users: Array<User>

  constructor(http: HttpClient) {
    
    this.http=http 
    this.users=[]
    this.getAllUsers()
  }
public formatPhoneNumber(number: string): string{
  return number.replace(' ','-')
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

  private getAllUsers(){
    this.http.get<any>('https://dummyjson.com/users')
    .subscribe(resp=>{
      
      resp.users.map((x: any) => {
        
        let u=new User()

        u.id=x.id
        u.firstName=x.firstName
        u.lastName=x.lastName
        u.age=x.age
        u.gender=x.gender
        u.email=x.email
        u.phone=x.phone
        u.username=x.username
        u.password=x.password
        u.birthDate=x.birthDate
        u.image=x.image

        this.users.push(u)
      })
      
    })
  }
  
}