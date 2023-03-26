import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FinalReportsService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:3000/reports';
  getReportData(): Observable<any> {
    return this.http.get('http://localhost:8080/hiring_portal_war/score/get');
  }
}