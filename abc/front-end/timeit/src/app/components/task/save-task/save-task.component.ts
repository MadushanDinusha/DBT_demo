import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

interface Type {
  value: string;
  viewValue: string;
}

export class Task{
  fromDate!:String;
  toDate!:String;
  type!:String;
  time!:{hour: 14, minute: 30};
}


@Component({
  selector: 'app-save-task',
  templateUrl: './save-task.component.html',
  styleUrls: ['./save-task.component.css']
})

export class SaveTaskComponent implements OnInit {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  task: Task = new Task();
  submitted = false;
  myDatePickerFrom=''
  myDatePickerTo=''

  
  
  foods: Type[] = [
    {value: 'PHONE', viewValue: 'PHONE'},
    {value: 'MEETING', viewValue: 'MEETING'},
    
  ];


  registerForm!: FormGroup;

  constructor(private taskService:TaskService, private router:Router,private formBuilder: FormBuilder,private authService:AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fromDate: [''],
      toDate: [''],
      type: [''],
      time:['']
  });
  }

  newStudent() : void{
    this.submitted = false;
  }

  onClear() {
  //  this.notificationService.success('Submitted successfully');
  }

  save(){
    var name = this.authService.getLoggedInUserName();
    console.log(this.task)
    console.log(this.registerForm);
    this.taskService.createTask(this.task,name)
      .subscribe(data => console.log(data));
    this.gotolist();
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
  }

    this.submitted = true;
    this.save();   
    //this.notificationService.success('Submitted successfully');
    this.onClose();
  }
  
  onClose(){
  
  // this.dialogRef.close();
  }

  gotolist(){
    console.log('path')
    this.router.navigate(['/home']);
  }
}
