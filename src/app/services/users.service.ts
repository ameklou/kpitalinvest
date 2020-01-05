import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {User} from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:Observable<User[]>;
  private userCollection:AngularFirestoreCollection<User>;
  constructor(private firestore:AngularFirestore) { }


  getUsers(){
    this.userCollection=this.firestore.collection<any>('Users');
    return this.userCollection.snapshotChanges();


  }


  validateUser(id:string){
    this.userCollection=this.firestore.collection<any>('Users');
    this.userCollection.doc(id).update({verified:true})

  }

  desactivate(id:string){
    this.userCollection=this.firestore.collection<any>('Users');
    this.userCollection.doc(id).update({verified:false})

  }



}
