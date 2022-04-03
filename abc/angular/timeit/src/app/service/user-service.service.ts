import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  private baseUrl = "http://localhost:8081/api/v1"
  
  constructor(private httpClient : HttpClient) { }

  getTasks(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/getTasks/${id}`);
  }
}
