import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../components/user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = new User();
  private baseUrl = "http://localhost:8081/api/v1"
  constructor(private httpClient : HttpClient) { }

  getUserId(name: string):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getRoles/${name}`);
  }

  getAllUsers():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getUsers`)
  }

  saveUser(user:User,roles:string):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/user/save/${roles}`,user)
  }
}
