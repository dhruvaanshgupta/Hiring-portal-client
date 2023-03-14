import { Component,OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DataAddEditComponent } from '../../data-add-edit/data-add-edit.component';
import { CoreService } from '../../core/core.service'
import { CollegesService } from '../colleges.service'

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.scss']
})
export class CollegesComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'Name',
    'Location',
    'CourseOffered',
    'Contact',
    'CurrentAccrediation',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public getJsonValue: any;
  public postJsonVale: any;

  constructor(
    private _dialog: MatDialog,
    private _empService: CollegesService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getCollegesList();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(DataAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCollegesList();
        }
      },
    });
  }

  getCollegesList() {
    this._empService.getCollegesList().subscribe({
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
    this._empService.deleteCollege(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getCollegesList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(DataAddEditComponent, {
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

