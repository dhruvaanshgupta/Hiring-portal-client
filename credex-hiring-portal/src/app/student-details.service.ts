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
  apiUrl = 'http://localhost:3000/students';

  getStudentDetailsById(id: any): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id);
  }
}
