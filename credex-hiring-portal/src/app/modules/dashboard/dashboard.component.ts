import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable,of } from 'rxjs';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userRole = '';
  
  cards = [];
  pieChart: Observable<any[]>;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
      this.pieChart.subscribe(data => {
        console.log(data);
      });
      this.userRole = sessionStorage.getItem('roleId');
    }
  }
