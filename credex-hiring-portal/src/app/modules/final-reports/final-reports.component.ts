import { Component, Injectable, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FinalReportsService } from './final-reports.service';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-final-reports',
  templateUrl: './final-reports.component.html',
  styleUrls: ['./final-reports.component.scss'],
})
export class FinalReportsComponent {
  displayedColumns = [
    'id',
    'name',
    'technical_score1',
    'technical_score2',
    'scorecard',
    'feedback',
    'status',
    'Action',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  http: any;
  apiUrl: any;
  userId: number;
  user: any;
  constructor(
    private dialog: MatDialog,
    private service: FinalReportsService,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}
  userdata!: MatTableDataSource<any>;
  ngOnInit() {
    this.getReportData();
  }
  getReportData() {
    this.service.getReportData().subscribe((response) => {
      const reportData = [];

      for (const report of response) {
        this.authService.getUserById(report.userId2).subscribe((user) => {
          const reportRow = {
            id: report.userId2,
            name: user.firstName,
            technical_score1: report.technical_score1,
            technical_score2: report.technical_score2,
            scorecard: report.scorecard,
            feedback: report.feedback,
            status: user.status,
          };
          reportData.push(reportRow);

          if (reportData.length === response.length) {
            this.userdata = new MatTableDataSource(reportData);
            this.userdata.sort = this.sort;
            this.userdata.paginator = this.paginator;
          }
        });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userdata.filter = filterValue.trim().toLowerCase();
    if (this.userdata.paginator) {
      this.userdata.paginator.firstPage();
    }
  }

  openDetails(userId: number): void {
    const dialog = this.dialog.open(StudentDetailsComponent, {
      data: { userId },
    });
  }

  updateStatus(id: number, status: boolean) {
    this.authService.getUserById(id).subscribe((user) => {
      const inputData = {
        userId: id,
        firstName: user.firstName,
        lastName: user.lastName,
        emailId: user.emailId,
        contact: user.contact,
        experience: user.experience,
        language: user.language,
        skills: user.skills,
        resumeLink: user.resumeLink,
        status: status,
      };

      this.authService.Updateuser(inputData).subscribe((response) => {
        this.getReportData();
        this.toastr.success('Status updated successfully');
      });
    });
  }
}
