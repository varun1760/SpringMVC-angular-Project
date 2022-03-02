import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent implements OnInit {

  username : any
  getData : any
  constructor(private userService : UsersService) { }

  ngOnInit(): void {
  }
  public searchUser(){
    let response = this.userService.search(this.username);
    response.subscribe(data => this.getData = data);
  }
}
