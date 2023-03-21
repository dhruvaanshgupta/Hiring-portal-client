import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  reports = [
    {
      id: 1,
      name: 'John Doe',
      college_name: 'ABC College',
      technical_score1: 80,
      technical_score2: 75,
      feedback: 'Excellent performance',
      score_card: 100,
    },
    {
      id: 2,
      name: 'Jane Smith',
      college_name: 'XYZ College',
      technical_score1: 90,
      technical_score2: 85,
      feedback: 'Good performance',
      score_card: 100,
    },
    {
      id: 3,
      name: 'Bob Johnson',
      college_name: 'DEF College',
      technical_score1: 70,
      technical_score2: 80,
      feedback: 'Average performance',
      score_card: 100,
    },
    {
      id: 4,
      name: 'Alice Lee',
      college_name: 'GHI College',
      technical_score1: 85,
      technical_score2: 90,
      feedback: 'Very good performance',
      score_card: 100,
    },
    {
      id: 5,
      name: 'Tommy Brown',
      college_name: 'JKL College',
      technical_score1: 75,
      technical_score2: 70,
      feedback: 'Below average performance',
      score_card: 100,
    },
  ];

  constructor(private http: HttpClient) {}
  getReportData(): Observable<any> {
    return this.http.get('http://localhost:3000/reports');
  }

  getReports() {
    return this.reports;
  }
}
