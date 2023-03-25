import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentDetailsService {
  updateStudent(student: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:8080/hiring_portal_war/user/getById/';

  getStudentDetailsById(userId: any): Observable<any> {
    return this.http.get(this.apiUrl + userId);
  }
}
