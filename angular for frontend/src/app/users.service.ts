import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  public registration(user : any){
    return this.http.post("http://localhost:8080/register", user, {responseType : "text" as "json"});
  }
  public listUsers(){
    return this.http.get("http://localhost:8080/users-list");
  }
  public search(username : string){
    return this.http.get("http://localhost:8080/search/" + username);
  }
  public remove(username : string){
    return this.http.get("http://localhost:8080/remove/" + username);
  }
}