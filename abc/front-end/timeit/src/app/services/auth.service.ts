import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  USER_NAME_SESSION_ATTRIBUTE_ID = 'authenticatedUserId'
  public username: string="";
  public password: string="";


  constructor(private http: HttpClient,private userService:UserService) {

  }

  authenticationService(username: string, password: string) {
    let headers = new HttpHeaders({Authorization : 'Basic '+window.btoa(username + ':' + password)})
    return this.http.get('http://localhost:8081/api/v1/basicauth',{headers}).pipe(map((res) => {
     this.username = username;
     this.password = password;
     this.registerSuccessfulLogin(username , password)
   }));
  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username: string , password: string) {

   sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_ID);
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = "";
    this.password = "";
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }
  
  getLoggedInUserId(){
   let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_ID)
   if (user === null) return ''
   console.log("hi this "+user);
   return user
   
  }
  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}
