import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'


  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'userManager';

  username: string=''
  router: Router


  constructor(router: Router) {
    this.router=router
    
  }

  public searchForUser(){
      this.router.navigateByUrl('/search/' +this.username)
      this.username=''
    }
}
