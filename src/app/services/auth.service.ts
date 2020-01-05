import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from '../models/user';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseAuth:AngularFireAuth, private firestore:AngularFirestore, private ngZone:NgZone, private route:Router) { }


  login(data){
    this.firebaseAuth.auth.signInWithEmailAndPassword(data.email,data.password).then(
      (result)=>{
        console.log(result)
      }
    )
  }


  getDateTimeNow(){
    let dateTime = new Date();
    return dateTime.toDateString();
  }


  registration(data){
    this.firebaseAuth.auth.createUserWithEmailAndPassword(data.email,data.password)
      .then(
        (result)=>{
          const userD={
            'uid':result.user.uid,
            'name':data.name,
            'country':data.country,
            'role':data.role,
            'verified':false,
            'idCard':'',
            'phone':data.phone,
            'bio':data.bio,
            'created_at':this.getDateTimeNow()

          };

          this.firestore.collection<User>('Users').add(userD).then(
            (result)=>{
              //console.log("ok dome")
              this.firebaseAuth.auth.signOut().then(
                ()=>{
                  this.ngZone.run(
                    ()=>{
                      this.route.navigate(['unconfirmated'])
                    }
                  );
                }
              )
            }
          )


        }
      )
  }
}
