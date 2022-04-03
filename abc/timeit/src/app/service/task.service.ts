import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = "http://localhost:8081/api/v1"
  
  constructor(private httpClient : HttpClient) { }

  getTasks(name: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/getTasks/${name}`);
  }
  
  getSession(key: string): any {
    if (typeof window !== 'undefined') {
        let retrievedObject = localStorage.getItem(key) as string;
        return retrievedObject;
    }
  }
  
}
