import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  private baseUrl = "http://localhost:8081/api/v1"
  constructor(private httpClient : HttpClient) { }

  getUserId(name: string):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getRoles/${name}`);
  }
}
