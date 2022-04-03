import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { rootCertificates } from 'tls';

export class Roles{
  name!:String
}
export class User{
  username!:string;
  firstName!:string;
  lastName!:string;
  password!:string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private userService:UserService,private formBuilder: FormBuilder) { }
  submitted=false;
  user: User = new User();
  roles!:string;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: [''],
      firstName: [''],
      lastName: [''],
      password: [''],
      gender: [''],
      roles: [''],
  });
  }

  saveuser(){
    console.log(this.user);
    this.userService.saveUser(this.user,this.roles).subscribe(
      data=>console.log()
    )
  }
}
