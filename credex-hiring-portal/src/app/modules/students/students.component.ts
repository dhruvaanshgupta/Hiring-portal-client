import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { StudentDetailsComponent } from 'src/app/student-details/student-details.component';
import { StudentService } from 'src/app/students.service';
import { CoreService } from '../../core/core.service';

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
    'password',
    'FirstName',
    'LastName',
    'roleId',
    'language',
    'details',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  input: any;

  constructor(
    private dialog: MatDialog,
    private studentService: StudentService,
    private coreService: CoreService
  ) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.data = this.studentService.students;
  }



  openDialog() {
    const dialogRef = this.dialog.open(StudentDetailsComponent);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
