import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntrepreneurComponent} from './entrepreneur.component';
import {BoardComponent} from './board/board.component';
import {ProjectComponent} from './project/project.component';
import {AddProjectComponent} from './add-project/add-project.component';


const routes: Routes = [
  {path:'', component:EntrepreneurComponent,
  children:[
    {path:'board',component:BoardComponent},
    {path:'', redirectTo:'board',pathMatch:'full'},
    {path:'projects',component:ProjectComponent},
    {path:'add-project', component:AddProjectComponent}

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepreneurRoutingModule { }
