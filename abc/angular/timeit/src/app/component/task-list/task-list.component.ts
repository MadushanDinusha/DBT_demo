import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../common/User'
import { UserServiceService } from 'src/app/service/user-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MaterialModule } from '../../material/material.module';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  ElementData : Task[]=[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Task>(this.ElementData)
  searchKey!: String;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  
  constructor(private userService:UserServiceService,private ma:MatSliderModule) { }


  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  
  loadData(id: number){
    this.userService.getTasks(id)
    .subscribe(res => {
      this.dataSource.data = res as Task[];
    })
  }

 

  
}
