import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { StudentDetailsComponent } from 'src/app/modules/student-details/student-details.component';
import { StudentService } from 'src/app/students.service';
import { CoreService } from '../../core/core.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'emailId',
    'firstName',
    'lastName',
    'status',
    'details',
  ];

  dataSource: any;
  userdata: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private studentService: StudentService,
    private dialog: MatDialog,
    private coreService: CoreService,
    private http: HttpClient
  ) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    this.studentService.getStudentList().subscribe((res) => {
      this.userdata = res.filter((user) => user.roleId === 'Student');
      this.dataSource = new MatTableDataSource(this.userdata);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.data = this.userdata;
    });
  }

  openDialog(userId: number): void {
    const dialogRef = this.dialog.open(StudentDetailsComponent, {
      data: { userId },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
