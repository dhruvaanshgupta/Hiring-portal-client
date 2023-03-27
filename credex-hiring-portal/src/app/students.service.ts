import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
 
  constructor(private http: HttpClient) {}

  getStudentList(): Observable<any> {
    return this.http.get('http://localhost:8080/hiring_portal_war/user/get');
  }
}
