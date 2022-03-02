import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  getUsersData : any
  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    let response = this.userService.listUsers();
    response.subscribe(data => this.getUsersData = data);
  }
  public removeUser(username : string){
    let response = this.userService.remove(username);
    response.subscribe(data => this.getUsersData = data);
  }
}
