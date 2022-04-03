import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {DataSource} from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { TaskService } from 'src/app/service/task.service';
import { AuthService } from 'src/app/service/auth.service';


export interface Task{
  id:number;
  fromDate:Date;
  toDate:Date;
  type:String;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})



export class TaskComponent implements OnInit {


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  students: Observable<Task[]>;
  displayedColumns: string[] = ['id','type'];
  public dataSource = new MatTableDataSource<Task>()
  searchKey : String;
  id:number;

 
  constructor(private taskService:TaskService,private router: Router,private route: ActivatedRoute,private authService:AuthService) { 
  }
  
  ngOnInit(): void {
    this.loadData()
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data, filter) => {
      return this.displayedColumns.some(ele => {
        return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
      });
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  loadData(){
  
    var name = this.authService.getLoggedInUserName();
    console.log(name)
    this.taskService.getTasks(name)
    .subscribe(res => {
      this.dataSource.data = res as Task[];
    })
  }

  handleLogout() {
    this.authService.logout();
  }
}
