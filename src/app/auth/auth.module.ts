import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {ButtonsModule, InputsModule} from 'ng-uikit-pro-standard';
import {ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { UnconfirmatedComponent } from './unconfirmated/unconfirmated.component';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent, UnconfirmatedComponent],
  imports: [
    CommonModule,
    ButtonsModule,
    ReactiveFormsModule,
    InputsModule
  ]
})
export class AuthModule { }
