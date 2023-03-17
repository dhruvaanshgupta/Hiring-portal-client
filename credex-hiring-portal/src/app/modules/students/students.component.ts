import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { StudentDetailsComponent } from 'src/app/modules/student-details/student-details.component';
import { StudentService } from 'src/app/students.service';
import { CoreService } from '../../core/core.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  [x: string]: any;
  openEditForm(_t92: any) {
    throw new Error('Method not implemented.');
  }
  deleteCollege(arg0: any) {
    throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = [
    'id',
    'status',
    'email',
    // 'password',
    'FirstName',
    'LastName',
    'roleId',
    'language',
    //'Experience,
    'details',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  input: any;

  constructor(
    private dialog: MatDialog,
    private studentService: StudentService,
    private coreService: CoreService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.data = this.studentService.students;
    this.getStudentList();
  }
  userdata: any;
  getStudentList() {
    this.studentService.getStudentList().subscribe((response) => {
      this.userdata = response;
      console.log(response);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(StudentDetailsComponent);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
