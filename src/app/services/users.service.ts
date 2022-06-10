import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");

  //  return [
  //     {id: 0o1,name:'john',city:'Amsterdam',salary:'3500', dob:new Date("05/07/1986")},
  //     {id: 0o2,name:'Reggi',city:'London',salary:'4000', dob:new Date("12/10/1982")},
  //     {id: 0o3,name:'Paul',city:'Vienna',salary:'3000', dob:new Date("04/17/1983")},
  //     {id: 0o4,name:'Mark',city:'Paris',salary:'5000', dob:new Date("05/25/1988")}
  //   ]
  }

  getUser(id: number) {
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
  }
}
