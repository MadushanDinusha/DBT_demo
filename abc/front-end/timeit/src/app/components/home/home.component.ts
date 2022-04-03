import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';
import { TaskService } from 'src/app/services/task.service';
import { SaveTaskComponent } from '../task/save-task/save-task.component';


export interface Task{
  id:number;
  fromDate:Date;
  toDate:Date;
  type:String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;


  task1StartTime = ""
  task1EndTime = ""
  task2StartTime = ""
  task2EndTime = ""
  task1Type=""
  task2Type=""
  isTodayTask1=false;
  isTodayTask2=false;
  myDate = new Date();

  constructor(private taskService:TaskService,private authService:AuthService,public datepipe: DatePipe,
    private matDialog:MatDialog) { 
    
  }

  ngOnInit(): void {
    this.getNextTasks()
    console.log(this.isTodayTask1)
    console.log(this.isTodayTask2)
  }

  openCreateTask(){
    this.matDialog.open(SaveTaskComponent)
  }

  getTodayTasks1(date:any){
   let today = this.datepipe.transform(this.myDate,'yyyy-MM-dd')
  if(today==date){
    console.log(today +" and "+date)
   return this.isTodayTask1=true;
  }
  else{
    return this.isTodayTask1=false;
  }
  }

  getTodayTasks2(date:any){
    let today = this.datepipe.transform(this.myDate,'yyyy-MM-dd')
   if(today==date){
     console.log(today +" and "+date)
    return this.isTodayTask2=true;
   }
   else{
     return this.isTodayTask2=false;
   }
   }

  formatDate(date: Date){
  console.log(date)
   let d =  new Date(date);
    return d.toUTCString();
  }

  getNextTasks(){
    var name = this.authService.getLoggedInUserName()
    console.log(name)
    this.taskService.getTasks(name)
    .subscribe(res => {
      res as Task[];
      console.log(res)
     if(res.length>0){
      if(this.getTodayTasks1(this.datepipe.transform(res[0].fromDate, 'yyyy-MM-dd'))){
        this.task1Type = res[0].type;
        this.task1StartTime = this.formatDate(res[0].fromDate)
        this.task1EndTime = this.formatDate(res[0].toDate)
      
      }}
      if(res.length > 1){
        if(this.getTodayTasks2(this.datepipe.transform(res[1].fromDate, 'yyyy-MM-dd'))){
          this.task2Type = res[1].type;
        this.task2StartTime = this.formatDate(res[1].fromDate)
        this.task2EndTime = this.formatDate(res[1].toDate)
        }
      }
     
     

     
     
    })
  }

}
