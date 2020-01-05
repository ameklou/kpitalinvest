import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { NavComponent } from './nav/nav.component';
import {DropdownModule, IconsModule, NavbarModule, WavesModule} from 'ng-uikit-pro-standard';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [AdminComponent, AdminboardComponent, NavComponent, UsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    IconsModule,
    DropdownModule,
    WavesModule,
    NavbarModule
  ]
})
export class AdminModule { }
