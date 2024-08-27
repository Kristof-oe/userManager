import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { WorlsComponent } from './worls/worls.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListCommentComponent } from './list-comment/list-comment.component';
import { EditUserComponent } from './edit-user/edit-user.component';


export const routes: Routes = [
    {path:'hello', component: HelloComponent},
    {path:'word', component: WorlsComponent},
    {path:'wel', component: WelcomeComponent},
    {path:'users', component: ListUsersComponent},
    {path:'comments', component: ListCommentComponent},
    {path:'edituser/:id', component: EditUserComponent},
    {path:'**', redirectTo: 'wel', pathMatch:'full'},
];