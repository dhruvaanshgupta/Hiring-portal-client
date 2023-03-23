import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public userRole = '';

  cards = [];
  total: number;
  pieChart: Observable<any[]>;
  selectedStudents: number;
  totalStudents: number;

  constructor(
    private dashboardService: DashboardService,
    private service: AuthService
  ) {}

  ngOnInit() {
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.pieChart.subscribe((data) => {
      console.log(data);
    });
    this.userRole = sessionStorage.getItem('roleId');

    this.dashboardService.getTotalColleges().subscribe((count) => {
      this.total = count;
    });

    this.dashboardService.getSelectedStudents().subscribe((res) => {
      this.selectedStudents = res;
    });

    this.service.getAllStudentsCount().subscribe((result) => {
      this.totalStudents = result;
    });
  }
}
