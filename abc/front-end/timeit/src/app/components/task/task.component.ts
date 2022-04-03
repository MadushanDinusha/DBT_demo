import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TaskService } from 'src/app/services/task.service';

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

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  students!: Observable<Task[]>;
  displayedColumns: string[] = ['id','type'];
  public dataSource = new MatTableDataSource<Task>()
  searchKey! : String;


  constructor(private taskService:TaskService,private router: Router,private route: ActivatedRoute,private authService:AuthService) { 
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data, filter) => {
      return this.displayedColumns.some(ele => {
        //return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
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
    this.taskService.getTasks(name)
    .subscribe(res => {
      this.dataSource.data = res as Task[];
    })
  }

  handleLogout() {
    this.authService.logout();
  }


}
