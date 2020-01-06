import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectService} from '../../services/project.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  categoriyForm:FormGroup;
  stepForm:FormGroup;

  categories:Observable<any>;
  steps:Observable<any>;
  projects:Observable<any>;
  constructor(private fb:FormBuilder, private projectService:ProjectService, private router:Router) { }

  ngOnInit() {
    this.categoriyForm=this.fb.group({
      'name':['',[Validators.required]]
    });

    this.stepForm=this.fb.group(
      {
        'name':['',[Validators.required]],
        'description':['',[Validators.required]]
      }
    )

    this.categories=this.projectService.getCategories();
    this.steps=this.projectService.getSteps();

    this.projects=this.projectService.getProjects().pipe(
      map(changes=>changes.map(
        ({payload:{doc}})=>{
          const data= doc.data();
          const id=doc.id;
          return {id,...data}
        }
      ))
    );


    console.log(this.categories)
  }

  addCategory(){
    const data=this.categoriyForm.value;
    this.projectService.addCategory(data).then(
      (result)=>{
        this.router.navigate(['admin/projects-list'])
      }

    )
  }

  addStep(){
    const data = this.stepForm.value;
    this.projectService.addStep(data).then(
      (result)=>{
        this.router.navigate(['admin/projects-list'])
      }

    )
  }

}
