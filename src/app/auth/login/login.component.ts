import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private fb:FormBuilder, private authService:AuthService) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      'email':['',[Validators.email, Validators.required]],
      'password':['',Validators.required]
    })
  }

  login(){
    const data=this.loginForm.value;
    this.authService.login(data);

  }
}
