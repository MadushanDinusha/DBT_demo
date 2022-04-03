import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SaveTaskComponent } from './components/task/save-task/save-task.component';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timeit';

  constructor(
    private matDialog:MatDialog) { 
    
  }

  openCreateTask(){
    this.matDialog.open(SaveTaskComponent)
  }

  openCreateUser(){
    this.matDialog.open(UserComponent)
  }
}
