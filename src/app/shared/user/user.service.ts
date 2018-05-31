import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }
  
  public API = 'https://minfinity.cfapps.io/';
  public USER_API = this.API + '/user';

  getAll(): Observable<any> {
    return this.http.get(this.API + '/list');
  }

  get(id: string) {
    return this.http.get(this.USER_API + '/' + id);
  }

  save(user: any): Observable<any> {
    let result: Observable<Object>;
    if (user['userName']) {
      result = this.http.put(user.userName, user);
    } else {
      result = this.http.post(this.USER_API, user);
    }
    return result;
  }

  remove(userName: string) {
    return this.http.delete(userName);
  }

}