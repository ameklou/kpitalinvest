import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { NavComponent } from './nav/nav.component';
import {
  BreadcrumbModule,
  ButtonsModule,
  DropdownModule,
  IconsModule,
  InputsModule,
  NavbarModule,
  TableModule,
  WavesModule
} from 'ng-uikit-pro-standard';
import { UsersComponent } from './users/users.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


@NgModule({
  declarations: [AdminComponent, AdminboardComponent, NavComponent, UsersComponent, ProjectListComponent, ProjectDetailComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        IconsModule,
        DropdownModule,
        WavesModule,
        NavbarModule,
        ButtonsModule,
        InputsModule,
        BreadcrumbModule,
        FormsModule,
        TableModule,
        ReactiveFormsModule
    ]
})
export class AdminModule { }
