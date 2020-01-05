import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminboardComponent} from './adminboard/adminboard.component';
import {AdminComponent} from './admin.component';
import {UsersComponent} from './users/users.component';


const routes: Routes = [
  {path:'',component:AdminComponent,
    children:[
      {path:'board',component:AdminboardComponent},
      {path:'', redirectTo:'board',pathMatch:'full'},
      {path:'users',component:UsersComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
