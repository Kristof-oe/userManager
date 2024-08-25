import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { WorlsComponent } from './worls/worls.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    {path:'hello', component: HelloComponent},
    {path:'word', component: WorlsComponent},
    {path:'wel', component: WelcomeComponent},
    {path:'**', redirectTo: 'wel', pathMatch:'full'},
];