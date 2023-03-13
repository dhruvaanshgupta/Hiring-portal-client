import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getChartData(): Observable<any> {
    return this.http.get('http://localhost:8080/hiring_portal_war//api/campuses/counts');
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart(): Observable<any[]> {
    return this.getChartData().pipe(
      map((data: any) => {
        const total = data.registeredStudentCount;
        const selected = data.selectedStudentCount;
        const notSelected = total - selected;
        return [
          {
            
            value: selected,
            name: 'Selected Students'
          },
          {
            
            value: notSelected,
            name: 'Not Selected Students'
          }
        ];
      })
    );
  }
  
}  
