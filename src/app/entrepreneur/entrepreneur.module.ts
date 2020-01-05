import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepreneurRoutingModule } from './entrepreneur-routing.module';
import { EntrepreneurComponent } from './entrepreneur.component';
import { BoardComponent } from './board/board.component';
import { NavComponent } from './nav/nav.component';
import {DropdownModule, IconsModule, NavbarModule, WavesModule} from 'ng-uikit-pro-standard';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectComponent } from './project/project.component';
import { AddprojectComponent } from './addproject/addproject.component';


@NgModule({
  declarations: [EntrepreneurComponent, BoardComponent, NavComponent, AddProjectComponent, ProjectComponent, AddprojectComponent],
  imports: [
    CommonModule,
    EntrepreneurRoutingModule,
    NavbarModule,
    IconsModule,
    DropdownModule,
    WavesModule
  ]
})
export class EntrepreneurModule { }
