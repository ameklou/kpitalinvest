import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Category, Project, Step} from '../models/project';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private firestore:AngularFirestore, private router:Router) { }


  addCategory(data){
    return this.firestore.collection<Category>('Categories').add(data);
  }
  getCategories(){
    return this.firestore.collection<Category>("Categories").valueChanges();
  }


  addStep(data){
    return this.firestore.collection<Step>('Steps').add(data);
  }
  getSteps(){
    return this.firestore.collection<Step>("Steps").valueChanges();
  }

  addproject(data){
    this.firestore.collection<Project>("Projects").add(data).then(
      ()=>{
        this.router.navigate(['entrepreneur'])
      }
    );

  }

  getProjects(){
    return this.firestore.collection<Project>('Projects').snapshotChanges();
  }
}
