import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm:FormGroup;

  constructor(private fb:FormBuilder, private authService:AuthService) { }

  ngOnInit() {
    this.registrationForm=this.fb.group({
      'email':['',[Validators.email,Validators.required]],
      'name':['',[Validators.required]],
      'bio':['',[Validators.required]],
      'phone':['',[Validators.required]],
      'password':['',[Validators.required]],
      'role':['',[Validators.required]],
      'country':['',[Validators.required]],

    })
  }

  registration(){
    const data= this.registrationForm.value;
    this.authService.registration(data);


  }

}
