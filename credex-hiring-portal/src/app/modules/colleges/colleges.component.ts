import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DataAddEditComponent } from '../../data-add-edit/data-add-edit.component';
import { CoreService } from '../../core/core.service';
import { CollegesService } from '../colleges.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.scss'],
})
export class CollegesComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'Name',
    'Location',
    'CourseOffered',
    'Contact',
    'CurrentAccrediation',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public getJsonValue: any;
  public postJsonVale: any;

  constructor(
    private dialog: MatDialog,
    private service: CollegesService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCollegesList();
  }

  openAddEditForm() {
    const dialogRef = this.dialog.open(DataAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCollegesList();
        }
      },
    });
  }

  getCollegesList() {
    this.service.getCollegesList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteCollege(id: number) {
    this.service.deleteCollege(id).subscribe({
      next: (res) => {
        this.toastr.success('College deleted!', 'done');
        this.getCollegesList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this.dialog.open(DataAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCollegesList();
        }
      },
    });
  }
}
