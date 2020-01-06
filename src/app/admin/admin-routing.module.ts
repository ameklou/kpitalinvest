import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminboardComponent} from './adminboard/adminboard.component';
import {AdminComponent} from './admin.component';
import {UsersComponent} from './users/users.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';


const routes: Routes = [
  {path:'',component:AdminComponent,
    children:[
      {path:'board',component:AdminboardComponent},
      {path:'', redirectTo:'board',pathMatch:'full'},
      {path:'users',component:UsersComponent},
      {path:'projects-list', component:ProjectListComponent},
      {path:'project-detail/:id',component:ProjectDetailComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
