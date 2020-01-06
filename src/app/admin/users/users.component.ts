import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {UsersService} from '../../services/users.service';
import {map} from 'rxjs/operators';
import {MdbTableDirective} from "ng-uikit-pro-standard";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true })
  mdbTable:MdbTableDirective;
  elements: any = [];
  users:any=[];
  headElements = ['ID', 'First','Last', 'Handle'];
  searchText: string = '';
  previous: string;


  constructor(private userService:UsersService) { }


  @HostListener('input')
  oninput() {
    this.searchItems();
  }
  ngOnInit() {
    // for (let i = 0; i <= this.users; i++) {
    //   this.elements.push({
    //       id: i.toString(), first: 'Wpis ' + i, last: 'Last ' + i, handle: 'Handle ' + i
    //     }
    //   );
    // }


    //this.users=this.userService.getUsers();
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

    this.mdbTable.setDataSource(this.users);
    this.previous =this.mdbTable.getDataSource();
  }

  validate(data){
    console.log(data);
    this.userService.validateUser(data)
  }

  desactivate(id: any) {
    this.userService.desactivate(id);

  }

  searchItems() {
    const prev =this.mdbTable.getDataSource();
    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.users =this.mdbTable.getDataSource();
    }
    if (this.searchText)
    {
      this.users =this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }
}
