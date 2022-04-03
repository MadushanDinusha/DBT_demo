import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private taskService:TaskService) { }

  task :any=[];
  displayedColumns: string[]=['id','type'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  ngOnInit(): void {
    
    
  }

}
