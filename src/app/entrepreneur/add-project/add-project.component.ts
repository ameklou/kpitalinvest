import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectService} from '../../services/project.service';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  addprojectForm:FormGroup;
  categories:Observable<any>;
  steps:Observable<any>;

  constructor(private fb:FormBuilder, private projectService:ProjectService, private afAuth:AngularFireAuth) {

  }

  ngOnInit() {
    this.addprojectForm=this.fb.group({
      'title':['',[Validators.required]],
      'category':['',[Validators.required]],
      'step':['',[Validators.required]],
      'capitale':['',[Validators.required]],
      'description':['',[Validators.required]],
      'summary':['',[Validators.required,Validators.max(200)]]
    });

    this.categories=this.projectService.getCategories();
    this.steps=this.projectService.getSteps();
  }

  get user():User {
    return this.afAuth.auth.currentUser;
  }

  getDateTimeNow(){
    let dateTime = new Date();
    return dateTime.toDateString();
  }

  addproject(){
    const data= this.addprojectForm.value;
    data.created_at=this.getDateTimeNow();
    data.validated=false;
    data.owner=this.user.uid;
    data.logo="https://firebasestorage.googleapis.com/v0/b/kpitalinvest.appspot.com/o/kpitalinvest1.png?alt=media&token=1e4ca97b-39e7-45e2-94bc-bd9c52877c6d"
    this.projectService.addproject(data);


  }

}
