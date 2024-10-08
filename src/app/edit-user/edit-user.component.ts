import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {User} from '../model/user';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent implements OnInit {

  editIsDisable: boolean
 userId: any
 user:User
 route: ActivatedRoute
 http: HttpClient

 constructor(route: ActivatedRoute, http: HttpClient) {
    this.editIsDisable=true;
    this.userId='';
    this.user=new User()
    this.route= route;
    this.http=http;
  
 }
  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.http.get<User>('https://dummyjson.com/users/'+ param['id'])
      .subscribe(resp=>{
        

        this.user.id=resp.id
        this.user.firstName=resp.firstName
        this.user.lastName=resp.lastName
        this.user.age=resp.age
        this.user.gender=resp.gender
        this.user.email=resp.email
        this.user.phone=resp.phone
        this.user.username=resp.username
        this.user.password=resp.password
        this.user.birthDate=resp.birthDate
        this.user.image=resp.image

      }, error=>
      (console.error('Error happaned!', error)
    ))
    })
  }

  public updateUser(){

    this.http.put('https://dummyjson.com/users/'+ this.user.id, this.user)
    .subscribe(
      (success)=>console.log(success),
      (error)=> console.log(error)
    )
  }
}
