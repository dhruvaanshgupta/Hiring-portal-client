import { Component, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from 'src/app/shared/updatepopup/updatepopup.component';
import { data } from 'jquery';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss'],
})
export class UserRolesComponent {
  constructor(private service: AuthService, private dialog:MatDialog) {
    this.Loaduser();
  }
  userlist: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatPaginator) sort!: MatSort;

  Loaduser() {
    this.service.GetAll().subscribe((res) => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayedColumns: string[] = [
    'id',
    'firstName',
    'emailId',
    'roleId',
    'action',
  ];
  UpdateUser(code: any) {
    const popup = this.dialog.open(UpdatepopupComponent,{
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
      width:'50%',
      data:{
        usercode: code
      }
    })
    popup.afterClosed().subscribe(res=>{
      this.Loaduser();
    });
  }

  opendialog() {
    
  }
}
