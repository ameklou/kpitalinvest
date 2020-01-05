import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {UsersService} from '../../services/users.service';
import {map} from 'rxjs/operators';
import {MdbTableDirective} from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true })
  users:Observable<any>;
  searchText: string = '';
  mdbTable:MdbTableDirective;
  previous: string;

  constructor(private userService:UsersService) { }

  @HostListener('input')
  oninput() {
    this.searchItems();
  }

  ngOnInit() {

    this.users= this.userService.getUsers().pipe(
      map(
        changes=>changes.map(
          ({payload:{doc}})=>{
            const data = doc.data();
            const id=doc.id;
            return {id,...data}
          }
        )
      )
    );

    //this.mdbTable.setDataSource(this.users);

    console.log(this.mdbTable)
  }


  validate(data){

    this.userService.validateUser(data)
  }

  desactivate(id: any) {
    this.userService.desactivate(id);

  }


  searchItems(){
    const prev = this.mdbTable.getDataSource();
    if (!this.searchText) {
      this.mdbTable.setDataSource(this.users);
      this.users =this.mdbTable.getDataSource();
    }
    if (this.searchText) {
      this.users =this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }
}
