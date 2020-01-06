import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepreneurRoutingModule } from './entrepreneur-routing.module';
import { EntrepreneurComponent } from './entrepreneur.component';
import { BoardComponent } from './board/board.component';
import { NavComponent } from './nav/nav.component';
import {DropdownModule, IconsModule, InputsModule, NavbarModule, WavesModule} from 'ng-uikit-pro-standard';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectComponent } from './project/project.component';
import { AddprojectComponent } from './addproject/addproject.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [EntrepreneurComponent, BoardComponent, NavComponent, AddProjectComponent, ProjectComponent, AddprojectComponent],
  imports: [
    CommonModule,
    EntrepreneurRoutingModule,
    NavbarModule,
    IconsModule,
    DropdownModule,
    WavesModule,
    InputsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EntrepreneurModule { }
