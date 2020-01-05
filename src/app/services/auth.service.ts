import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:any;

  constructor(private firebaseAuth:AngularFireAuth,
              private firestore:AngularFirestore,
              private ngZone:NgZone,
              private route:Router,
              private userService:UsersService) {
    this.firebaseAuth.authState.subscribe(
      user=>{
        if(user){

          this.userService.getUserById(user.uid).forEach(
            datas=>{
              datas.forEach(
                value=>{
                  this.userData=value.data();
                  //console.log(this.userData);
                  localStorage.setItem('userData',JSON.stringify(this.userData));
                }
              )
            }
          );

        }else{
          localStorage.setItem('userData',null);
        }
      }
    )
  }


  login(data){
    this.firebaseAuth.auth.signInWithEmailAndPassword(data.email,data.password).then(
      (result)=>{
        this.route.navigate(['entrepreneur'])
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

  signOut() {
    return this.firebaseAuth.auth.signOut().then(() => {
      localStorage.removeItem('userDate');
      localStorage.removeItem('user');

      this.route.navigate(['login']);
    })
  }

}
