import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user : Users = new Users("","",0,"","");
  getData : any
  constructor(private userService : UsersService) { }

  ngOnInit(): void {
  }
  public registerUser(){
    let response = this.userService.registration(this.user);
    response.subscribe(data => this.getData = data);
  }

}
