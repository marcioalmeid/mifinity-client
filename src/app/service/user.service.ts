import { Injectable } from '@angular/core';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {User} from "../model/user.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UserService {
  
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://minfinity.cfapps.io/user';

  getUsers() {
   /* let fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
     {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
     {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
     {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
   ];
   return Observable.of(fakeUsers).delay(5000);*/
    return this.http.get<User[]>(this.baseUrl+'/list' );
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '' + id);
  }

  editUser(id: number) {
    return this.http.get<User>(this.baseUrl + '' + id);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/update/' + user.id, user);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl + '/addUser/', user);
  }

  deleteUser(user: User) {
    return this.http.delete(this.baseUrl + '/delete/' + user.id);
  } 
  
}
